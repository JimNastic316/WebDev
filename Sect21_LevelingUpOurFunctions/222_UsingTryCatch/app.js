// try {
//     hello.toUpperCase();
// } catch {
//     console.log('ERROR!');
// }

let msg = 'what';
let num = 234;
function yell(msg) {
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch(e){
        console.log('Please pass a string');
    }
};
yell(msg)
yell(num)

