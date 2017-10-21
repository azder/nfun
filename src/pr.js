/** Created by azder on 2017-10-08. */


const {curry, freeze$} = require('./core');

const prom = (
    fn => new Promise(fn)
);

const vow = (
    promise => promise.then(data => [null, data]).catch(err => [err])
);

const then = curry(
    (fn, promise) => promise.then(fn).catch(error => Promise.reject(error))
);

const complete = curry(
    (rejected, resolved, promise) => promise.then(resolved).catch(rejected)
);

module.exports = freeze$({
    prom,
    vow,
    then,
    complete,
});
