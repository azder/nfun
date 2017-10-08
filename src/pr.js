/** Created by azder on 2017-10-08. */


const {freeze$} = require('./core');

const prom = (
    fn => new Promise(fn)
);

const vow = (
    promise => promise.then(data => [null, data]).catch(err => [err])
);


module.exports = freeze$({prom, vow});
