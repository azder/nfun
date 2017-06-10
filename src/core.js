/**
 * Created by azder on 2016-09-17.
 */


const noop = (
    () => {
    }
);

const ident = (
    a => a
);

const nil = (
    value => null === value || void 0 === value
);

const nonil = (
    value => null !== value && void 0 !== value
);

const len = (
    xs => nil(xs) ? xs : (xs.length || 0)
);

// helper for curried function length and name properties
const bind = (
    (length, curry, fn, args) => (
        Object.defineProperties(
            curry.bind(null, fn, ...args),
            {
                length: {value: length - args.length},
                name:   {value: `${fn.name || `(${fn})`}(${args.map(String).join(',')})`},
            }
        )
    )
);

const curry = (
    (fn, ...args) => args.length >= fn.length ? fn(...args) : bind(fn.length, curry, fn, args)
);

// helps when composing variadic functions like console.log
const ncurry = (
    (n, fn, ...args) => args.length >= n ? fn(...args) : bind(n, ncurry, fn, args)
);

const df = curry(
    (left, right) => nil(right) ? left : right
);

const either = curry(
    (left, right, value) => nil(value) ? left(value) : right(value)
);

const maybe = curry(
    (fn, value) => nil(value) ? value : fn(value)
);


const assign$ = Object.assign.bind(null);

const freeze$ = (
    object => {
        Object.freeze(object);
        return object;
    }
);

module.exports = freeze$({
    noop, ident, nil, nonil, len,
    df, either, maybe,
    curry, ncurry,
    assign$, freeze$,
});
