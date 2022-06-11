const {test,describe,expect} = require("@jest/globals");
const taxCalculator = require("../src/tax");

describe("Checking tax for different amounts",function(){
    test("less than 2,50,000",function(){
        expect(taxCalculator(1000)).toBe("no tax")
    });

    test("less than 2,50,000",function(){
        expect(taxCalculator(249999)).toBe("no tax")
    });

    test("less than 5,00,000",function(){
        expect(taxCalculator(450000)).toBe(22500)
    });

    test("less than 5,00,000",function(){
        expect(taxCalculator(425653)).toBe(21282)
    });

    test("less than 10,00,000",function(){
        expect(taxCalculator(700000)).toBe(98000)
    });

    test("less than 10,00,000",function(){
        expect(taxCalculator(824698)).toBe(115457)
    });

    test("greater than 10,00,000",function(){
        expect(taxCalculator(1100000)).toBe(297000)
    });

    test("greater than 100,00,000",function(){
        expect(taxCalculator(10000000)).toBe(2700000)
    });
})