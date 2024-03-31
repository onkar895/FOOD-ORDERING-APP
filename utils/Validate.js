export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!isEmailValid) return 'Please enter a valid email address.'
  if (!isPasswordValid) return 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number and special character'

  return null
}
