function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!!!!") {
    console.log(`${msg}, ${person}${punc}`);
}

console.log(rollDie());
console.log(rollDie());
console.log(rollDie(20));
console.log(rollDie(2000));
console.log(rollDie(9999));

console.log(greet("Rosa"));
console.log(greet("Rosa", "What up", "?????????"));
