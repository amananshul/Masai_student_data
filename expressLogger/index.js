const express = require("express");
const mor = require("mor");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

mor.token('body',(req)=> JSON.stringify(req.body));

app.use(mor(' Method :method, Content-length :res[content-length], Time :response-time ms, Date :date[clf], HTTP_version HTTP/:http-version, URL_accessed :url '))


app.get("/",(req,res)=>{
    res.send("hello World")
})

app.listen(8080,()=>{
    console.log("Server started http://localhost:8080/*")
})