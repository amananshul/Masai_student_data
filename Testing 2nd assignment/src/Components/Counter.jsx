import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
  return (
    <div>
       <h1 data-testid="counter">{counter}</h1>
      <button onClick={()=>setCounter(counter+5)}>add</button>
      <button onClick={()=>setCounter(counter-5)}>reduce</button>
    </div>
  )
}

export default Counter