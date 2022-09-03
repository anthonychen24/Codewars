// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

//my solution
function arrayMadness(a, b) {
    return a.reduce((acc,c) => acc + c**2,0) > b.reduce((acc,c) => acc + c**3,0)
  }

function arrayMadness(a, b) {
    let squaredA = a.map(x => x**2)
    let cubedB = b.map(x=> x**3)
    if(squaredA.reduce((acc,c) => acc + c, 0) > cubedB.reduce((acc,c) => acc + c,0)){
      return true
    }else{
      return false
    }
  }