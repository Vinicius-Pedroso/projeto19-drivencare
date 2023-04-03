import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import userRepositories from "../repositories/userRepositories.js";
import errors from "../errors/index.js";

async function CreateUserSignUp({ name, email, password }) {

  const emailCheck = await userRepositories.FindByEmail(email);
  if (emailCheck) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.CreateUserSignUp({ name, email, password: hashPassword });
}

export { CreateUserSignUp }