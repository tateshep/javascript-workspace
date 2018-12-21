//Test 

//document.getElementById("problemId").innerHTML = "HELLO WORLD ";

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