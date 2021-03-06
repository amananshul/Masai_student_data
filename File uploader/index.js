const express = require("express");
const path = require('path');
const multipart  = require('multer');

const app = express();

const fs = multipart.diskStorage({ 
    destination: (req,file, cb)=>{
        cb(null, './images');
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multipart({ storage: fs });


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/single', upload.single('image'), function (req, res, next) {
    res.send("Image Uploaded successfully")
  })

app.listen(8080,()=>{
    console.log("Server started  http://localhost:8080/*");
})