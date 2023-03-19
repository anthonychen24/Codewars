// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// my solution
const evenLast = (arr) => arr.filter((el,i) => i % 2 === 0).reduce((a, b) => a + b, 0) * arr[arr.length-1] || 0