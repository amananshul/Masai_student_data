function sum(){
    let s=0
    
    for(let i=0;i<arguments.length;i++){
       if( typeof arguments[i]!=="string"){
        s+=arguments[i]
       }
    }
    if(s!==0){
        return s
    }
    else{
        return
    }
}
// console.log(sum(1,2,4,5))
module.exports=sum;