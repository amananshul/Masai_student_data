
const {Schema,model}=require('mongoose');
const NewsSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
Author:{
type: ["string"]
},
location:{
type:["String"],
},
tags:{
type:["String"],
},
  date: {
    type: Date,
    default: Date.now,
  },
totalViews:{
 type:Number
},
category:{
    type:["String"]
},
categoryId: {
  type: mongoose.ObjectId,
  required: true
}
})

module.exports = mongoose.model('Recipe', newsSchema)