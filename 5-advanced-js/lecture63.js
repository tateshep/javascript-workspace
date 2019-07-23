/*


The Object.create method


first define an object that will act as the prototype and then creat objects that act like the prototype

*/


var personProto = {
    
    calculateAge: function() {
        
        console.log(2018- this.yearOfBirth);
    
    }
    
};


var tate = Object.create(personProto);

tate.name = "tate";
tate.yearOfBirth = 1990;
tate.job= "developer";



var jane = Object.create(personProto,
   { 
        name: { value: 'Jane'},
        yearOfBirth: { value: 1997},
        job: { value: 'designer'}


});