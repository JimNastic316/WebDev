const person = {
    firstName: 'Viggo',
    lastName: ' Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }

    // Using an arrow function with 'this'
    // results in 'undefined undefined'
    // fullName: () => {
    //     return `${this.firstName} ${this.lastName}`
    // }

}

console.log(person.fullName());
