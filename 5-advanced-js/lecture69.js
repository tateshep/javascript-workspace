/*******************
* Lecture 69: Bind, call and apply

*/

document.getElementById('results').innerHTML = "hello";




var tate = {
    name:'Tate',
    age:28,
    job:'developer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' , ladies and gentlemen. I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I am ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log( 'Whats up ' + ' I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I am ' + this.age + ' years old' + ' have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name:'Emily',
    age:34,
    job:'teacher'
}

//tate.presentation.call(emily,'friendly','afternoon');


/*apply method accepts an array (wont work with the above because it is not expecting an array)*/

//tate.presentation.apply(emily,['friendly','afternoon'])


var tateFriendly = tate.presentation.bind(tate,'friendly');

//tateFriendly('morning');

var emilyFormal = tate.presentation.bind(emily,'formal');

//emilyFormal('Evening');



var years = [1990, 1965, 1937, 1005, 1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}


function isFullAge(limit,el) {
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));



console.log(ages);
console.log(fullJapan);





