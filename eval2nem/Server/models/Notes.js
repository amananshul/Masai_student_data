const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title : {type : String},
    label : {type : String},
    userId : {type : String}
})

const NotesModel = mongoose.model("notes", notesSchema)

module.exports = NotesModel;

