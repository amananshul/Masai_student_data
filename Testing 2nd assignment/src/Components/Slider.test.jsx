import { fireEvent, render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Checking Slider component",function(){
    it("should render",function(){
        render(<Slider/>)
        let que = screen.getByTestId("ques");
        let ans = screen.getByTestId("ans");
        expect(que).toBeInTheDocument();
        expect(ans).toBeInTheDocument();
    });

    
    it("should work on next button",function(){
        render(<Slider/>)
        let que = screen.getByTestId("ques");
        let ans = screen.getByTestId("ans");
        expect(que).toHaveTextContent("What is Scope?");
        expect(ans).toHaveTextContent("Scope means access to a variable within a program. We have different scopes since we have functions in a program.");
        let next = screen.getByTestId("next");
        fireEvent.click(next);
        expect(que).toHaveTextContent("What is variable in scope?");
        expect(ans).toHaveTextContent("Variables declared within a function has the child scope.");
    })
    it("should work on prev button",function(){
        render(<Slider/>)
        let que = screen.getByTestId("ques");
        let ans = screen.getByTestId("ans");
        let next = screen.getByTestId("next");
        fireEvent.click(next);
        expect(que).toHaveTextContent("What is variable in scope?");
        expect(ans).toHaveTextContent("Variables declared within a function has the child scope.");
        let prev = screen.getByTestId("prev");
        fireEvent.click(prev);
        expect(que).toHaveTextContent("What is Scope?");
        expect(ans).toHaveTextContent("Scope means access to a variable within a program. We have different scopes since we have functions in a program.");


    })
})