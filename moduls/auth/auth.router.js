import { Router } from "express";

import validation from '../../midlwear/validation.js'
import { signUpValidation, loginValidation } from './auth.validation.js'
import { signUp, login } from './controllar/form.js'
const router=Router()

router.post('/signup',validation(signUpValidation),signUp)

router.post('/login',validation(loginValidation),login)

export default router