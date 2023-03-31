export default function ValidationSchema(schema) {

    return (req, res, next) => {
        
        const data = req.body;

        const { error } = schema.validate(data, { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => detail.message);
            throw errors;
        }

        next();

    }
}