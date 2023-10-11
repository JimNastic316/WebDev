const nums = [13,4,5,21,3,3,3,1,3,6346765];

console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 6346765

const veg = ['lettuce', 'red pepper', 'carrot', 'olives'];
const fruit = ['tomato', 'oranges', 'apple'];
const other = ['crouton', 'dressing'];

const salad = [...veg, ...fruit, ...other];

console.log(salad);