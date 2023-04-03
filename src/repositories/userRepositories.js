async function CreateUserSignUp({ name, email, password }) {
    return await connectionDb.query(
      `
          INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3)
      `,
      [name, email, password]
    );
}

async function CreateSession({ token, userId }) {
  await connectionDb.query(
    `
        INSERT INTO sessions (token, "userId")
        VALUES ($1, $2)
    `,
    [token, userId]
  );
}

async function FindByEmail({email}) {
  return await connectionDb.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email]
  );
}

async function FindDoctorsQuery({city, field, name}){

  if (city){
    return await connectionDb.query(
      `    
      SELECT * FROM doctors WHERE city=$1
    `,
      [city]
    );
  }
  if (field){
    return await connectionDb.query(
      `    
      SELECT * FROM doctors WHERE field=$1
    `,
      [field]
    );
  }
  if(name){
    return await connectionDb.query(
      `    
      SELECT * FROM doctors WHERE name=$1
    `,
      [name]
    );
  }
}

export default {CreateUserSignUp, CreateSession, FindByEmail, FindDoctorsQuery}
