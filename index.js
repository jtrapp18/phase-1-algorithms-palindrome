function isPalindrome(word) {
  // Write your algorithm here
  
  // convert word into array of letters
  const wordArray = word.split("")

  // create new array = second half of word backwards
  const bkwdWord = []
  wordArray.forEach(letter =>
    bkwdWord.unshift(letter)
  )

  // compare first half of word to backwards second half
  let isMatching = true
  for (let i=0; i<=wordArray.length; i++) {
    if (wordArray[i] != bkwdWord[i]) {
      isMatching = false
      break
    }
  }

  return isMatching
}


/* 
  Add your pseudocode here
  array = array(word)

  for letter in array:
    backwardsArray => add letter to beginning

  palindrome = true
  for no. letters in word:
    if letter(word) <> letter(backwardsArray):
      palindrome = false
      exit
*/

/*
  Add written explanation of your solution here
  - read the word backwards and record
  - compare with word
  - if the word backwards is the same as the word, we have a palindrome!
*/

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
