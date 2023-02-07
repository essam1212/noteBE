
const noteModel=require ('../../../DB/models/note.model')
const userModel=require ('../../../DB/models/user.model')

const addnote=async(req,res)=>{
    try {
        const {type ,desc}=req.body
        const newNote=new noteModel({type,desc,createdBy:req.user})
        const saveNote=await newNote.save()
        const saveNoteToUser = await userModel.findByIdAndUpdate(req.user, { $push: { notes: saveNote._id } }, { new: true })
        res.status(200).json({ message: "Done", saveNote })
        
        } 
 catch (error) {
        res.status(400).json({ message: "catch error", error })
        
    }
}
// -----------------------
const editNote = async (req, res) => {
    try {
        const { type,desc } = req.body
        const { _id } = req.params
        const update = await noteModel.findByIdAndUpdate({_id}, {type,desc}, { new: true })
        res.status(201).json({ message: "Done", update })
    } catch (error) {
        res.status(400).json({ message: "catch error", error })

    }

}
const deleteNote = async (req, res) => {
    try {
        const { _id } = req.params
        const deleteNoteFromeUser = await userModel.findByIdAndUpdate(req.user, { $pull: { notes:_id } }, { new: true })

        const deletenota = await noteModel.findByIdAndDelete(_id)
        res.status(201).json({ message: "Done" })
    } catch (error) {
        res.status(400).json({ message: "catch error", error })

    }



}

// ================================
const gitNote=async(req,res)=>{
    
    try {  
        const {id}=req.params
const mynote=await noteModel.findById(id,{},{new:true})
if (mynote) {
    res.json({message:"done",mynote})    

} else {
    res.json({message:"in-valid id"})    
  
}
} catch (error) {
    res.status(400).json({ message: "catch error", error })

}
}
// ============================
const profile=async(req,res)=>{
    try {  
 const user= await userModel.findOne({_id: req.user}).populate("notes")
console.log(user);
res.json({message:"done",user})    
} catch (error) {
    res.status(400).json({ message: "catch error", error })

}
}
module.exports={
    addnote,
    editNote,
    deleteNote,
    gitNote,
    profile
}
