import joi from 'joi';

const doctorSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    CRM: joi.string().required(),
    password: joi.string().required(),
    passwordConfirm: joi.string().required()
})

export default doctorSignUpSchema;