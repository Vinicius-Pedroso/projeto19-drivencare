import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import ValidationSchema from "../middlewares/validationSchema.js";
import doctorSignUpSchema from "../schemas/doctorSignUpSchema.js";

const doctorRoutes = Router();

doctorRoutes.post("/signup",
    ValidationSchema(doctorSignUpSchema), 
    doctorControllers.SignUpDoctor
);
doctorRoutes.post("/signin", doctorControllers.SignInDoctorController);

export default doctorRoutes;