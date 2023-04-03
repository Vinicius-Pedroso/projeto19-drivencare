import { Router } from "express";
import ValidationSchema from "../middlewares/validationSchema.js";
import userSignUpSchema from "../schemas/userSignUpSchema.js";

const userRoutes = Router();

userRoutes.post("/signup", ValidationSchema(userSignUpSchema), );

export default userRoutes;
