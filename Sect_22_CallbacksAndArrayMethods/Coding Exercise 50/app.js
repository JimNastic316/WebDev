// Define a function called allEvens that accepts a single array of numbers.  
// If the array contains all even numbers, return true.  Otherwise, return false.  
// Use some or every to help you do this!  (only one of them is actually useful here)

//     allEvens([2,4,6,8]) //true
//     allEvens([1,4,6,8]) //false
//     allEvens([1,2,3]) //false

function allEvens(arr) {
    return (arr.every(num => num % 2 === 0))
} 



// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// SOLUTION #1:

//     function allEvens(arr) {
//       return arr.every(function (num) {
//         return num % 2 === 0;
//       });
//     }

// SOLUTION #2:

//     const allEvens = function (arr) {
//       return arr.every(num => num % 2 === 0);
//     }

// SOLUTION #3:

//     // Concise full arrow function syntax approach:
//     const allEvens = arr => arr.every(num => num % 2 === 0);