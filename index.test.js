const add = require('./index');

describe('add function', () => {
    it('should return 0 when empty string is passed', () => {
        expect(add("")).toBe(0);
    });
    it('should return the number itself when a single number is passed', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });
    it('should return the sum of two numbers when two numbers are passed', () => {
        expect(add("1,2")).toBe(3);
        expect(add("10,20")).toBe(30);
    });
});