import joi from 'joi';

const userSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    passwordConfirm: joi.string().valid(joi.ref('password')).required()
})

export default userSignUpSchema;