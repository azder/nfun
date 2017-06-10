const {nil, freeze$} = require('./core');

const strof = (
    str => nil(str) ? '' : '' + str
);

const intof = (
    value => Number.parseInt(strof(value), 10)
);

const objof = (
    obj => nil(obj) ? {} : obj
);

const arrof = (
    arr => nil(arr) ? [] : arr
);

module.exports = freeze$({strof, intof, objof, arrof});
