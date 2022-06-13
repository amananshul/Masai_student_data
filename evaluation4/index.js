const express= require('express');
const app=express();
const mongoose = require('mongoose')
const newsRouter= require('./routes/news')
const connection=require('./db');



app.use(express.urlencoded({ extended:true}))
app.use(express.json());
 

app.use('/news', newsRouter)

const PORT=process.env.PORT||8080

app.listen(PORT,async()=>{
    await connection
    console.log("server started on http://localhost:8080")
})
const express = require('express')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const connection = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/categories', require('./routes/category'))
app.use('/news', require('./routes/news'))

app.listen(8080, () => {
    await connection
    console.log('listening to port 3000....');
})