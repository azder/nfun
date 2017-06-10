/**
 * Created by azder on 2016-09-16.
 */

const mummer = (
    fn => {
        try {
            return fn();
        } catch (e) {
            return void 0;
        }
    }
);

const catcher = (
    fn => {
        try {
            return fn();
        } catch (e) {
            return e;
        }
    }
);

module.exports = {mummer, catcher};
