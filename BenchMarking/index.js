const http=require("http")
const fs=require("fs")
const fsPromises = require('fs').promises;
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello world")
    }
  if(req.url=="/txtsync"){
    fs.readFile("./index.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.end(err)
        }
        res.end(data)
    })
}
if(req.url=="/txtasync"){
    fs.readFile("./index.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.end(err)
        }
       setTimeout(()=>{
        res.end(data)
       },3000)
    })
}



if(req.url=="/txtstream"){
    const readStream=fs.createReadStream("/index.txt")
    readStream.pipe(res)
}

if(req.url=="/txtpromise"){
    fsPromises.readFile("./index.txt")
.then(function(result) {
  console.log(""+result);
  res.end(result)
})

}
})

server.listen(8080,()=>{
console.log("server starts http://localhost:8080/*")
})