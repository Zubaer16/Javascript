// var num = 5;

// if(num%2==0)
// console.log("Even");

// if(num%2!=0)
// console.log("Odd");


var input = prompt("Enter your marks");

var input = parseInt(input);

if (input >= 80 && input <= 100){
    document.write("A+ ");
}
else if (input >=70 && input <=79){
    document.write("A");
}
else if (input >=60 && input <=69){
    document.write("A-");
}
else if (input >=50 && input <=59){
    document.write("B");
}
else if (input >=40 && input <=49){
    document.write("C");
}
else if (input >=33 && input <=39){
    document.write("D");
}
else 
    document.write("Fail");

