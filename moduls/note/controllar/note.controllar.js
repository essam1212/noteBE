
import noteModel from '../../../DB/models/note.model.js'
import userModel from '../../../DB/models/user.model.js'

export const addnote=async(req,res)=>{
    try {
        const {title ,desc}=req.body
        const newNote=new noteModel({title,desc,createdBy:req.user})
        const saveNote=await newNote.save()
        const saveNoteToUser = await userModel.findByIdAndUpdate(req.user, { $push: { notes: saveNote._id } }, { new: true })
        return res.status(200).json({ message: "Done", saveNote })
        
        } 
 catch (error) {
    return res.status(400).json({ message: "catch error", error })
        
    }
}
// -----------------------
export const editNote = async (req, res) => {
    try {
        const { title,desc } = req.body
        const { _id } = req.params
        const update = await noteModel.findByIdAndUpdate({_id}, {title,desc}, { new: true })
        return res.status(201).json({ message: "Done", update })
    } catch (error) {
        return res.status(400).json({ message: "catch error", error })

    }

}
export const deleteNote = async (req, res) => {
    try {
        const { _id } = req.params
        const deleteNoteFromeUser = await userModel.findByIdAndUpdate(req.user, { $pull: { notes:_id } }, { new: true })

        const deletenota = await noteModel.findByIdAndDelete(_id)
        return res.status(201).json({ message: "Done" })
    } catch (error) {
        return res.status(400).json({ message: "catch error", error })

    }



}

// ================================
export const gitNote=async(req,res)=>{
    
    try {  
        const {id}=req.params
const mynote= await noteModel.findById(id,{},{new:true})
if (mynote) {
    return res.json({message:"done",mynote})    

} else {
    return res.json({message:"in-valid id"})    
  
}
} catch (error) {
    return res.status(400).json({ message: "catch error", error })

}
}
// ============================
export const profile=async(req,res)=>{
    try {  
 const user= await userModel.findOne({_id: req.user}).populate("notes")
console.log(user);
return res.json({message:"done",user})    
} catch (error) {
    return res.status(400).json({ message: "catch error", error })

}
}
export default{
    addnote,
    editNote,
    deleteNote,
    gitNote,
    profile
}
