// Assignment code here

// Prompt for Password
var enter;
var length = prompt("How many characters would you like your password to be?")
if (length < 8 || length > 128){
  alert("length must be 8 - 128 characters")
}

if (length >= 8 && length <= 128){
  var Uppercase = confirm("Would you like to use uppercase letters?")
  var Lowercase = confirm("Would you like to use lowercase letters?")
  var Numbers = confirm("Would you like to use numbers?")
  var Symbols = confirm("Would you like to use special characters?")
}

var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSymbols;

Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Lowercase = "abcdefghijklmnopqrstuvwxyz"
Numbers = "0123456789"
Symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(Uppercase, Lowercase, Numbers, Symbols, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "";
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var writePassword = (getRandomLowercase + getRandomUppercase + getRandomNumber)

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
} 

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}


