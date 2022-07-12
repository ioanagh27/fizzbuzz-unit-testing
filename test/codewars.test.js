const each = require("jest-each").default;
const codewars = require("../codewars");

describe("codewars", () => {
    test("codewars is a function", () => {
        expect(typeof codewars).toBe("function")
    })
})

describe("It reports invalid if no inputs given", () => {
    test("It throws an error if no inputs are given", () => {
        expect(() => {
            codewars()
        }).toThrow("Error: missing inputs")
    })
})

describe("It reports invalid if wrong number given ", () => {
    test("It throws an error if given higher number than twelve", () => {
        expect(() => {
            codewars(13)
        }).toThrow("Error: not a month")
    })
})

describe("which quarter of the year is a month", () => {

    each([
        [[1, 2, 3], 1],
        [[4, 5, 6], 2],
        [[7, 8, 9], 3],
        [[10, 11, 12], 4]
    ]).test("%s -> %s", (arr, expected) => {
        expect(codewars(...arr)).toEqual(expected)
    })
})
