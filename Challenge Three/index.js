var calculateTips = function(bill){
    switch(true){
        case bill<50:
            return 0.2 * bill;
        case bill > 15 && bill < 200:
            return 0.15 * bill;
        case bill > 200:
            return 0.1 * 200;
    }
    
}

var calculateFinalBill = function(bill){
    switch(true){
        case bill<50:
            return (0.2 * bill + bill);
        case bill > 15 && bill < 200:
            return (0.15 * bill + bill);
        case bill > 200:
            return (0.1 * 200 + bill);
    }
}

var tips = [];
var finalBill = [];

tips.push(calculateTips(124));
tips.push(calculateTips(48));
tips.push(calculateTips(268));
console.log(tips[0], tips[1], tips[2]);

finalBill.push(calculateFinalBill(124));
finalBill.push(calculateFinalBill(48));
finalBill.push(calculateFinalBill(268));
console.log(finalBill[0], finalBill[1], finalBill[2]);