var tips = [];
var totals = [];
var bill1 = calculateTip(128);
var bill2 = calculateTip(48);
var bill3 = calculateTip(268);
 
 
function calculateTip(bill) {
 
    if ( bill <= 50){
        tip = bill * .20;     
    }else if(bill >= 50 && bill < 200){
        tip = bill * .15;
    }else{
        tip = bill * .10;
    }
 
      sum = tip + bill;
      tips.push(tip);
      totals.push(sum);
    console.log('Total is: ' + sum + '\n' +'Tip is: ' + tip);
 
}