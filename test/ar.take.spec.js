const {take} = require('../src/ar');

describe('take function', () => {

    beforeEach(() => {
        this.array = [1, 2, 3, 4];
        this.length = this.array.length;
    });

    it('returns empty array for 0', () => {
        expect(take(0, this.array)).toEqual([]);
    });

    it('returns full array for array\'s length', () => {
        expect(take(this.length, this.array)).toEqual(this.array);
    });

    it('returns full array for length greater than array\'s length', () => {
        expect(take(2 * this.length, this.array)).toEqual(this.array);
    });

    it('doesn\' return the original array', () => {
        expect(take(this.length, this.array)).not.toBe(this.array);
    });

    it('returns empty array for negative number', () => {
        expect(take(-1, this.array)).toEqual([]);
    });


});
