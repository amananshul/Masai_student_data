import React, { useState } from "react";
const data=[
    {
      ques:"What is Scope?",
      id:1,
      ans:"Scope means access to a variable within a program. We have different scopes since we have functions in a program."
    },
    {
      ques:"What is variable in scope?",
      id:2,
      ans:"Variables declared within a function has the child scope."
    },
    {
      ques:"WHat is React?",
      id:3,
      ans:"React is a JavaScript library created by Facebook"
    },
    {
      ques:"What is JS hoisting?",
      id:4,
      ans:"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code."
    },
    {
      ques:"What is Prototype?",
      id:5,
      ans:"if we want to add new properties at later stage to a function which will be shared across all the instances is prototype"
    }
  ]
const Slider = ()=> {
  const [value, setValue] = useState(1);
  return (
    <div data-testid="slider">
      {data.map((e) => {
        if (e.id === value) {
          return (
            <div key={e.id} data-testid="child">
              <h4 data-testid='q'>{e.ques}</h4>
              <p data-testid='a'>{e.ans}</p>
            </div>
          );
        }
        return false
      })}
      <div>
      <button data-testid='prev' disabled={value===1?true:false} onClick={()=>setValue(value-1)}>Prev</button>

        <button data-testid='next' disabled={value===data.length?true:false} onClick={()=>setValue(value+1)}>Next</button>
      </div>
    </div>
  );
};

export default Slider;