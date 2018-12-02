/************
* Functions
*/


function _(myconsoleLog) {
    //Because I get sick of writing console.log
    console.log(myconsoleLog);
}


document.getElementById("results").innerHTML = "<h1>Hellow world!</h1>";

var names = ['john','mark','jane'];


console.log(names.length);

names[1] = 'ben';


names[names.length] = 'mary';

names.pop();

names.push('tate');


_(names);

names.unshift("these are names");

_(names);

names.shift();
_(names);

_(names.indexOf('bill'));


var isInArray = names.indexOf('bill') === -1 ? 'item is not in the array' : 'item is in the array';

_(isInArray);