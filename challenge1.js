    /***********************************
    Here is the JavaScript for the index.html page
    */

/***********************************
Variables and data types

var firstName = 'john';

console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

*/

    /***********************************
   Variable mutation and type correction
    



var firstName = 'john';
var age = 28;


console.log(firstName + ' ' + age);


var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);
*/

// logical operators
//Coding Challenge 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var massMark, massJohn, heightMark, heightJohn; 
massMark = 150;
massJohn = 160;
heightMark = 10;
heightJohn = 8;


markBMI = massMark / ( heightMark ** 2 ) ;

johnBMI = massJohn / ( heightJohn ** 2 ) ;

answer = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + answer);













