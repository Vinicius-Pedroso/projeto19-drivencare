import joi from 'joi';

const appointmentSchema = joi.object({
    user: joi.string().required(),
    doctor: joi.string().email().required(),
    day_of_oppointment: joi.date().required(),
    appointment_start: joi.timestamp().required(),
    appointment_end: joi.timestamp().required()
})

export default appointmentSchema;