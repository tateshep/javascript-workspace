/*****************************
* CODING CHALLENGE 3
*/
document.getElementById("problemId").innerHTML = "Challenge 3 : Tip Calculator";
document.getElementById("results").innerHTML = "<p>John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.</p><p>To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.</p><h3>In the end, John would like to have 2 arrays:</h3><ol><li>Containing all three tips (one for each bill)</li><li>Containing all three final paid amounts (bill + tip).</li></ol><p>(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)</p>";

function _(myconsoleLog) {
    //Because I get sick of writing console.log
    console.log(myconsoleLog);
}
function tipCalculator(totalBill) {
    switch(true) {
        case totalBill < 50:
            var tip = 0.2 * totalBill;
            return tip;
        case totalBill >= 50 && totalBill < 200:
            var tip = 0.15 * totalBill;
            return tip;
        case totalBill >= 200:
            var tip = 0.10 * totalBill;
            return tip;
        default:
            return ' ERROR ';
    }
}
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var tipBill1 = (tipCalculator(bill1));
var tipBill2 = (tipCalculator(bill2));
var tipBill3 = (tipCalculator(bill3));
function totalBill (bill,tip) {return bill + tip;}
var totalBill1 = totalBill(bill1,tipBill1);
var totalBill2 = totalBill(bill2,tipBill2);
var totalBill3 = totalBill(bill3,tipBill3);
var tipArray = [tipBill1,tipBill2,tipBill3];
var finalPaidArray = [totalBill1,totalBill2,totalBill3];
_(tipArray);
_(finalPaidArray);


