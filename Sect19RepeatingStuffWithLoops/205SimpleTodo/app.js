/***************************************
/******* simple todo list ************** 
/**************************************/

let input = null;

let arrList = [];


while (input !=='quit') {

    input = (prompt('What would you like to do?'));
    if (input === 'new'){
        // add todo to list
        let newTodo = (prompt('New TODO :'));
        arrList.push(newTodo);
        
    } else if (input === 'list'){
        // list all todo
        let num = 1;
        for (let item of arrList) {
            
            console.log(num, item);
            num ++;
        }
    } else if (input === 'delete') {
        //remove todo from list
        toDelete = (prompt('What would you like to delete'))
    } else {
        console.log('That is not a valid choice');
    }

}

console.log('Goodbye');