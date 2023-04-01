import {CreateUserSignUp} from "../services/userServices.js";

async function SignUpUser(req, res, next) {
  const { name, email, password } = req.body;
  try {
    await CreateUserSignUp({ name, email, password });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function SignInUser(req, res, next) {
  const { email, password } = req.body;
  try {  

  } catch (err) {
    next(err);
  }
}

export default {
  SignUpUser,
  SignInUser,
};
