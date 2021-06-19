// Assignment Code
var generateBtn = document.querySelector("#generate");
var defaultPass = "1234567890abcdefghijklmnopqrstuvwxyz";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*?";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function genRandom(max){
  return Math.floor(Math.random() * max);
}

function generatePassword(){
  var passList = defaultPass;
  var password = "";
  var cap = confirm("Would you like to include capitalized letters for your password?");
  var spc = confirm("Would you like to include special characters for your password?");
  var len = 0;
  while(len<8){
    len = prompt("Please enter the lenght of your password(minum of 8)");
  }
  if(cap){
    passList = defaultPass.concat(capital);
  }
  if(spc){
    passList = passList.concat(special);
  }
  for(var i = 0; i < len; i++){
    password = password.concat(passList[genRandom(passList.length)]);
  }

  return password;
}