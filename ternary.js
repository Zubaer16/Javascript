var num1 = Number(prompt("Enter a number"));
var num2 = Number(prompt("Enter a number"));
var num3 = Number(prompt("Enter a number"));

// if (num>0){
//     console.log("Positive");
// }
// else {

//     console.log("Negative");    


// }

var result = num1 >num2 && num1 > num3 ? "Num1 is bigger" : num2 >num1 && num2 > num3 ? "Num2 is bigger" : "Num3 is bigger";

    
console.log(result);