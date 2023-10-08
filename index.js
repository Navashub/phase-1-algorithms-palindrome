function isPalindrome(word) {
  // Write your algorithm here 
  const convertWordToArray = word.split('');
  const inverseWordArray = [];
  for (const letter of convertWordToArray){
    inverseWordArray.unshift(letter);
  }
  const reversedWord = inverseWordArray.join('');

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

isPalindrome("racecar")
