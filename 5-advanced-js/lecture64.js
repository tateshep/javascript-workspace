/*

Objects vs Primitives

Numbers, strings, booleans, undefined, null are Primitives

Everthing else are objects 



*/



//Primitives
var a = 23 ;

var b = a ;

a = 46;

//console.log(a,b);


//Objects
var obj1 = {
    name: 'tate',
    age: 28
    
    
};



var obj2 = obj1 ;

obj1.age = 30; 

console.log(obj1.age);
console.log(obj2.age);





//Functions

var age = 27;

var obj = {
    name: 'Jorge',
    city: 'Lisbon'
    
};

function change(a,b) {
    a = 30;
    b.city = "San Francisco";
};

change(age, obj);


console.log(age);
console.log(obj.city);




