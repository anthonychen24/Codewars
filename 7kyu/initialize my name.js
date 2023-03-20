// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// my solution
const initializeNames = n => n.split(' ').map((el, i) => i < n.split(' ').length-1 && i>0 ? el[0] +'.': el).join(' ')