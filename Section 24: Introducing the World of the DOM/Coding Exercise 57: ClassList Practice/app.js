// WRITE YOUR CODE IN HERE:
const hiLight = document.querySelectorAll('li');
// console.log(`hiLight length = ${hiLight.length}`);
// console.log(`hiLight = ${hiLight}`);



for (let i = 0; i < hiLight.length; i++) {
    let currentHiLight = hiLight[i].classList;
    // console.log(currentHiLight);
    currentHiLight.toggle('highlight');
}

