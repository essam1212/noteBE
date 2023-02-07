import { Router } from "express";

import { addnote, editNote, deleteNote, gitNote, profile } from './controllar/note.controllar.js'

import auth from '../../midlwear/auth.js'
const router=Router()

router.post('/addNote',auth(),addnote)
router.patch('/editNote/:_id',auth(),editNote)
router.delete('/deleteNote/:_id',auth(),deleteNote)
router.get('/:id',gitNote)
router.get('/',auth(),profile)


export default router