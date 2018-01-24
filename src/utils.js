const VERY_LONG_STRING = 'this is veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long string aaa, it shouldn\'t be an error to make such a long string line';

/*Used for built-in method references. */
const _objectProto = Object.prototype

/* Used to check objects for own properties. */
;const has_own_property = _objectProto.hasOwnProperty

export function defaults( ){

  //this is comment without space after slashes
  const object=arguments[0];
  var sources = Array.prototype.slice(arguments, 1);
  object = new Object(object) ;
  sources.forEach(function(source) {
    if (source != null)
        {
          source = new Object(source)
          for (const key in source) {
            const value = object[key]
            if (value === undefined ||
                (eq(value, _objectProto[key]) && !has_own_property.call(object, key))) {
              object[key] = source[key]
            }
          }
        }
  })
  return object
}

export function map(array,iteratee) {
    let index = i = -1
    const length = array == null ? 0 : array.length
    const result = new Array(length)

    while(++ index < length) {
        result[ index ] = iteratee (array[index], index, array)
    }
    return result
}



export function baseMerge(object
                          , source
                          , srcIndex
                          , customizer
                          , stack) {
    if (object === source) {
        return
    }
    baseFor(source, (srcValue, key) => {
        if (isObject(srcValue)) {
            stack || (stack = new Stack)
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack)
        }
        else {
            // this is veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long comment, it shouldn't be an error to make such a long comment line
            let newValue = customizer ? customizer(object[key], srcValue, `${key}`, object, source, stack) : undefined;

            if (newValue === undefined)
                newValue = srcValue
            assignMergeValue(object, key, newValue)
        }
    }, keysIn)
}

export function functions(object) {
    if (object == null) {
    	return []
    }
    return Object.keys(object).filter((key) =>
        typeof object[key] == "function")
}