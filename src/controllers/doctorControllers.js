import doctorServices from "../services/doctorServices.js";

async function SignUpDoctor(req, res, next) {
  console.log("signup")
  const { name, email, CMR, city, field, password } = req.body;
  try {
    await doctorServices.CreateDoctorSignUp({ name, email, CMR, city, field, password });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function SignInDoctorController(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await doctorServices.SignInDoctor({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  SignUpDoctor,
  SignInDoctorController,
};