const express = require('express')
const bodyParser = require('body-parser')
const { validate, ValidationError, Joi } = require('express-validation')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())
const movieValidation = {
    body: Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        rating: Joi.number().required(),
        description: Joi.string().required(),
        genre: Joi.string().required(),
        cast: Joi.array().required()
    })
  }


app.get("/",(req,res)=>{
    if(err){
        res.send(err)
    }
    res.send("hello");
})

app.post("/post",validate(movieValidation, {}, {}),(req,res)=>{
    res.send(req.body);
})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
  
    return res.status(400).json(err)
  })

app.listen(8080,()=>{
    console.log("Server started at http://localhost:8080/*")
})