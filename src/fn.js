/**
 * Created by azder on 2016-09-17.
 */


const {curry, freeze$} = require('./core');

const apply = curry(
    (fn, args) => fn.apply(void 0, args)
);

const compose = (
    (...args) => arg => args.reduceRight((x, fn) => fn(x), arg)
);

const flow = (
    (...args) => arg => args.reduce((x, fn) => fn(x), arg)
);

const tap = curry(
    (fn, val) => {
        if (fn) {
            fn(val);
        }
        return val;
    }
);

const unary = (
    fn => arg => fn(arg)
);


module.exports = freeze$({
    apply,
    compose,
    flow,
    tap,
    unary,
});
