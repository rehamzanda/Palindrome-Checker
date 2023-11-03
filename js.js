//Declare a function isPalindrome(str) that takes a string as an input.

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


// defines an anonymous function named checkPalindrome accept one input str parameter
// use repalce method to replace any character that is not a letter (uppercase or lowercase) or a digit
// to lowecase method to make all charachters in lowercase
//creat a new var to store the revered word for comaprasion
//use split to convert to array splited by spaces
// reverse method and join to get rid of spaces and return to string
//return true if str equal to reverersed
//false if not
// creat new var to test the fun

function isPalindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string and compare with the original
  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

const testString1 = "racecar!";
const testString2 = "hello";

console.log(isPalindrome(testString1)); 
console.log(isPalindrome(testString2));



//split(" ") is used to split the input word into an array of words, based on spaces. 
//join("") is used to join the array of words back together without spaces,
//toLowerCase() is used to convert the entire word to lowercase, 

//another way of solution:
// defines an anonymous function named checkPalindrome
//stores the original input word in the variable inputWord
//use .split(" ").join("").toLowerCase() to clean my word from spaces ans case before comparing 
//for loop is used to compare characters 
// if to check if the first value same as last value 
//return true if match
//return false if not
//a new var to store the result
// print the result


var checkPalindrome = function(word){
var inputWord = word;
var checkString = inputWord.replace(/[^a-zA-Z0-9]/g, '');
checkString = inputWord.split(" ").join("").toLowerCase();
for(var i = 0; i < checkString.length/2; i++){// divided by 2 means that we toke only the first part half of the word where it should be same as the other half if the word Palindrome
    if(checkString[i] = checkString[checkString.length-i-1]){//checkString.length-i-1 (is the index of word but from end to the half) i=(7-1=6-0=6 ) i=(7-1=6-1=5)..
      return true; 
    }
}
return false;
}
var output = checkPalindrome("rasecar?");
console.log(output);