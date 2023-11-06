const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'olive';
    // Generate random number from 0 to 255
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = makeRandColor();
    // Change background color to new randomly
    // generated color
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    // console.log('CLICKED');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
    

}