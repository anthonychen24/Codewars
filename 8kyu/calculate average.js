// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//my solution
function find_average(array) {
  
    if (array.length === 0) {
    return 0;
    }else{
      let average = array.reduce((acc,c) => acc + c, 0)
      return average/array.length
    }
    
    
  }