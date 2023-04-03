import connectionDb from "../config/database.js";

async function CreateDoctorSignUpQuery({ name, email, CRM, city, field, password}) {
    return await connectionDb.query(
      `
          INSERT INTO doctors (name, email, crm, city, field, password)
          VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [name, email, CRM, city, field, password]
    );
}

async function FindByCRM({CRM}) {
  return await connectionDb.query(
    `    
    SELECT * FROM doctors WHERE crm=$1
  `,
    [CRM]
  );
}

async function FindByEmail({email}) {
  return await connectionDb.query(
    `    
    SELECT * FROM doctors WHERE email=$1
  `,
    [email]
  );
}

async function CreateSession({ token, doctorId }) {
  await connectionDb.query(
    `
        INSERT INTO sessions (token, "doctorId")
        VALUES ($1, $2)
    `,
    [token, doctorId]
  );
}

export default {CreateDoctorSignUpQuery, FindByCRM, FindByEmail, CreateSession}