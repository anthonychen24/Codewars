// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// my soltuion

function unusedDigits(...arr) {
    // Given: varying # of integer arguments
    // define the parameter
    // create a variable   
    
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    
    // change the arguments from integer into a string   
    let numStr = arr.toString();  
    
    // filter out those that are not present in any of the arguments
    // Return: a sorted string of digits
    return numbers.filter(element => !numStr.includes(element)).join('')
  }