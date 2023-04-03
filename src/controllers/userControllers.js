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

async function SignInUserController(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await userServices.SignInUser({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  SignUpUser,
  SignInUserController,
};
