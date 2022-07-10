import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { User } from '../Components/Fetch';

type paramType={
    q:string;
    per_page:number
}
const useFetch = (url:string,params:paramType) => {
   
    const [data,setdata]=useState<User[]>([])
    const [loading,setLoading]=useState(false);
    const [err,setErr]=useState(false)
  useEffect(()=>{
      setLoading(true)
      axios.get(url,{
          params:{
              ...params
          }
      }).then(({data})=>{
          setLoading(false)
          setdata(data.items)
      }).catch(()=>{
          setLoading(false);
          setErr(true)
      })
  },[params.q])
  return {loading,data,err}
}

export default useFetch