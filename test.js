//Test 

document.getElementById("problemId").innerHTML = "Scope Chain vs Execution Stack";

var a = 'Hello! ';
first();

function first () {
    var b = "Hi! ";
    second();    
    function second() {        
        var c = 'Hey! ';
        third();
    }
}


function third() {
    var d = 'John';
    console.log(c);
}