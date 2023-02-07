const router=require('express').Router()
const { addnote, editNote, deleteNote, gitNote, profile } = require('./controllar/note.controllar')
const auth=require('../../midlwear/auth')

router.post('/addNote',auth(),addnote)
router.patch('/editNote/:_id',auth(),editNote)
router.delete('/deleteNote/:_id',auth(),deleteNote)
router.get('/:id',gitNote)
router.get('/',auth(),profile)


module.exports=router