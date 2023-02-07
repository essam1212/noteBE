const Joi=require('joi')
const signUpValidation={
    body:Joi.object().required().keys({
        userName: Joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^[A-Za-z1-9]{3,8}/)).required(),
        cpassword: Joi.string().valid(Joi.ref('password')).required(),
    })
}
const loginValidation={
    body:Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^[A-Za-z1-9]{3,8}/)).required(),
       
    })
}
module.exports={
    signUpValidation ,
    loginValidation
}