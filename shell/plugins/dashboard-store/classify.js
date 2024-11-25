
import Resource from './resource-class';

export const BY_TYPE = 'byType';

export const SELF = '__[[SELF]]__';

export function classify(ctx, obj, isClone = false) {
  if ( obj instanceof Resource ) {
    return obj;
  }

  const customModel = ctx.getters['classify'](obj);

  console.log('customModel', customModel , obj);

  const out = new customModel(obj, ctx, null, isClone);

  console.log('customModel - out', out);

  return out;
}
