// var numbers = [2,3,4,5];
// var squareNumbers = numbers.map(function(x){

//     return x*x;

// });
// console.log(squareNumbers);



var numbers = [22,31,4,5,35,26,78]
var squareNumbers = numbers.filter(function(x){

    return x>10;
});

console.log(squareNumbers);