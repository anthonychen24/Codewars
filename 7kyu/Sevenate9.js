// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// my solution
function sevenAte9(str) {
    while(str.search("797")!=-1){
      str=str.replace("797","77")
    } 
    return str
  }