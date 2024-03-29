
// Function to generate random colors
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Select all buttons
const buttons = document.querySelectorAll('button');

// Select all h1
const h1s = document.querySelectorAll('h1');

// Iterate over buttons
for(let button of buttons) {
    button.addEventListener('click', colorize);
}

// Iterate over h1s
for(let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

// *************************************
// *************************************

// // Select all buttons
// const buttons = document.querySelectorAll('button');

// // Select all h1
// const h1s = document.querySelectorAll('h1');

// // Iterate over buttons
// for(let button of buttons) {
//     button.addEventListener('click', function() {
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();
//     })
// }

// // Iterate over h1s
// for(let h1 of h1s) {
//     h1.addEventListener('click', function() {
//         h1.style.backgroundColor = makeRandColor();
//         h1.style.color = makeRandColor();
//     })
// }