const anagram=(firstWord,secondWord)=>{
    let firstToLower=  firstWord.toLowerCase();
    let  secondToLower= secondWord.toLowerCase();
    firstToLower=firstToLower.split("").sort().join("");
    secondToLower=secondToLower.split("").sort().join("");
    
    return firstToLower===secondToLower;
    
  }
  
  anagram("Mary", "Army");