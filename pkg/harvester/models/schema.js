import SteveSchema from '@shell/models/steve-schema';

/**
 * This is the steve schema that's used for the harvester store
 */
export default class HarvesterStoreSchema extends SteveSchema {
    constructor(data, ctx, rehydrateNamespace = null, setClone = false) {
        super(data, ctx, rehydrateNamespace, setClone);
    }
}
