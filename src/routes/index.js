import { Router } from "express";
import doctorRoutes from "./doctorRoutes";
import userRoutes from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/doctors", doctorRoutes);

export default routes;