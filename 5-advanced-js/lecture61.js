// Function Constructor


/* My interpretion is that a Function Constructor is a function object that can be used to create many objects of the same format

var tate = {
    name: 'Tate',
    yearOfBirth: 1990,
    job: 'developer'
};*/

var Person = function(name, yearOfBirth, job ) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*this.calculateAge = function() {
        console.log(2018 - this.yearOfBirth)
    }*/
    
}


//prototype instead of putting the function within the object above

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var tate = new Person('Tate',1990,'Developer');

var jane = new Person("Jane",1993, 'Designer');
                      

jane.calculateAge();
tate.calculateAge();

console.log(tate.lastName);

console.log(jane.lastName);
