/*****************************
* CODING CHALLENGE 5
*/
//console.clear();
document.getElementById("problemId").innerHTML = "Challenge 5 : EVRYTHING";


function populateResults () {
document.getElementById("results").innerHTML = "<p>John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42. John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.</p><p>Implement a calculator using objects and loops</p><ol><li>Create an object with an array for the bill values</li><li>Add a method to calculate the tip</li><li>This method should include a loop to iterate over all the paid bills and do the tip calculations</li><li>As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.</li></ol><p>EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).</p><ol><li>Implement the same functionality as before, this time using Mark's tipping rules</li><li>Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)</li><li>Calculate the average tip for each family</li><li>Log to the console which family paid the highest tips on average</li></ol>";

}
populateResults();   

function cprint(myconsoleLog) {
    //Because I get sick of writing console.log
    console.log(myconsoleLog);
}

var billObject = {
    billArray : [ 124, 48, 268 , 180, 42 ],
    tipArray : [] ,
    finalAmount : [] ,
    finalPaidArray : [] ,
    
    tipCalculator : function () {
        
        for (var i = 0; i < this.billArray.length ; i ++ ){
                       
            if (this.billArray[i] < 50) {
            
                //console.log('case1')
                  
                var tip = 0.2 * this.billArray[i];
                var finalPaid  = tip + this.billArray[i];
                this.tipArray.push(tip);
                this.finalPaidArray.push(finalPaid)
                
            } else if (this.billArray[i] >= 50 && this.billArray[i] < 200) {
             
                //console.log('case2')

                var tip = 0.15 * this.billArray[i];
                var finalPaid  = tip + this.billArray[i];
                this.tipArray.push(tip);
                this.finalPaidArray.push(finalPaid)
                
            } else if (this.billArray[i] >= 200) {
                    
                //console.log('case3')

                var tip = 0.10 * this.billArray[i];
                var finalPaid  = tip + this.billArray[i];
                this.tipArray.push(tip);
                this.finalPaidArray.push(finalPaid)
                
            } else {
                
             return ' ERROR ';
            }
            //console.log(i);
        }
    }
}



/*Create a function that caculates the average of an array by loooping through it, summing, and then dividing by total */

var myArray = [0,88,29,39,48,75]


function avgArray (myArray) {
    
    for (var i = 0; i < myArray.length; i ++) {
        console.log(i);
    }
    
}
avgArray(myArray);
/***** console.log statements *****
*

billObject.tipCalculator();
console.log('this is the tip Array : [' + billObject.tipArray+ ']');
console.log('this is the final paid Array : [' + billObject.finalPaidArray + ']');

*/
