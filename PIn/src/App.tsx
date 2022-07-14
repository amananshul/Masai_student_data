import React from 'react';
import './App.css';
import { PinInput } from './component/PinInput';

function App() {
  const [otp,setOTP] =React.useState<string>("")
  return (
    <div className="App">
      <h3>OTP:{otp}</h3>
     <PinInput noOfDigits={3} setOTP={setOTP}/>
    </div>
  );
}

export default App;
