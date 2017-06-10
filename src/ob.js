/**
 * Created by azder on 2016-09-17.
 */

const {nil, curry, freeze$, assign$} = require('./core');
const {map, reduce$} = require('./ar');

const prop = curry(
    (key, object) => nil(object) ? object : object[key]
);

const val = curry(
    (object, key) => nil(object) ? object : object[key]
);

const nav = curry(
    (path, object) => reduce$(val, object, path.split('\.'))
);

const pick = curry(
    (keys, object) => map(val(object), keys)
);

// no curry for variadic function
const obassign = (
    (...args) => assign$({}, ...args)
);

const obasgn = curry(
    (key, value, object) => {
        const o = assign$({}, object);
        o[key] = value;
        return o;
    }
);

const asgn$ = curry(
    (key, value, object) => {
        object[key] = value;
        return object;
    }
);

const put$ = curry(
    (key, object, value) => {
        object[key] = value;
        return value;
    }
);

const disjoin = (
    object => map(key => [key, object[key]], Object.keys(object))
);

const conjoin = (
    array => reduce$((object, [key,value]) => asgn$(key, value, object), {}, array)
);

const fob$ = curry(
    (fn, obj) => assign$(fn, obj)
);

const zfob$ = curry(
    (fn, obj) => freeze$(assign$(fn, obj))
);

module.exports = freeze$({
    nav, prop, val,
    pick,
    put$,
    obasgn, asgn$,
    disjoin, conjoin,
    obassign, assign$,
    fob$, zfob$,
});
