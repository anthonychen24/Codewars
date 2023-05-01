// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.


// my solution
const mispelled = (w1, w2) =>{
    let count = 0
    
    if(Math.abs(w1.length - w2.length) === 1)
      return w1.includes(w2) || w2.includes(w1)
    
    for(let i = 0; i < w1.length; i++)
      if(w1[i] !== w2[i]) count++
    
    return count <= 1
  }