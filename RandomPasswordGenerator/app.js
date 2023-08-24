const input = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLNMOPKQRSTUVWXYZ";
const lowerCase = "abcdefghijklnmopqrstyuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*()^-_+=<>?/|{}[]";

const length = 12;

let allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  input.value = password;
}

function copyPassword() {
  input.select();
  document.execCommand("cut");
}
