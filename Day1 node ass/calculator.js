// console.log(process.argv[2])
let argument= process.argv[2];
const crypto = require("crypto");

if(arg==="addition"){
    const sum = Number(process.argv[3])+Number(process.argv[4])
    console.log(sum);
}
else if(argument=== "subtract"){
    const diff = Number(process.argv[3])-Number(process.argv[4]);
    console.log(diff);
}
else if(argument=== "multiply"){
    const pro = Number(process.argv[3])*Number(process.argv[4]);
    console.log(pro);
}
else if(argument=== "divide"){
    const ans = Number(process.argv[3])/Number(process.argv[4]);
    console.log(ans);
}
else if(argument=== "sin"){
    const ans = Math.sin(Number(process.argv[3]));
    console.log(ans);
}
else if(argument=== "cos"){
    const ans = Math.cos(Number(process.argv[3]));
    console.log(ans);
}
else if(argument=== "tan"){
    const ans = Math.tan(Number(process.argv[3]));
    console.log(ans);
}
else if(argument=== "random"){
    console.log(crypto.randomInt(0,100));
}