// Rest is like spread, but its collects everything
// into a single parameter


function sum (...nums) {
    return nums.reduce((total, el) => total + el);
}

console.log(sum(1));
console.log(sum(1,2,3,));


// ***********************
function raceResults(gold, silver, ...everyoneElse){
    console.log(`First place goes to ${gold}`);
    console.log(`Second place goes to ${silver}`);
    console.log(`Thanks to ${everyoneElse}`);
}

const final = raceResults('al', 'bob', 'susie', 'jack', 'paul');
console.log(final);