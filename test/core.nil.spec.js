/** Created by azder on 2017-06-10. */

const {nil, nonil} = require('../src/core');

describe('nil', () => {

    it('returns `true` for `null`', () => {
        expect(nil(null)).toEqual(true);
    });

    it('returns `true` for `undefined`', () => {
        expect(nil(void 0)).toEqual(true);
    });

});

describe('nonil', () => {

    it('returns `false` for `null`', () => {
        expect(nonil(null)).toEqual(false);
    });

    it('returns `false` for `undefined`', () => {
        expect(nonil(void 0)).toEqual(false);
    });

});
