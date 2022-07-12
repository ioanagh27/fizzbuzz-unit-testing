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

    describe("if it`s a multiple of three and five", () => {
        
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


// describe("getLargest", () => {

//     test("getLargest is a function", () => {
//         expect(typeof getLargest).toBe("function");
//     })

//     describe("It reports invalid inputs correctly", () => {
//         test("It throws an error if one of the three inputs is undefined", () => {
//             expect(() => {
//                 getLargest(1, 2)
//             }).toThrow("Error: all inputs must have a value")
//         })
//     })
    
//     describe("It handles normal inputs successfully", () => {
        
//         each([
//             [[1, 2, 3], 3],
//             [[9, 8, 7], 9],
//             [[12, 36, 19], 36]
//         ]).test("%s -> %s", (arr, expected) => {
//             expect(getLargest(...arr)).toEqual(expected)
//         })
//     })
// })
