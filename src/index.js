/**
 * Created by azder on 2016-09-15.
 */

const nfun = Object.assign(
    Object.create(null),
    require('./core'),
    require('./eq'),
    require('./ar'),
    require('./fn'),
    require('./ob'),
    require('./of'),
    require('./try')
);

module.exports = nfun.freeze$(nfun);
