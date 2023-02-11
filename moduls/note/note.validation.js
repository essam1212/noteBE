import joi from 'joi'

export const noteValidation = {
        body: joi.object().required().keys({
                title: joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
                desc: joi.string().pattern(new RegExp(/^[A-Za-z]{3,8}/)).required(),
        })
}
