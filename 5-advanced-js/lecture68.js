/*******************
* Lecture 68: CLosures

*/

document.getElementById('results').innerHTML = "hello";

function retirement (retirementAge) {
    
    var a = ' years left until retirement.' ;
    
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log(retirementAge - age) + a;
    }
}

var retirementUS = retirement(66);

//retirementUS(1990);

var retirementGermany = retirement(65);

var retirementIceland = retirement(67);


//retirementGermany(1990);  
//retirementIceland(1990);

//retirement(66)(1990);


/* CHALLENGE: rewrite the interview questions using closures.

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + " , can you please explain what UX design is?");
            
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + " , what Subject do you teach?");
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ' , what do you do?');
        }
    }
}


*/
var a = ' what do you do?';


function interviewQuestion(job) {
    
    
    return function(name){
//not sure why the default doesn't work
        switch(true) {
            case job === 'designer':
                var a = ' what is UX design?';
                console.log('hello ' + name + a);
                break;

            case job === 'teacher':
                var a = ' what do you teach?';
                console.log('hello ' + name + a);
                break;

            case job === 'driver':
                var a = ' what do you drive?';        
                console.log('hello ' + name + a);
                break;

            default:
                console.log('Hello ' + name + a);
                break;
            

       }
    }
}


interviewQuestion('driver')('tate');





