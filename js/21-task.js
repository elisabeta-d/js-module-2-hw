function findLongestWord(string) {
    // Change code below this line
  
    const splitString = string.split (" ");
    let findLongestWord = splitString[0];
  
    for (i = 0; i < splitString.length; i++) {
      if (splitString[i].length > findLongestWord.length) {
        findLongestWord = splitString[i];
      }
    }
  
    return findLongestWord;
  
    // Change code above this line
  }