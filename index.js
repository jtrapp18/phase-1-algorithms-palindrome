function isPalindrome(word) {
  // Write your algorithm here
  
  // convert word into array of letters
  const wordArray = word.split("")
  
  // grab first half of word
  const firstHalf = wordArray.slice(0, parseInt(word.length/2))
  
  // grab second half of word (ignoring middle letter if odd)
  const secondHalf = [...wordArray]
  if (secondHalf.length % 2 === 0) {
    secondHalf.splice(0, parseInt(word.length/2))
  } 
  else {
    secondHalf.splice(0, parseInt(word.length/2) + 1)
  }

  // create new array = second half of word backwards
  const bwkSecond = []
  secondHalf.forEach(letter =>
    bwkSecond.unshift(letter)
  )

  // compare first half of word to backwards second half
  let isMatching = true
  for (let i=0; i<=firstHalf.length; i++) {
    if (firstHalf[i] != bwkSecond[i]) {
      isMatching = false
      break
    }
  }

  return isMatching
}


/* 
  Add your pseudocode here
  array = array(word)
  firsthalf = firsthalf(array)
  
  if even number of letters:
    secondhalf => secondhalf(array)
  else
    secondhalf => secondhalf(array-1)
  end

  for letter in secondhalf:
    backwardsArray => add letter to beginning

  palindrome = true
  for no. letters in firsthalf:
    if letter(firsthalf) <> letter(backwardsArray):
      palindrome = false
      exit
*/

/*
  Add written explanation of your solution here
  - need to check if the length of the word is even or odd
  - if odd, can ignore the middle letter
  - split word into 2 parts: first half and second half
  - read second half of the word backwards and record
  - compare with first half
  - if the second half of the word backwards is the same as the first half, we have a palindrome!
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
