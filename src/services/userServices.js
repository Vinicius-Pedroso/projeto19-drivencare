async function CreateUserSignUp({ name, email, password }) {
    await connectionDb.query(
      `
          INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3)
      `,
      [name, email, password]
    );
}

export {CreateUserSignUp}