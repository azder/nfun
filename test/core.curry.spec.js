/**
 * Created by azder on 2016-09-22.
 */

const {curry} = require('../src/core');

describe('curry', () => {

    beforeEach(() => {

        this.f = (
            (a, b, c, d) => a + b + c + d
        );

        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;

    });

    it('returns new functions for n-1 args', () => {

        const {f, a, b, c, d} = this;

        const fa00 = curry(f, a);
        const fab0 = curry(fa00, b);
        const fabc = curry(fab0, c);

        const result = curry(fabc, d);

        expect(fa00).toBeInstanceOf(Function);
        expect(fab0).toBeInstanceOf(Function);
        expect(fabc).toBeInstanceOf(Function);

        expect(result).toEqual(f(a, b, c, d));

    });

    it('works when function is not re-curried', () => {

        const {f, a, b, c, d} = this;

        const fa00 = curry(f, a);
        const fab0 = fa00(b);
        const fabc = fab0(c);

        const result = fabc(d);

        expect(fa00).toBeInstanceOf(Function);
        expect(fab0).toBeInstanceOf(Function);
        expect(fabc).toBeInstanceOf(Function);

        expect(result).toEqual(f(a, b, c, d));

    });

    it('recalculates the function length (arity)', () => {

        const {f, a, b, c} = this;

        const fa00 = curry(f, a);
        expect(fa00.length).toEqual(f.length - 1);

        const fab0 = curry(fa00, b);
        expect(fab0.length).toEqual(fa00.length - 1);

        const fabc = curry(f, a, b, c);
        expect(fabc.length).toEqual(f.length - 3);

    });

    it('changes the function name', () => {

        const {f, a, b} = this;
        expect([f.name, curry(f, a, b).name]).toEqual(['', '((a, b, c, d) => a + b + c + d)(1,2)']);

        const g = (
            (x, y, z, w) => x + y + z + w
        );
        expect(curry(g, a, b).name).toEqual('g(1,2)');

        const ob = {
            h(x, y, z, w){
                return x + y + z + w;
            },
        };
        expect(curry(ob.h, a, b).name).toEqual('h(1,2)');

    });

});

