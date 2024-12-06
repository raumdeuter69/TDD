const add = require("./index");

describe("String Calculator tests", () => {
  it("should return 0 when empty string is passed", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });
  it("should return the sum of two numbers when two numbers are passed", () => {
    expect(add("1,2")).toBe(3);
    expect(add("10,20")).toBe(30);
  });
  it("should throw an error if a single number is passed with delimiter", () => {
    expect(() => add("1\n")).toThrow(
      "Invalid input: single number with delimiter",
    );
    expect(() => add("10,")).toThrow(
      "Invalid input: single number with delimiter",
    );
  });
  it("should return the sum of two numbers when two numbers are passed with a newline delimiter", () => {
    expect(add("1\n2")).toBe(3);
    expect(add("10\n20")).toBe(30);
  });
  it("should return the sum of two numbers when two numbers are passed with a custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;\n10;20")).toBe(30);
  });
  it("should throw an error when negative numbers are passed", () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(() => add("//;\n1;-2;3;-4")).toThrow(
      "negatives not allowed: -2, -4",
    );
  });
  it("should just skip when numbers greater than 1000 are passed", () => {
    expect(add("1001")).toBe(0);
    expect(add("1001,3")).toBe(3);
    expect(add("1001,10004")).toBe(0);
  });
  it("should return the sum of numbers with custom delimiter of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[###]\n4###5###6")).toBe(15);
  });
  it("should return the sum of numbers with multiple custom delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("//[;][#]\n4;5#6")).toBe(15);
  });
  it("should return the sum of numbers with multiple custom delimiters of any length", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
    expect(add("//[;;][##]\n4;;5##6")).toBe(15);
  });
});
