// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// my solution

// split array at spaces
// sort by char length
// pop to return last element in arr
const longestWord =  stringOfWords => stringOfWords.split(' ').sort((a,b) => a.length - b.length).pop()