alert("Welcome, to the password validator tool!");

alert("Please validate your password.");

if (passwordLength => 10){
    console.log("Password was successful.");
} else {
    console.log("Password failed. Please try again.");
}

/*
function generatePassword(passwordLength) {
    let numberChars = "0123456789";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let allChars = numberChars + upperChars + lowerChars;
    randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray =randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) {return x[Math.floor(Math.random() * x.length)]
    }))


}
alert(generatePassword(12));
*/