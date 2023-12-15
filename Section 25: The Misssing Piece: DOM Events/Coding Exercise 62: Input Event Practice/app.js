// Input Event Practice

// It's time to practice working with the input event!  
// In the index.html file, you'll find an <h1> and an <input type="text"> element.  
// Please do not change anything in index.html!  
// In app.js, write code that meets these requirements:
//     The h1 should start with the text "Enter Your Username" 
//     (I've done that for you, already in the markup)

//     Whenever an input event is fired on the <input> element, 
//     update the <h1> so that it displays "Welcome, " plus the 
//     current value from the text input.  Take a look at the gif 
//     below to see how it should work.

//     If the <input> goes back to being empty, update the <h1> so 
//     that it once again says "Enter Your Username"

const userid = document.querySelector('#username');
const h1 = document.querySelector('h1');
const defaultMessage = 'Enter Your Username';
const useridLength = userid.value.length;


userid.addEventListener('input', function(e){
    // console.log(userid);
    

    if(useridLength <= 0){
        h1.innerText = defaultMessage;
    }else{
        h1.innerText = `Welcome, ${userid.value}`;
    }
 
})

// const defaultMessage = 'Enter Your Username';

// const userid = document.querySelector('#username');
// const h1 = document.querySelector('h1');


// userid.addEventListener('input', function(e){
// //     // console.log(userid);

//     if (userid.value.length <= 0) {
//         h1.innerText = defaultMessage;
//     } else {h1.innerText = `Welcome, ${userid.value}`;
        
//     })

// Alternate
// const h1 = document.querySelector('h1');
// const userid = document.querySelector('#username');
 
// userid.addEventListener('input', function(e) {
//     if (userid.value.length < 1) {
//         h1.innerText = 'Enter Your Username';
//     } else h1.innerText = `Welcome, ${userid.value}`;
// })

// Alternate solutions from the vid
// SOLUTION #1 (app.js):

//     const heading = document.querySelector('h1');
//     const input = document.querySelector('input');
     
//     input.addEventListener('input', function () {
//       if (input.value === '') {
//         heading.innerText = `Enter Your Username`
//       } else {
//         heading.innerText = `Welcome, ${input.value}`;
//       }
//     });

// SOLUTION #2 (app.js):

//     const heading = document.querySelector('h1');
//     const input = document.querySelector('input');
     
//     input.addEventListener('input', function () {
//       if (!this.value) {
//         heading.innerText = `Enter Your Username`;
//       } else {
//         heading.innerText = `Welcome, ${this.value}`;
//       }
//     });

// SOLUTION #3 (app.js):

//     const heading = document.querySelector('h1');
//     const input = document.querySelector('input');
     
//     input.addEventListener('input', function () {
//       if (!this.value) {
//         return heading.innerText = `Enter Your Username`
//       }
//       heading.innerText = `Welcome, ${input.value}`;
//     });




