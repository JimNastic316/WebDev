// Using for..in to iterate objects
// for (variable in object)
//   statement
// vs 
// Using for..of to iterate an arry
// for (variable of iterable)
//   statement

// 4 bike objects
const bike1 = {
    brand: 'Schwinn',
    style: 'Mountain',
    gears: 21
};
const bike2 = {
    brand: 'Huffy',
    style: 'Road',
    gears: 1
};
const bike3 = {
    brand: 'Polygon',
    style: 'Gravel',
    gears: 14
};
const bike4 = {
    brand: 'Windsor',
    style: 'Road',
    gears: 21
};

const bikeArr = [bike1, bike2, bike3, bike4];

console.log('*************************');
// Will show the keys of the given object 
// aka prints "brand style gears" each on its own line
for (let items in bike1) {
    console.log(items);
}
console.log('*************************');
console.log('console.log(Object.keys(bike1))');
// Will show an Array of given object keys 
// Array(3) [ "brand", "style", "gears" ]
console.log(Object.keys(bike1));

console.log('*************************');
console.log('console.log(Object.values(bike1))');
// Will show an arry of values of given object
// Array(3) [ "Schwinn", "Mountain", 21 ]
console.log(Object.values(bike1));

console.log('*************************');
console.log('console.log(Object.entries(bike1))');
// Will show an array of key/value pairs of given object
// Array(3) [ (2) […], (2) […], (2) […] ]
// ​0: Array [ "brand", "Schwinn" ]
// ​1: Array [ "style", "Mountain" ]
// ​2: Array [ "gears", 21 ]
console.log(Object.entries(bike1));

for (let k in bike1) {
    // console.log(k);
    if (k === "style") {
        console.log(`${k} is ${bike1[k]}`);
    }
}

console.log('***********also**************');
for (let vals of Object.values(bike1)) {
    console.log(vals);
    if (vals === 'Mountain') {
        console.log(`${vals} has been found`);
    }
}
// console.log('*************************');
// // console.log('console.log(Object.keys(bikeArr))');
// for (let bikes of bikeArr) {
//     console.log(Object.keys(bikeArr));
// }
// console.log('*************************');
// // console.log('console.log(Object.values(bikeArr))');
// for (let bikes of bikeArr) {
//     console.log(Object.values(bikeArr));
// }
// console.log('*************************');
// // console.log('console.log(Object.entries(bikeArr))');
// for (let bikes of bikeArr) {
//     console.log(Object.entries(bikeArr));
// }

// console.log('*************************');
// for (let bikes of bikeArr) {
//     let rmg = Object.values(bikeArr);
//     console.log(rmg);
//     if (rmg === "style") {
//         console.log(rmg);
//     } else {
//         console.log("not found");
//     }

// }
