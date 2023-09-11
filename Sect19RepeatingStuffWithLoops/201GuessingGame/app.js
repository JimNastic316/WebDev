// A guessing game where user tries to guess a random 
// generated Number. User controls the max number 

// parseInt used to verify the string input can be converted
let maximum = parseInt(prompt("Enter the max number"));

// Prevents user from entering a non numeric string, 
// and also '0' since is considered 'falsey' 
while(!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"));
}

// Generate a random number between 1 and maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(`targetNum: ${targetNum}`);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

// Ask user to enter a guess, and tell them if it is too high 
// // or too low, as long as the guess is incorrect
// while (parseInt(guess !== targetNum) || attempts < 10) {
while (parseInt(guess) !==targetNum) { 
    if (guess === 'q') break;
    attempts++;  //increment attempts
    // console.log(`guess + targetNum = ${guess + targetNum}`);
    if (guess > targetNum) {
        guess = (prompt("Too high, Enter a new guess:"));
    } else {
        guess = (prompt("too low, enter a new guess:"));
    }

    // console.log(`attempts: ${attempts} guess: ${guess} targetNum: ${targetNum}`);
    
}

if (guess === 'q') {
    console.log('OK YOU QUIT')
} else {
    console.log(`You got it! It took you ${attempts} guesses`);
}

