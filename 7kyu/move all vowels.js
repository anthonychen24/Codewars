// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

// my solution
function moveVowel(input) {
    let cons = '', vows = ''
    for (let item of input) {
      'aeiou'.includes(item) ? vows = vows + item : cons = cons + item
    }
    return cons + vows
  }