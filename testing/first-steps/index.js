function sum(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function createUser(mail, password) {
  if(password.length < 10) {
    return false
  }

  return {
    mail,
    verified: false,
  }
}

module.exports = { sum, multiply, createUser }
