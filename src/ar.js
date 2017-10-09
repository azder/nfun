/**
 * Created by azder on 2016-09-17.
 */

const {nil, len, freeze$, curry} = require('./core');

const isar = Array.isArray;
const slc = Function.prototype.call.bind(Array.prototype.slice);

const reverse = (
    array => slc(array).reverse()
);

const arcopy = (
    array => slc(array)
);

const slice = curry(
    (begin, end, array) => slc(array, begin, end)
);

const map = curry(
    (fn, obj) => obj && obj.map && obj.map(fn)
);

const reduce$ = curry(
    (fn, init, array) => array.reduce(fn, init)
);

const filter = curry(
    (fn, array) => array.filter(fn)
);

const every = curry(
    (fn, array) => array.every(fn)
);

const some = curry(
    (fn, array) => array.some(fn)
);

const first = (
    array => nil(array) ? void 0 : (isar(array) ? array[0] : array)
);

const second = (
    array => nil(array) ? void 0 : (isar(array) ? array[1] : array)
);

const last = (
    array => nil(array) ? void 0 : (isar(array) ? array[len(array) - 1] : array)
);

const nth = curry(
    (index, array) => nil(array) ? void 0 : array[0 > index ? len(array) + index : index]
);

const take = curry(
    (n, array) => slc(array, 0, 0 > n ? 0 : n)
);

const drop = curry(
    (n, array) => {
        const l = len(array);
        return slc(array, n > l ? l : (0 > n ? 0 : n), l);
    }
);

module.exports = freeze$({
    reverse,
    arcopy,
    slice,
    map,
    reduce$,
    filter,
    every,
    some,
    first,
    second,
    last,
    nth,
    take,
    drop,
});
