import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import ValidationAppointment from "../middlewares/ValidationAppointment.js";
import ValidationSchema from "../middlewares/validationSchema.js";
import userSignUpSchema from "../schemas/userSignUpSchema.js";

const userRoutes = Router();

userRoutes.post("/signup", ValidationSchema(userSignUpSchema), userControllers.SignUpUser);
userRoutes.post("/signin", userControllers.SignInUserController);
userRoutes.get("/getdoctor", userControllers.UserGetDoctors);
userRoutes.post("/appointment", ValidationAppointment, userControllers.AppointmentHandle);

export default userRoutes;
