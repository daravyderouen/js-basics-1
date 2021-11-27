

const str = `W l om  to p sswor  v li  tor tool 
X .  X     X     X  X  XX         
X .  X     X     X  X  XX         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
X .  X     .     X  .  X.         
. .  .     .     X  .  X.         
                                  
Welcome to password validator tool!`;
console.log(str);


  function doesContainCapitalLetter(str) {
    return str.split('').some(char => (char === char.toUpperCase())); {
      return ('password must contain uppercase')
    };
  } 
  function doesContainDigitCharacter(str) {
    return (/\d/).test(str);{
      
    }
    
  }
  function doesContainPunctuationMark(str) {
    return (/[.,!?:;]/).test(str);
  }
  function doesNotContainPasswordLiterally(str) {
    return !(/password/i).test(str);
  }
  function doesHaveCorrectLength(str) {
    return ((str.length >= 8));
  }
  
  function isValidPassword(str) {
    if(str.length < 8){
      return ('Your password need at least 8 characters.')
    } else if (str.length <8 && str !== doesContainCapitalLetter){
      return ('You password must contain a capital letter.')
    }
    return (
      doesHaveCorrectLength(str)
      && doesNotContainPasswordLiterally(str)
      && doesContainPunctuationMark(str)
      && doesContainDigitCharacter(str)
      && doesContainCapitalLetter(str)
      );
  }
  
  
  console.log(isValidPassword('Ilove2Code@!!'));
  
  console.log(isValidPassword('nosw1swod'));
  