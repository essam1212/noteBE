import joi from 'joi'

export const signUpValidation={
    body:joi.object().required().keys({
        userName:joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
        email:joi.string().email().required().messages({ 'string.email': 'pleas enter real email' }),
        password:joi.string().pattern(new RegExp(/^[A-Za-z0-9]{3,15}$/)).required().messages({ 'string.pattern.base': 'pleas enter password fails  to match the required pattern :3-15  ' }),
        cpassword:joi.string().valid(joi.ref('password')).required(),
    })
}
export const loginValidation={
    body:joi.object().required().keys({
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp(/^[A-Za-z1-9]{3,15}$/)).required().messages({ 'string.pattern.base': 'pleas enter password fails  to match the required pattern :3-15 ' }),
       
    })
}
