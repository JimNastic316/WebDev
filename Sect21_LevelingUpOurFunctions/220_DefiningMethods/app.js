const myMath = {
    PI : 3.14159,
    square: function (num){
        return num * num;
    },
    cube: function (num){
        return num ** 3;
    }

}

console.log(myMath.cube(3));
console.log(myMath.square(7));


// Shorthand way of creating method
// leaves of the : and 'function' 
// const myMath = {
//     PI : 3.14159,
//     square(num){
//         return num * num;
//     },
//     cube(num){
//         return num ** 3;
//     }

}