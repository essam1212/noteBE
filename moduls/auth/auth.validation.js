import joi from 'joi'

export const signUpValidation={
    body:joi.object().required().keys({
        userName:joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp(/^[A-Za-z1-9]{3,8}/)).required(),
        cpassword:joi.string().valid(joi.ref('password')).required(),
    })
}
export const loginValidation={
    body:joi.object().required().keys({
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp(/^[A-Za-z1-9]{3,8}/)).required(),
       
    })
}
