const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(evt){
    // don't do the normal thing you do on a 'submit'
    evt.preventDefault();
    // console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catName;
    list.append(newLI);
    // console.log(list);
    input.value ='';

});