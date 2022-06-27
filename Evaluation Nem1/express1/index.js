const express=require("express")
const app=express()


const dns=require("dns")
app.use(express.json())
app.use(express.urlencoded ({extended:true}))

let url;
app.post("/getmeip",(req,res)=>{
    
    url=req.body.website_name
    dns.resolve4(url,(err,addresses) => { 
        if (err) {
          console.err(err);
          return;
        }
        console.log(`${addresses[0]}`); 
        res.send( `${addresses[0]}`)
    });
})
app.listen(8080,()=>{
    console.log("starts")
})
