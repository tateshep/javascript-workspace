/*****************************

* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
console.clear();
document.getElementById("problemId").innerHTML = "Challenge 4 : BMI AGAIN ";
document.getElementById("results").innerHTML = "<p>Implement BMI calculator with OBJECTS</p><ol><li>For each of them, create an object with properties for their full name, mass, and height</li><li>Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.</li><li>In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.</li></ol>";

function _(myconsoleLog) {
    //Because I get sick of writing console.log
    console.log(myconsoleLog);
}

var mark = {
    fullName : ' Marky Mark ' ,
    mass : 35,
    height : 2 ,
    
    calcBMI : function () {
        this.BMI = this.mass/(this.height**2);
        return this.BMI;    }
};

var john = {
    fullName : ' Johny John ' ,
    mass : 35,
    height : 2 ,
    
    calcBMI : function () {
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
};

john.calcBMI();
mark.calcBMI();

function greatestBMI () {
    if (john.BMI > mark.BMI){
        
        _(john.fullName + 'Has the highest BMI of :');
        _(john.BMI);
        
    } else if (john.BMI < mark.BMI) {
        _(mark.fullName + 'Has the highest BMI');
        _(mark.BMI);
    } else {
        _('They have the same BMI')
    }
        
}
greatestBMI();




