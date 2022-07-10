import React, { useState } from 'react'
type formType = {
    username: string;
    email: string;
    password: string;
  }
const useMergeState = () => {
    const initState = {
        username: "",
        email: "",
        password: "",
    }
    const [state,setState] = useState<formType>(initState);
    return state;
}

export default useMergeState