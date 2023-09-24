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

function capitalize(word) {
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

const arrayOfInts = [10, 10, 10, 10, 10, 10];

let sum = 0;

function sumArray(arrayOfInts) {

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

// ************************************
// Days Of The Week Exercise

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) 
// and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 
// 1 or greater than 7, the function should return null. In some countries Sunday is treated as the 
// first day of the week, but for this exercise we will use Monday as the first day.

day = null;
function returnDay(num) {

    // If Monday
    if (num == 1) {
        console.log('Day is 1');
        day = 'Monday';
    } else if (num == 2) {
        console.log('Day is 2');
        day = 'Tuesday';
    } else if (num == 3) {
        console.log('Day is 3');
        day = 'Wednesday';
    } else if (num == 4) {
        console.log('Day is 4');
        day = 'Thursday';
    } else if (num == 5) {
        console.log('Day is 5');
        day = 'Friday';
    } else if (num == 6) {
        console.log('Day is 6');
        day = 'Saturday';
    } else if (num == 7) {
        console.log('Day is 7');
        day = 'Sunday';
    } else if (num < 1 || num > 7) {
        console.log('Day is null');
        day = null;
    }
    return (day);
}

let answer = (returnDay(1));
console.log(answer);

answer = (returnDay(2));
console.log(answer);

answer = (returnDay(3));
console.log(answer);

answer = (returnDay(4));
console.log(answer);

answer = (returnDay(5));
console.log(answer);

answer = (returnDay(6));
console.log(answer);

answer = (returnDay(7));
console.log(answer);

answer = (returnDay(0));
console.log(answer);

answer = (returnDay(8));
console.log(answer);



  


// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

// //reverse 
// for (let i = animals.length - 1 ; i >= 0; i--){
//     console.log(i, animals[i]);
// }
