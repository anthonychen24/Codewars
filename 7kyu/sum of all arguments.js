// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15
// TIPS:
// ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

// JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

// C: https://www.geeksforgeeks.org/variadic-functions-in-c/

// my solution
function sum(...arr) {
    return arr.reduce((acc,c) => acc+c,0)
  }