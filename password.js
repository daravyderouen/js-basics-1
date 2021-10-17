

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Hello! What is your name?", function(answer) {
  console.log("Hi " + answer);
});


const str = `W l om  to p sswor  v li  tor tool 
X .  X     X     X  X  XX         
X .  X     X     X  X  XX         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
. .  .     .     X  .  X.         
                                  
Welcome to password validator tool!`;
console.log(str);



console.log('Password must be at least 10 Characters');
console.log('Password must contain at least one Uppercase letter & a number');

let password ='iLove2Code';


if (password.length > 10) {
  console.log("Failed! Your password needs a minimum of four characters.")
} else if (password.search(/[a-z]/) < 0) {
  console.log("Failed! Your password needs a lower case letter.")
} else if(password.search(/[A-Z]/) < 0) {
  console.log("Failed! Your password needs an uppser case letter.")
} else  if (password.search(/[0-9]/) < 0) {
  console.log("Failed! Your password needs a number.")
 } else {
  console.log("You're in! Let's go!")
}

/*

  if  (pass.length > 10) {
  console.log("Congrats! You're logged in!");  
  } else {
    console.log("Failed! Try again!");
  }
}


*/