var mark = {
    name: 'Mark',
    mass: 95,
    height: 2,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}
var john = {
    name: 'John',
    mass: 80,
    height: 1.8,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark);
console.log(mark.bmi);
console.log(john);
console.log(john.bmi);
console.log(compareBMI());
function compareBMI(){
    switch(true){
        case john.bmi > mark.bmi:
            console.log(john.name + ' has the highest bmi of ' + john.bmi);
            break;
        case john.bmi < mark.bmi:
            console.log(mark.name + ' has the highest bmi of ' + mark.bmi);
            break;
        default:
            console.log('Both have the same bmi');
            break;
    }
}