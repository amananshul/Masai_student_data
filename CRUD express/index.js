const express=require("express")
const fs=require("fs")
const app =express()
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/',(req,res)=>{
    res.write("hello")
    res.end("world")
})

app.get ('/products',(req,res)=>{
    // res.end(JSON.stringify({a:"aman",b:"anshul"}))
    fs.readFile('./db.json',{encoding: "utf-8"},(err,data)=>{
        res.end(data)
    })
})
app.post('/products',(req,res)=>{
    // console.log(req.body)

    fs.readFile('./db.json',{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data)
        parsed.products=[...parsed.products,req.body]
        fs.writeFile('./db.json',JSON.stringify(parsed),
        {encoding:'utf-8'},
        ()=>{
            res.end("products")
        })
    })
    // res.end("recived data")
})
app.put('./products/1',(req,res)=>{
   
    // fs.readFile('./db.json/id'),{encoding:'utf-8'},(err,data)=>{
    
})
app.delete('/products/:id',(req,res)=>{
   
            fs.readFile('./db.json',{encoding:"utf-8"},(err,data)=>{
            const parsed=JSON.parse(data)
            parsed.products=parsed.products.filter((el)=>{el.name!==id});

            fs.writeFile('./db.json',JSON.stringify(parsed),
            {encoding:'utf-8'},
            ()=>{
                res.end("products Deleted")
            })
        })
    
    })

app.listen(8080,()=>{
    console.log("server started on http://localhost:8080")
})