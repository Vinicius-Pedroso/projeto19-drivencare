import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import doctorRepositories from "../repositories/doctorRepositories.js";
import errors from "../errors/errors.js";

async function CreateDoctorSignUp({ name, email, CRM, city, field, password }) {

    console.log("Create")

    const emailCheck = await doctorRepositories.FindByEmail(email);
    if (emailCheck) throw errors.duplicatedEmailError(email);

    console.log("email")

    const crmCheck = await doctorRepositories.FindByCRM(CRM);
    if (crmCheck) throw errors.duplicatedCRMError(CRM);


    const hashPassword = await bcrypt.hash(password, 10);
    await doctorRepositories.CreateDoctorSignUpQuery({ name, email, CRM, city, field, password: hashPassword });
}

async function SignInDoctor({ email, password }) {
    const {
        rowCount,
        rows: [doctor],
      } = await doctorRepositories.FindByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();

    const validPassword = await bcrypt.compare(password, doctor.password);
    if (!validPassword) throw errors.invalidCredentialsError();

    const token = uuidV4();
    await doctorRepositories.CreateSession({ token, doctor_Id: doctor.id });

    return token;
}

export default { CreateDoctorSignUp, SignInDoctor }












