const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e){
//     console.log('CHANGE');
// })

// using 'input' unstead of 'change' will fire everytime something changes
input.addEventListener('input', function(e){
    h1.innerText = input.value;
    // console.log(e);
})