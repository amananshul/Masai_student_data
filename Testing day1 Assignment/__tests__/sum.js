const sum=require("../src/sum")
const {describe,test,expect}=require("@jest/globals")
describe("Sum Function on Numbers",function(){
    test("Sum Function should work on positive numbers",function(){
        expect(sum(5,10,15)).toBe(30)
    })
    test("Sum Function should work on negative numbers",function(){
        expect(sum(-1,-3,-9)).toBe(-13)
    })
    test("Sum Function should work on both positive & negative numbers",function(){
        expect(sum(-1,2,-3)).toBe(-2)
    })
})
describe("Sum Function on Strings",function(){
   
    test("Sum Function should work on strings",function(){
        expect(sum("1","2","3")).toBe(undefined)
    })
   
})
