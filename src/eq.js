/** Created by azder on 2016-11-07. */

const {freeze$, curry} = require('./core');


const eq = curry(
    (a, b) => a === b
);

const neq = curry(
    (a, b) => a !== b
);

module.exports = freeze$({eq, neq});
