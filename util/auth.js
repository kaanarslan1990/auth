import axios from "axios";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  console.log(token);
  return token;
}

export async function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
