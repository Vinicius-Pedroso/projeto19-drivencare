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

export default {CreateUserSignUp, CreateSession}
