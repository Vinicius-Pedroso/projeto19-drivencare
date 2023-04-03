import joi from 'joi';

const doctorSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    CRM: joi.string().required(),
    city: joi.string().required(),
    field: joi.string().required(),
    password: joi.string().required(),
    passwordConfirm: joi.string().valid(joi.ref('password')).required()
})

export default doctorSignUpSchema;