//Test 

//document.getElementById("problemId").innerHTML = "HELLO WORLD ";

var a = 'Hello! ';
function first () {
    var b = "Hi! ";
    second();    
    function second() {        
        var c = 'Hey! ';
        console.log(a + b + c);
    }
}
first();

function displayNav() {
    var elem = document.getElementById("nav-animation");
    var pos = -100;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
            
    }
}