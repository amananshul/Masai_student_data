import React,{ChangeEvent,KeyboardEvent} from 'react'
type PintInputProps={
  noOfDigits:number;
  setOTP:(val:string) => void;
}
export const PinInput = (props:PintInputProps) => {
  const {noOfDigits,setOTP} = props;
  const[pinArray,setPinArray]=React.useState(new Array(noOfDigits).fill(""))
  const inputRef=React.useRef<HTMLInputElement[]>([])
const handleChange=(e:ChangeEvent<HTMLInputElement>,index:number) => {
  pinArray[index]=e.target.value;
  setPinArray([...pinArray]);
  setOTP(pinArray.join(""));
  if(e.target.value&&index<noOfDigits-1){
    inputRef.current[index+1].focus()
  }

}
const handleKeyUp=(e:KeyboardEvent<HTMLInputElement>,index:number) =>{
const {code}=e
if(code ==="Backspace"){
if(index>=1){
  inputRef.current[index-1].focus()
}
}
}
  return (
    <div>
      {pinArray.map((val,index)=>(
        <input className="pinInput" key={index} ref={(element)=>{
          if(element){
            inputRef.current[index] = element
          }
        }} onChange={(e)=>{handleChange(e,index)}} onKeyUp={(e)=>handleKeyUp(e,index)}/>
      ))}
    </div>
  )
}
