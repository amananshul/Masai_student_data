function time(x){
    let seconds = Math.floor(x / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  hours=hours+Math.floor(minutes/60)
  minutes = minutes % 60;
  hours=hours%24;
//  return(hours,minutes,seconds);
if(minutes>1 && seconds>1 && hours>1){
   return(hours+" hrs "+minutes+" mins "+seconds+" secs ") //
}
else if(minutes==1 && seconds>1 && hours>1){
   return(hours+" hrs "+minutes+" min "+seconds+" secs ") //
}
else if(minutes==0 && seconds>1 && hours>1){
   return(hours+" hrs "+seconds+" secs ")  //
}
else if(minutes>1 && seconds==1 && hours>1){
   return(hours+" hrs "+minutes+" mins "+seconds+" sec ") //
}
else if(minutes>1 && seconds==0 && hours>1){
   return(hours+" hrs "+minutes+" mins ") //
}
else if(minutes==1 && seconds==1 && hours>1){
    return(hours+" hrs "+minutes+" min "+seconds+" sec ") //
}
else if(minutes==1 && seconds==0 && hours>1){
   return(hours+" hrs "+minutes+" min ") //
}
else if(minutes>1 && seconds>1 && hours>1){
   return(hours+" hrs "+seconds+" sec ") //
}
else if(minutes>1 && seconds>1 && hours==1){
   return(hours+" hr "+minutes+" mins "+seconds+" secs ") //
}
else if(minutes==1 && seconds>1 && hours==1){
   return(hours+" hr "+minutes+" min "+seconds+" secs ") //
}
else if(minutes==0 && seconds>1 && hours==1){
   return(hours+" hr "+seconds+" secs ")  //
}
else if(minutes>1 && seconds==1 && hours==1){
   return(hours+" hr "+minutes+" mins "+seconds+" sec ") //
}
else if(minutes>1 && seconds==0 && hours==1){
   return(hours+" hr "+minutes+" mins ") //
}
else if(minutes==1 && seconds==1 && hours==1){
   return(hours+" hr "+minutes+" min "+seconds+" sec ") //
}
else if(minutes==1 && seconds==0 && hours==1){
   return(hours+" hr "+minutes+" min ") //
}
else if(minutes>1 && seconds>1 && hours==1){
   return(hours+" hr "+seconds+" sec ") //
}
if(minutes>1 && seconds>1 && hours==0){
   return(minutes+" mins "+seconds+" secs ") //
}
else if(minutes==1 && seconds>1 && hours==0){
   return(minutes+" min "+seconds+" secs ") //
}
else if(minutes==0 && seconds>1 && hours==0){
   return(seconds+" secs ")  //
}
else if(minutes>1 && seconds==1 && hours==0){
   return(minutes+" mins "+seconds+" sec ") //
}
else if(minutes>1 && seconds==0 && hours==0){
   return(minutes+" mins ") //
}
else if(minutes==1 && seconds==1 && hours==0){
   return(minutes+" min "+seconds+" sec ") //
}
else if(minutes==1 && seconds==0 && hours==0){
   return(minutes+" min ") //
}
else if(minutes==0 && seconds==1 && hours==0){
    return(seconds+" sec ") //
}
}
let x=time(1000)
// console.log(x)
module.exports=time;
