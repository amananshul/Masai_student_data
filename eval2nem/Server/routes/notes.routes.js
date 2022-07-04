const {Router} = require("express")
const NotesModel = require("../models/Notes")
const notesRouter = Router();
notesRouter.get("/:userId/notes", async (req, res) => {
    const userId = req.params.userId
    const notess = await NotesModel.find({userId})
    res.send(notess)
})

notesRouter.post("/:userId/notes", async (req, res) => {
    const userId = req.params.userId
    let payload = {
        ...req.body,
        userId
    }
    const notes = await new NotesModel(payload)
    notes.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        return res.status(201).send(success)
    })
})
notesRouter.put("/:userId/notes/:notesID",async(req,res)=>{
    const notesID=req.params.notesID
   const update = await NotesModel.findByIdAndUpdate(
    notesID,
    {
    ...req.body
    }, {new:true} );
  if(!update) res.status(404).send("not found")
  res.send(update)
})

notesRouter.delete("/:userId/notes/:notesID",async(req,res)=>{
    const deleteNotes =await NotesModel.findByIdAndDelete(req.params.notesID)
    if(!deleteNotes) res.status(404).res.send("Cant")
    res.send(deleteNotes)
})


module.exports = notesRouter