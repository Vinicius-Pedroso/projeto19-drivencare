import { Router } from "express";
import ValidationSchema from "../middlewares/validationSchema";
import userSignUpSchema from "../schemas/userSignUpSchema";

const userRoutes = Router();

userRoutes.post("/SignUp", ValidationSchema(userSignUpSchema), );

export default userRoutes;
