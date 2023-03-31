import { Router } from "express";
import ValidationSchema from "../middlewares/validationSchema";
import doctorSignUpSchema from "../schemas/doctorSignUpSchema";

const doctorRoutes = Router();

doctorRoutes.post("/SignUp", ValidationSchema(doctorSignUpSchema), );

export default doctorRoutes;