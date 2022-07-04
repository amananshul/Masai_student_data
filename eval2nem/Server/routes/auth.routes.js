const {Router} = require("express")
const UserModel = require("../models/User")

const authRouter = Router();

authRouter.post("/signup", async(req, res) => {
    // console.log(req.body)
    const user = await new UserModel(req.body)
    user.save((err, success) => {
        if(err){
            res.status(500).send({message : "Error occurred"})
        }
        return res.status(201).send({message : "Sign up success", token :12345})
    });
})

authRouter.post("/login", async (req, res) => {
    const userchecks = await UserModel.find(req.body)
    if(userchecks.length >= 1){
        const {name, _id} = userchecks[0]
        const payload =  {
            _id,name,token :12345
        }
        res.send(payload)
    }
    else{
        res.send({message : "Wrong credentials"})   
    } 
})

module.exports = authRouter;