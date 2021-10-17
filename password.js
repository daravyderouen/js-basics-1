/*
alert("Hello World!");


const str = `W l om  to p sswor  v li  tor tool 
X .  X     X     X  X  XX         
X .  X     X     X  X  XX         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
. .  .     .     X  .  X.         
                                  
Welcome to password validator tool!`;
 console.log(str);


prompt("Please validate your password.");

console.log('Password must be at least 10 Characters');
console.log('Password must contain at least one Uppercase letter & a number');

if (passwordLength => 10){
    console.log("Password was successful.");
} else {
    console.log("Password failed. Please try again.");
}
*/

let password = "123ABCRbresoesD!";

let passChecker = function(pass){
  if ((pass.includes("123!@ABS")) && (pass.length > 10)) {
  console.log("Congrats! You're logged in!");  
  } else {
    console.log("Failed! Try again!");
  }
}

console.log(passChecker(password));