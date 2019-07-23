/*
Lecture 62: The Prototype Chain in the Console

You can use the console to inspect objects

*/

console.log('hello');



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


var x = [1,2,34,4];

console.info(x);
