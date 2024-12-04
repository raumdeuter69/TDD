const add = require('./index');

describe('add function', () => {
    it('should return 0 when empty string is passed', () => {
        expect(add("")).toBe(0);
    });
});