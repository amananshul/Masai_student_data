const mongoose = require('mongoose')

const ActorSchema= new mongoose.Schema({
    name:{
        type: 'string',
        requires:true,
        minLength:4,
        maxLength:20 
    },
    age:{
        type:Number,
        min:10,
        max:60,
    }
})
module.exports=new mongoose.model('Actor',ActorSchema)