/**
 * Created by azder on 2016-09-22.
 */

const nfun = require('../src/index');

describe('nfun', () => {

    const names = [
        // core
        'noop', 'ident', 'nil', 'nonil', 'len', 'df',
        'either', 'maybe',
        'curry', 'ncurry',
        'assign$', 'freeze$',
        // eq
        'eq', 'neq',
        // ar
        'reverse', 'arcopy', 'slice', 'map', 'reduce$',
        'every', 'some', 'first', 'last', 'nth',
        'take', 'drop', 'filter',
        // fn
        'apply', 'compose', 'flow', 'tap',
        // ob
        'prop', 'val', 'nav', 'pick',
        'put$',
        'obasgn', 'asgn$',
        'obassign',
        'disjoin', 'conjoin',
        'fob$', 'zfob$',
        // of
        'strof', 'intof', 'objof', 'arrof',
        // try
        'mummer', 'catcher',
    ]; // names

    it('exports all names', () => {

        names.map(
            fname => (
                expect(nfun[fname]).toBeDefined()
            )
        );

    }); // it

    it('exports names as functions', () => {

        names.map(
            fname => (
                expect(nfun[fname]).toBeInstanceOf(Function)
            )
        );

    });

    it('has no more exposed keys than those in names', () => {
        expect(Object.keys(nfun).sort()).toEqual(names.sort());
    });

    it('is frozen', () => {
        expect(Object.isFrozen(nfun)).toBeTruthy();
    });

    it('does not nullify own properties', () => {

        names.map(
            fname => (
                expect(() => nfun[fname] = null).not.toBeNull()
            )
        );


    }); // it

});


