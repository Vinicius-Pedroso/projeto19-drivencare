async function CreateDoctorSignUp({ name, email, CRM, password}) {
    await connectionDb.query(
      `
          INSERT INTO doctors (name, email, crm, password)
          VALUES ($1, $2, $3, $4)
      `,
      [name, email, CRM, password]
    );
}

export {CreateDoctorSignUp}