// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// my solution
function cubeOdd(arr) {
    arr = arr.filter((num) => {return num % 2 != 0}).reduce((acc, c) => acc + c**3, 0)
    return isNaN(arr) ? undefined : arr;
  }