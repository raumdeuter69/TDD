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

describe('Should support multiple delimiters other than comma and throw error when single number is passed with delimiter', () => {
    it('should throw an error if a single number is passed with delimiter', () => {
        expect(() => add("1\n")).toThrow("Invalid input: single number with delimiter");
        expect(() => add("10,")).toThrow("Invalid input: single number with delimiter");
    });
    it('should return the sum of two numbers when two numbers are passed with a newline delimiter', () => {
        expect(add("1\n2")).toBe(3);
        expect(add("10\n20")).toBe(30);
    });
    it('should return the sum of two numbers when two numbers are passed with a custom delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//;\n10;20")).toBe(30);
    });
});

describe('Should handle custom delimiters and negative numbers', () => {
    it('should throw an error when negative numbers are passed', () => {
        expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
        expect(() => add("//;\n1;-2;3;-4")).toThrow("negatives not allowed: -2, -4");
    });
});