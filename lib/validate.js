export default function login_validate({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = 'Required!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Required!'
  } else if (password.length < 8 || password.length > 20) {
    errors.password = 'Must be greater than 8 and less that 20 characters long';
  } else if (password.includes(" ")) {
    errors.password = "Invalid Password"
  }

  return errors;
}

export function register_validate({ username, email, password, cpassword }) {
  const errors = {};

  if (!username) {
    errors.username = 'Required!'
  } else if (username.includes(" ")) {
    errors.username = "Invalid username"
  } else if (username.length < 3 || username.length > 20) {
    errors.username = 'Must be greater than 3 and less that 20 characters long';
  }

  if (!email) {
    errors.email = 'Required!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Required!'
  } else if (password.length < 8 || password.length > 20) {
    errors.password = 'Must be greater than 8 and less that 20 characters long';
  } else if (password.includes(" ")) {
    errors.password = "Invalid Password"
  }

  if (!cpassword) {
    errors.cpassword = 'Required!'
  } else if (cpassword !== password) {
    errors.cpassword = 'Password does not match';
  } else if (password.includes(" ")) {
    errors.password = "Invalid Confirm Password"
  }

  return errors;
}