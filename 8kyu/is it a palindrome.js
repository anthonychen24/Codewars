// Write a function that checks if a given string (case insensitive) is a palindrome.

//my solution
function isPalindrome(x){
    let lower = x.toLowerCase()
    let reverse = lower.split('').reverse().join('')
    if(lower === reverse){
      return true
    }else{
      return false
    }
  }