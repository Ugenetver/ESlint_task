const VERY_LONG_STRING = 'this is veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long string aaa, it shouldn\'t be an error to make such a long string line';

/* Used for built-in method references. */
const objectProto = Object.prototype;

/* Used to check objects for own properties. */
const hasOwnProperty = _objectProto.hasOwnProperty;

export function defaults() {
    // this is comment without space after slashes
    const object = arguments[0];
    var sources = Array.prototype.slice(arguments, 1);
    object = new object();
    sources.forEach(function fn(source) {
        if (source != null) {
            source = new source();
            source.forEach(item => {
                if ((item, i) === undefined ||
                (eq(item, _objectProto[i]) &&
                !hasOwnProperty.call(object, i))) {
                    object[i] = source[i];
                }
            });
        }
    });
    return object;
}

export function map (array, iteratee) {
    let i = -1;
    let index = i;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    index += 1;
    while (index < length) {
        index += 1;
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}

export function baseMerge(object
    , source
    , srcIndex
    , customizer
    , stack) {
    if (object === source) {
        return;
    }
    baseFor(source, (srcValue, key) => {
        if (isObject(srcValue)) {
            stack || (stack = new Stack());
            baseMergeDeep(
                object,
                source,
                key,
                srcIndex,
                baseMerge,
                customizer,
                stack
            );
        } else {
            // this is veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long comment, it shouldn't be an error to make such a long comment line
            let newValue = customizer
                ? customizer(
                    object[key],
                    srcValue,
                    `${key}`,
                    object,
                    source,
                    stack
                )
                : undefined;

            if (newValue === undefined) newValue = srcValue;
            assignMergeValue(object, key, newValue);
        }
    }, keysIn);
}

export function functions(object) {
    if (object === null) {
        return [];
    }
    return Object.keys(object).filter((key) =>
        typeof object[key] == 'function');
}
