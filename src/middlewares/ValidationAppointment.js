import appointmentSchema from "../schemas/appointmentSchema";

export default function ValidationAppointment(req, res, next) {
    const data = req.body;

    const { error } = appointmentSchema.validate(data, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw errors;
    }

    next();
}