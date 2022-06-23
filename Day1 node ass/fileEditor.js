let [node,file,operation,file2,...args] = process.argv;
const fs = require("fs");


 if(operation==="read"){
    fs.readFile(file2,{encoding:"utf-8"},(err,data)=>{
        if(err) console.log(err);
        else console.log(data)
    })
}
else if(operation==="delete"){
   fs.unlink(file2, (err) => {
    if (err) console.log(err);
    console.log(`${file2} was deleted`);
  });
}
else if(operation==="append"){
   fs.appendFile(file2, args.join(" "), (err) => {
    if (err) console.log(err);
    console.log(`${args.join(" ")} was appended to file!`);
  });
}
else if(operation==="rename"){
   fs.rename(file2, args[0], (err) => {
    if (err) console.log(err);
    console.log('Rename complete!');
  });
}