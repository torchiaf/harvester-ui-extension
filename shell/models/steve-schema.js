import { STEVE } from '@shell/config/types';
import Schema from './schema';
import { wait } from '@shell/utils/async';

const SchemaDefinitionCache = {};

/**
 * Steve Schema specific functionality
 */
export default class SteveSchema extends Schema {
  static reset(store) {
    delete SchemaDefinitionCache[store];
  }

  _resourceFields;

  /**
   * If resourceFields have not been provided, they are required to be fetched aka schemaDefinition world
   */
  requiresResourceFields;

  // These are just for typing, eventually we'll get them when Schema is fully converted to typescript
  id;
  type;
  links;
  $ctx;

  /**
   * This should match the root Schema ctor (...args throws ts error)
   */
  constructor(data, ctx, rehydrateNamespace, setClone) {
    super(data, ctx, rehydrateNamespace, setClone);

    if (!SchemaDefinitionCache[this.store]) {
      SchemaDefinitionCache[this.store] = {
        ids:         {},
        definitions: {}
      };
    }

    this.requiresResourceFields = this._resourceFields === null; // This is set pre ctor via `set'er, but TS complains that it's not initialised
  }

  // Notes on Schemas, resourceFields and schemaDefinitions
  // - Schemas previously contained a `resourceFields` collection, which is now null
  // - resourceFields now come from a new `schemaDefinitions` endpoint
  // - for neatness / safety / compatibility with norman resources... we fetch schemaDefinitions and return their resourceFields in a resourceFields getter

  /******************
   * Resource Fields
   ****************** /

  /**
   * Is the property `resourceFields` available
   *
   * If the schema definition is required and it hasn't been fetched this will be false
   *
   * This is a non-erroring request, unlike the resourceFields getter which will error if schema definition is required but missing
   */
  get hasResourceFields() {
    if (this.requiresResourceFields) {
      return !!this.schemaDefinition?.resourceFields;
    }

    return !!this._resourceFields;
  }

  /**
   * Fields associated with instances of this schema
   *
   * This will either come directly from the schema or from the schema's definition
   */
  get resourceFields() {
    if (this.requiresResourceFields) {
      if (!this.schemaDefinitionsIds) {
        throw new Error(`Cannot find resourceFields for Schema ${ this.id } (schemaDefinitions have not been fetched) `);
      }

      if (!this.schemaDefinition) {
        throw new Error(`No schemaDefinition for ${ this.id } found (not in schemaDefinition response) `);
      }

      return this.schemaDefinition.resourceFields;
    }

    return this._resourceFields;
  }

  /**
   * Apply the original `resourceFields` param (if it exists). If it does not then we'll need to fetch the schema definition
   */
  set resourceFields(resourceFields) {
    this._resourceFields = resourceFields;
    this.requiresResourceFields = this._resourceFields === null;
  }

  /**
   * Ensure this schema has a populated `resourceFields` property
   *
   * This happens via making a request to fetch the schema definition
   */
  async fetchResourceFields(depth = 0) {
    if (!this.requiresResourceFields) {
      // Not needed, no-op
      return;
    }

    if (this.schemaDefinition) {
      // Already have it, no-op
      return this.schemaDefinition;
    }

    const url = this.schemaDefinitionUrl;

    if (!url) {
      console.warn(`Unable to fetch schema definitions for ${ this.id } (failed to find url of schema definition)`); // eslint-disable-line no-console

      return;
    }

    if (depth >= 4) {
      console.warn(`Unable to fetch schema definitions for ${ this.id } (too many failed requests)`); // eslint-disable-line no-console

      return;
    }

    let res;

    try {
      // Make a direct request to fetch the schema definition
      res = await this.$dispatch('request', {
        type: STEVE.SCHEMA_DEFINITION,
        url
      });
    } catch (e) {
      if (e?._status === 500 || e?._status === 503) {
        // Rancher could be updating it's definition cache, attempt a few times
        await wait(2000);

        return this.fetchResourceFields(++depth);
      }

      console.warn(`Unable to fetch schema definitions for ${ this.id }`, e); // eslint-disable-line no-console

      return;
    }

    this.cacheSchemaDefinitionResponse(res);

    return this.schemaDefinition;
  }

  /**
   * Convert collection of schema definitions for this schema into objects we can store
   *
   * Split out for unit testing purposes
   */
  cacheSchemaDefinitionResponse(res) {
    const { [res.definitionType]: self, ...others } = res.definitions;
    const store = this.store;

    SchemaDefinitionCache[store].ids[this.id] = { self: self.type, others: Object.keys(others) };
    Object.entries(res.definitions).forEach(([type, sd]) => {
      SchemaDefinitionCache[store].definitions[type] = sd;
    });
  }

  /*********************
   * Schema Definitions
   ********************* /

  /**
   * Store this schema's definition and a collection of associated definitions (all ids)
   */

  /**
   * The schema definition for this schema
   */
  get schemaDefinition() {
    if (!this.schemaDefinitionsIds) {
      return null;
    }

    return SchemaDefinitionCache[this.store].definitions[this.schemaDefinitionsIds.self];
  }

  /**
   * The schema definitions for this schema definition's resourceFields
   */
  get schemaDefinitions() {
    if (!this.schemaDefinitionsIds) {
      return null;
    }

    return this.schemaDefinitionsIds.others.reduce((res, d) => {
      res[d] = SchemaDefinitionCache[this.store].definitions[d];

      return res;
    }, {});
  }

  /**
   * URL to fetch this schema's definition
   */
  get schemaDefinitionUrl() {
    return this.links?.self?.replace('/schemas/', '/schemaDefinitions/');
  }

  /*********************
   * Local Properties
   *
   * This could be set in the ctor, however are removed in `replaceResource` when there are socket updates..
   * ... so use getters instead
   *
   *********************/

  /**
   * The name (namespace) of the vuex store this schema lives in (i.e. cluster, management, etc)
   */
  get store() {
    return this.$ctx.state?.config?.namespace;
  }

  get schemaDefinitionsIds() {
    return SchemaDefinitionCache[this.store]?.ids[this.id];
  }
}