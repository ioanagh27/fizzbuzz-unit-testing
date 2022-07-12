const each = require("jest-each").default;
const fizzbuzz = require("../fizzbuzz");

describe("fizzbuzz", () => {
    
    test("fizzbuzz is a function", () => {
        expect(typeof fizzbuzz).toBe("function");
    })

    describe("It reports invalid if no inputs given", () => {
        test("It throws an error if no inputs are given", () => {
            expect(() => {
                fizzbuzz()
            }).toThrow("Error: missing inputs")
        })
    })

    describe("if multiple of three and five it returns a string otherwise it returns the number itself", () => {
        
        each([
            [[15, 30, 45], "Fizzbuzz"],
            [[3, 9, 12], "Fizz"],
            [[5, 10, 50], "Buzz"],
            [[4, 8, 13], 4]
        ]).test("%s -> %s", (arr, expected) => {
            expect(fizzbuzz(...arr)).toEqual(expected)
        })
    })
})

