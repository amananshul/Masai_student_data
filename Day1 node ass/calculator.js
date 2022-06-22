// console.log(process.argv[2])
let arg = process.argv[2];
const crypto = require("crypto");

if(arg==="add"){
    const sum = Number(process.argv[3])+Number(process.argv[4])
    console.log(sum);
}
else if(arg === "sub"){
    const diff = Number(process.argv[3])-Number(process.argv[4]);
    console.log(diff);
}
else if(arg === "mult"){
    const pro = Number(process.argv[3])*Number(process.argv[4]);
    console.log(pro);
}
else if(arg === "divide"){
    const ans = Number(process.argv[3])/Number(process.argv[4]);
    console.log(ans);
}
else if(arg === "sin"){
    const ans = Math.sin(Number(process.argv[3]));
    console.log(ans);
}
else if(arg === "cos"){
    const ans = Math.cos(Number(process.argv[3]));
    console.log(ans);
}
else if(arg === "tan"){
    const ans = Math.tan(Number(process.argv[3]));
    console.log(ans);
}
else if(arg === "random"){
    console.log(crypto.randomInt(0,100));
}