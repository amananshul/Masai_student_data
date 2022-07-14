
import React, { useEffect, useState } from "react";
import Input from "./component/Input";


const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" mt-6">
      <h1 className="text-center text-xl">Counter: {count}</h1>
      <Input />
    
    </div>
  );
};

export default App