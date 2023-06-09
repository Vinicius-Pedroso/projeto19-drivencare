import { CreateUserSignUp, CreateUserAppointment } from "../services/userServices.js";

async function SignUpUser(req, res, next) {
  const { name, email, password } = req.body;
  try {
    await CreateUserSignUp({ name, email, password });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function SignInUserController(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await userServices.SignInUser({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

async function UserGetDoctors(req, res, next) {
  const { city, field, name } = req.query;

  try {
    const doctorData = await userServices.FindDoctors(city, field, name);

    return res.send({ doctorData });
  } catch (err) {
    next(err);
  }
}

async function AppointmentHandle(req, res, next) {
  const { user, doctor, day_of_oppointment, appointment_start, appointment_end } = req.body;
  try {
    await CreateUserAppointment({ user, doctor, day_of_oppointment, appointment_start, appointment_end });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export default {
  SignUpUser,
  SignInUserController,
  UserGetDoctors,
  AppointmentHandle
};
