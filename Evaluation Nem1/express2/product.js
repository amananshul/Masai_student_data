
const fs = require('fs');
const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/products",(req,res)=>{
    fs.readFile("./product.json","utf-8",(err,data)=>{
        res.send(JSON.parse(data));
    })
})

app.post("/products/create",(req,res)=>{
    fs.readFile("./product.json",{encoding:"utf-8"},(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.products = [...parsed.products,req.body];

        fs.writeFile("./product.json",JSON.stringify(parsed),"utf-8",()=>{
            res.status(201).send("Product Created")
        })
    })
})

app.put("/products/:id",(req,res)=>{
   
    const {id} = req.params;
    fs.readFile("./product.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.products.map((el)=>{
            if(el.id==id){
                el.status = req.body.status;
            }
        })
        parsed.products = [...parsed.products];

        fs.writeFile("./product.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("Product Updated")
        })
    })
})

app.delete("/products/:id",(req,res)=>{
    const {id} = req.params;
    fs.readFile("./product.json",{encoding:"utf-8"},(err,data)=>{
        const parsed = JSON.parse(data);
     
        parsed.products = parsed.products.filter(el=>el.id != id)

        fs.writeFile("./product.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("Product Deleted");
        })
    })
});

app.listen(8080,()=>{
    console.log("Server started at port http://localhost:8080/*")
})