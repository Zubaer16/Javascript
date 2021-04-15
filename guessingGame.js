// var num1 = parseInt(prompt("Enter first number : "));
// var num2 = parseInt(prompt("Enter Second number : "));


// var maximum = Math.max(num1,num2);
// console.log(maximum);



//Guessing game using random number


var won = 0;
var lost = 0;

for(var i = 1; i<=5; i++){
    var guessNumber = parseInt( prompt("Enter a number from 1 to 5"));

    var randomNumber = Math.floor(Math.random()*5)+1;

    if (guessNumber==randomNumber){

        console.log("You have won");
        won ++
        

    }
    else {

        console.log("You have lost, the random number was : "+ randomNumber);
        lost ++
    }
}

document.write("You have won "+won+" times and you have lost "+lost + " times");

