var john={
    firstName: 'John',
    birthYear: 1992,
    calcAge: function(){
        //birthYear is not defined 
        return 2018 - birthYear;
    }
};

console.log(john.calcAge());