/*******************
* Lecture 66 : passing functions as arguments


*/

document.getElementById('results').innerHTML = "hello";



var years = [1990, 1965, 1937, 1005, 1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el_) {
    return 2018 - el;
}


function isFullAge(el) {
    return el >= 18;
}
