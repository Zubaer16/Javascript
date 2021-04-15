




// function square(num1,num2){
    
//     var result = num1 * num2;
//     return result;
// }

// document.write(square(5,6));


function calculator(num1,num2){

    var result = num1 + num2;
    document.write("addition "+result+"<br/>");

    var result = num1 - num2;
    document.write("subtract "+result+"<br/>");

    
    var result = num1 * num2;
    document.write("multiplication "+result+"<br/>");

    var result = num1 / num2;
    document.write("division "+result+"<br/>");

    var result = num1 % num2;
    document.write("mod "+result+"<br/>");
}


calculator(20,10);
