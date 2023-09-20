const passArr = ['a', 'b', 'c'];
const emptArr = [];

function lastElement(passArr) {
    for (let i = 0; i < passArr.length; i++) {
        console.log(passArr[i]);

    }

    if (passArr.length === 0) {
        return null;
    } else {
        let lastItem = passArr[(passArr.length - 1)];
        return lastItem;
    }

}

console.log(lastElement(passArr));
console.log(lastElement(emptArr));

// ****************************************************
// Capitalize Exercise

// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

//     capitalize('eggplant') // "Eggplant"
//     capitalize('pamplemousse') // "Pamplemousse"
//     capitalize('squid') //"Squid"

let word = 'abcdefghij';

function capitalize (word) {
//    console.log(word.toUpperCase());
    let firstLetter = word[0].toUpperCase();
    let tail = (word.length);
//    console.log(tail);
    let end = word.slice(1, tail);
//    console.log(end);
    let firstIsCapital = (firstLetter + end);
//    console.log(firstLetter + end);
    return (firstIsCapital);
    
}

capitalize(word);
console.log(capitalize(word));

// ***********************************************
// Sum Array Exercise

// Write a function called sumArray which accepts a single argument: an array of numbers. 
// It should return the sum of all the numbers in the array.

//     sumArray([1,2,3]) // 6
//     sumArray([2,2,2,2]) // 8
//     sumArray([50,50,1]) // 101

const  arrayOfInts = [10, 10, 10, 10, 10, 10];

let sum = 0;

function sumArray (arrayOfInts) {

    // for (let i = 0; i < arrayOfInts.length; i++){
    //     let addTo = (arrayOfInts[i]);
    //     sum = sum + addTo;
    //     console.log(addTo, sum);
    // }

    let total = 0;
    for (let sub of arrayOfInts) {
        
        total = total + sub;
        console.log(total);
        
    }

    
    // return sum;
    return total;
}

sumArray(arrayOfInts);


// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

// //reverse 
// for (let i = animals.length - 1 ; i >= 0; i--){
//     console.log(i, animals[i]);
// }
