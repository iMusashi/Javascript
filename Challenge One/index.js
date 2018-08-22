var markMass = 45;
var johnMass = 35;
var markHeight = 1.6;
var johnHeight = 1.3;

var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var markBMIisHigher = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's?" + markBMIisHigher);