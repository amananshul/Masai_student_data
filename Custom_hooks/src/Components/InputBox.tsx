import React, { useEffect, useState } from 'react';
import styles from './InputBox.module.css';

type countryType ={
  country: string;
}

type InputProps = {
  value?: string   ,
  type?: React.InputHTMLAttributes<unknown>['type'],
  id?: string,
  color?: 'primary' | 'secondary',
  label?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC <InputProps> = (props) => {
    const {
        value='',
        type='text',
        id='',
        color,
        label,
        onChange,
    } = props;

    let [results, setResults] = useState<countryType[]>([])

    useEffect(()=>{
      fetch(`http://localhost:8080/data?q=${value}`)
      .then((res)=>res.json())
      .then((data)=>setResults(data))
    },[value])
    

    const style={
        color: color==='primary'?'#f44336':'#e91e63',
    }
  return (
    <div className={styles.container}>
            <div className={styles.group}>
                <input 
                    style={style}
                    type={type}
                    id={id}
                    onChange={onChange}
                    />
                <label className={`${value?styles.active:null}`}>
                    { label}
                </label>
                <div style={{position:'absolute'}}>
                {value  && results.map((item,index)=>(
                        <div key={index}  className={styles.results}>{item.country}</div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default InputBox