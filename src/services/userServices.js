import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import userRepositories from "../repositories/userRepositories.js";
import errors from "../errors/errors.js";

async function CreateUserSignUp({ name, email, password }) {

  const emailCheck = await userRepositories.FindByEmail(email);
  if (emailCheck) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.CreateUserSignUp({ name, email, password: hashPassword });
}

async function SignInUser({ email, password }) {
  const {
      rowCount,
      rows: [user],
    } = await userRepositories.FindByEmail(email);
  if (!rowCount) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = uuidV4();
  await userRepositories.CreateSession({ token, user_Id: user.id });

  return token;
}

async function FindDoctors({city, field, name}){

  const { rows, rowCount } = await userRepositories.FindDoctorsQuery(city, field, name);
  if (!rowCount) throw errors.NotFoundError();
  return rows;

}

export { CreateUserSignUp, SignInUser, FindDoctors }