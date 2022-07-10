import React, { useState } from 'react'
import useFetch from '../Hooks/UseFetch';
const URL="https://api.github.com/search/users"
 export type User ={
  id:number;
  login:string;
  avatar_url:string;
}
const Fetch = () => {
    
  const [text,setText]=useState("");
  const {data,err,loading}=useFetch(URL,{
    per_page:5,
    q:text || "masai-codes"
  })
   
  return (
    <div>
     
      <input onChange={(e)=>setText(e.target.value)}></input>
      
    { loading? (<div>...Loading</div>) : err? (<div>Something Went Wrong</div>): (data.map(User=>{
      return (
        <div>
        {User.login}<br/>
        <img style={{height:"200px",width:"200px"}} src={User.avatar_url}/>
        <br/>
        </div>
      )
    }))}
    </div>
  )
}

export default Fetch