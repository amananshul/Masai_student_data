import React from 'react'
import useTimeOut from '../Hooks/UseTimeOut';

const Timer = () => {
    const toShow = useTimeOut(5);
  return (
    <div>
        {toShow ? <h3>Ready</h3> : <h3>Waiting for Timer...</h3>}
    </div>
  )
}

export default Timer