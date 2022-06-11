const time=require("../src/time")
const {describe,test,expect}=require("@jest/globals")
describe("Check Time Function",function(){
    test("accepts time when second is greater than 1",function(){
        expect(time(5200)).toBe("5 secs ")
    })
    test("accepts time when minute is equal to 1",function(){
        expect(time(60000)).toBe("1 min ")
    })
    test("accepts time when minute is greater than 1",function(){
        expect(time(180000)).toBe("3 mins ")
    })
    test("accepts time when minute & seconds is greater than 1",function(){
        expect(time(200000)).toBe("3 mins 20 secs ")
    })

})