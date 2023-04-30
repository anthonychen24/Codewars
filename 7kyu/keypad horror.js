// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only


// my solution
function computerToPhone(numbers){
    let ans='';
    for (let i=0; i<numbers.length; i++)
    {
      if (numbers[i]=='1') ans+='7';
      else if (numbers[i]=='2') ans+='8';
      else if (numbers[i]=='3') ans+='9';
      else if (numbers[i]=='7') ans+='1';
      else if (numbers[i]=='8') ans+='2';
      else if (numbers[i]=='9') ans+='3';
      else ans+=numbers[i];
    }
    return ans;
  }