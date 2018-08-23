var johnScoreOne = 89;
var johnScoreTwo = 120;
var johnScoreThree = 123;

var mikeScoreOne = 116;
var mikeScoreTwo = 94;
var mikeScoreThree = 123;

var maryScoreOne = 97;
var maryScoreTwo = 134;
var maryScoreThree = 105;


var johnAverage = (johnScoreOne + johnScoreTwo + johnScoreThree)/3;
var mikeAverage = (mikeScoreOne + mikeScoreTwo + mikeScoreThree)/3;
var maryAverage = (maryScoreOne + maryScoreThree + maryScoreTwo)/3;

console.log("John's team has an average score of " + johnAverage);
console.log("Mike's team has an average score of " + mikeAverage);
console.log("Mary's team has an average score of " + maryAverage);

switch(true){
    case (johnAverage>mikeAverage && johnAverage > maryAverage):
        console.log("Winner is John");
        break;
    case (johnAverage < mikeAverage && mikeAverage > maryAverage):
        console.log("Winner is Mike");
        break;
    case (maryAverage > johnAverage && maryAverage > mikeAverage):
        console.log("Winner is Mary");
        break; 
    default: console.log("It's a tie!");
        break;
}