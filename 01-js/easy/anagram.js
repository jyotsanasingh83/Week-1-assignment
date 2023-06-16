/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/*
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function calculateSum() {
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  document.getElementById('output').innerHTML = 'The sum is: ' + result;
}


const str1 = 'test';
const str2 = 'abcd';
*/
function isAnagram(str1, str2) {

  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
  if (sortedStr1==sortedStr2) {
    console.log('The strings are anagrams.');
  } else {
    console.log('The strings are not anagrams.');
  }

}

isAnagram(str1, str2);

module.exports = isAnagram;
