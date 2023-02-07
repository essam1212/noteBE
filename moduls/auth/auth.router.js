const router=require('express').Router()
const validation=require('../../midlwear/validation')
const {signUpValidation, loginValidation}=require('./auth.validation')
const {signUp, login} = require('./controllar/form')
router.post('/signup',validation(signUpValidation),signUp)
router.post('/login',validation(loginValidation),login)

module.exports=router