// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// my solution
const orderedCount = function (text) {
    let letters = text.split("")
    let uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
    
    return uniqs.map((letter) => [letter, text.split(letter).length - 1])
  }