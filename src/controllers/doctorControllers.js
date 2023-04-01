import {CreateDoctorSignUp} from "../services/doctorServices.js";

async function SignUpDoctor(req, res, next) {
  const { name, email, CMR, password } = req.body;
  try {
    await CreateDoctorSignUp({ name, email, CMR, password });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function SignInDoctor(req, res, next) {
  const { email, password } = req.body;
  try {  

  } catch (err) {
    next(err);
  }
}

export default {
  SignUpDoctor,
  SignInDoctor,
};