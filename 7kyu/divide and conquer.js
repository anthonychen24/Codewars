// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

// my solution
function divCon(x){
    let num = x.filter(el => typeof el === 'number')
    let strNum = (x.filter(el => typeof el ==='string'))
    return num.reduce((acc,c) => acc + c,0) - (strNum.reduce((acc,c) => +acc + +c, 0))
  }