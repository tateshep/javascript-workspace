/*******************
* Lecture 67 : Immediately invoked Function Expressions
IIFE
*/

document.getElementById('results').innerHTML = "hello";

function game() {
    var score = Math.random() *10;
    console.log(score>=5);
    
}
game();



//The function below creates data privacy
(function () {
    var score = Math.random() * 10 ;
    console.log(score<=5);
})();




(function (gooodLuck) {
    var score = Math.random() * 10 ;
    console.log(score >= 5 - gooodLuck);
})(5);

