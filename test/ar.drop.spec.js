const {drop} = require('../src/ar');

describe('drop function', () => {

    beforeEach(() => {
        this.array = [1, 2, 3, 4];
        this.length = this.array.length;
    });

    it('returns empty array for array\'s length', () => {
        expect(drop(this.length, this.array)).toEqual([]);
    });

    it('returns full array for 0', () => {
        expect(drop(0, this.array)).toEqual(this.array);
    });

    it('returns empty array for length greater than array\'s length', () => {
        expect(drop(2 * this.length, this.array)).toEqual([]);
    });

    it('doesn\' return the original array', () => {
        expect(drop(0, this.array)).not.toBe(this.array);
    });

    it('returns full array for negative number', () => {
        expect(drop(-1, this.array)).toEqual(this.array);
    });


});
