var john = {
    name: 'John',
    bills:[124,48,268,180,42],
    tips:[],
    finalBills:[],
    calcTip: function(){
        for(var i = 0; i < this.bills.length; i++){
            switch(true){
                case this.bills[i] < 50:
                    this.tips.push(this.bills[i] * 0.2);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break; 
                case this.bills[i] < 200 && this.bills[i] > 50:
                    this.tips.push(this.bills[i] * 0.15);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break;
                case this.bills[i] > 200:
                    this.tips.push(this.bills[i] * 0.10);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break;
                default:
                    break;
            }
        }
    },
    totaltip: 0,
    calcAvgTip: function(){
        for(var i = 0; i < this.tips.length; i++){
            this.totaltip += this.tips[i]; 
        }
        this.averageTip = this.totaltip/this.tips.length;
    }
}

var mark = {
    name: 'Mark',
    bills:[77, 375, 110, 45],
    tips:[],
    finalBills:[],
    calcTip: function(){
        for(var i = 0; i < this.bills.length; i++){
            switch(true){
                case this.bills[i] < 100:
                    this.tips.push(this.bills[i] * 0.2);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break; 
                case this.bills[i] < 300 && this.bills[i] > 100:
                    this.tips.push(this.bills[i] * 0.1);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break;
                case this.bills[i] > 300:
                    this.tips.push(this.bills[i] * 0.25);
                    this.finalBills.push(this.bills[i] + this.tips[i]);
                    break;
                default:
                    break;
            }
        }
    },
    totaltip: 0,
    calcAvgTip: function(){
        for(var i = 0; i < this.tips.length; i++){
            this.totaltip += this.tips[i]; 
        }
        this.averageTip = this.totaltip/this.tips.length;
    }
}

john.calcTip();
mark.calcTip();

john.calcAvgTip();
mark.calcAvgTip();

switch(true){
    case john.averageTip > mark.averageTip:
        console.log("John's family paid the highest tips on Average");
        break;
    case john.averageTip < mark.averageTip:
        console.log("Mark's family paid the highest tip on Average.");
        break;
    default: 
        console.log("Both the families paid same tips on Average");
        break;
}
