const express= require('express');
const app=express();
const mongoose = require('mongoose')
require('dotenv').config()
const movieRoute=require('./routes/movies')
const winston = require('winston')
const PORT=process.env.PORT||8080
// app.get('/',(req,res)=>{
//     res.send('hello')
// })
app.use(express.urlencoded({ extended:true}))
app.use(express.json());

// logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({ 
            format:winston.format.combine(
                winston.format.colorize({all:true})
            )
        }),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });

app.use('/api/movies',movieRoute)

mongoose.connect
(process.env.MONGO_URL
,{useNewUrlParser:true})
.then(()=>{
    logger.log("info",'connected to monoDb')
}).catch((error)=>{
    logger.log('error connecting to atlas',error.message)
})



app.listen(PORT, ()=>{
    console.log('listening on port',PORT)
})

