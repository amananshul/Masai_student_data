const express = require("express");
const connection = require("./db")
const cors = require("cors");
const authRouter = require("./routes/auth.routes")
const notesRouter = require("./routes/notes.routes")

const app = express();

app.use(cors());
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", notesRouter)

app .get('/', (req,res) => {
    res.send("welcome backend")
})
app.listen(8080, async() => {
    try{
        await connection;   
        console.log("connected ")
    }
    catch{
        console.log("something went wrong")
    }
    console.log("Server started")
})