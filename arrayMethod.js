
var names = ["Anis","Rabeya","Kolpona"];

console.log(names);

// //shift is opposite of pop

// names.shift();

// console.log(names);


// //unshift opposite of push

// names.unshift("sagor");
// console.log(names);


// //adding elements using splice
// names.splice(2,0,"Karim","Rahim");
// console.log(names);


// // removing elements using splice
// names.splice(1,2);
// console.log(names);


// //slice
// var newArray = names.slice(1);
// console.log(newArray);
// console.log(names);


// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames)

var numbers = [20,5,25,45,1];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers)


