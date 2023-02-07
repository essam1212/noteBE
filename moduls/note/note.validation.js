const Joi=require('joi')
const noteValidation={
    
        type: Joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
        desc: Joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
    
}
module.exports=noteValidation