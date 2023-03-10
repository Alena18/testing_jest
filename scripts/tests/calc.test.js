/**
 * @jest-environment jsdom
 */

/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});


// const buttonClick = require("../button");

// beforeAll(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// describe("DOM tests", () => {
//     test("Expects content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par")
//             .innerHTML).toEqual("You Clicked");
//     });
// });

// const addition = require("../calc");

// describe("Calculator", () => {
//     describe("Addition function", () => {
//         test("should return 42 for 20 + 22", () => {
//             expect(addition(20, 22)).toBe(42);
//         });
//         test('should return 73 for 42 + 31', () => {
//             expect(addition(42, 31)).toBe(73);
//         });
//     });
//     describe("Subtract function", () => {

//     });
//     describe("Multiply function", () => {

//     });
//     describe("Divide function", () => {

//     });
// });
