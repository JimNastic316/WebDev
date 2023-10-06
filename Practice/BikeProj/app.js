// Mountain bikes

const bike1 = {
    brand: 'Cannondale',
    style: 'Mountain',
    gears: 10,
    model: 'Trail 5',
    color: 'red'
};
const bike2 = {
    brand: 'Cannondale',
    style: 'Mountain',
    gears: 10,
    model: 'Trail 5',
    color: 'black'
};
const bike3 = {
    brand: 'Salsa',
    style: 'Mountain',
    gears: 12,
    model: 'Timberjack XT',
    color: 'blue'
};
const bike4 = {
    brand: 'Salsa',
    style: 'Mountain',
    gears: 10,
    model: 'Rangefinder Deore',
    color: 'black'
};
const bike5 = {
    brand: 'GT',
    style: 'Mountain',
    gears: 9,
    model: 'Avalanche Sport',
    color: 'blue'
};

const bike6 = {
    brand: 'GT',
    style: 'Mountain',
    gears: 9,
    model: 'Avalanche Sport',
    color: 'black'
};

// Road bikes

const bike7 = {
    brand: 'Cannondale',
    style: 'Road',
    gears: 10,
    model: 'Topstone 4',
    color: 'black'
};
const bike8 = {
    brand: 'Salsa',
    style: 'Road',
    gears: 16,
    model: 'Journeyer Claris',
    color: 'tan'
};
const bike9 = {
    brand: 'Co-op Cycles',
    style: 'Road',
    gears: 20,
    model: 'ADV 2.2',
    color: 'Vapor'
};

const bikeArr = [bike1, bike2, bike3, bike4, bike5, bike6, bike7, bike8, bike9]
const fruitArr = ['apple', 'orange', 'banana'];

console.log(bikeArr);
console.log('********************');

for (fruit of fruitArr) {
    console.log('FRUITS');
    console.log(fruit);
}
console.log('********************');

for (const bike of bikeArr) {
    console.log(Object.keys(bike));
 }
 console.log('********************');

 for (const bike of bikeArr) {
    console.log(Object.values(bike));
 }
 console.log('********************');

for (const bike of bikeArr) {
   console.log(Object.entries(bike));
}
console.log('********************');

// ******************************************
// Searching an array of objects for specific 
// ******************************************

function searchFor(trait, myArr) {
    // for (const trait of myArr) {
    if (PageTransitionEvent = 'color') {
        console.log(`Found ${bikeArr[trait]}`);
    } else {
        console.log('Not looking for ${trait');
    }
    // }
}
    console.log('********************');

for (const trait of bikeArr) {
    searchFor(trait, bikeArr);
}