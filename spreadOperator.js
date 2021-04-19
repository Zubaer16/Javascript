// function addNumbers(x,y,z){
//     return x + y + z;
// }

// let numbers1 = [1,2,3];
// // console.log(addNumbers(numbers[0],numbers[1],numbers[2]));
// // console.log(addNumbers(...numbers));

// // let numbers1 = [5,6, ...numbers,7];
// // console.log(numbers1);

// let numbers2 = [4,5,6];
// let numbers = [...numbers1,...numbers2]
// console.log(numbers);




let p1 = {

    name: "Anisul Islam",
    age : 30
}


let p2 = {
    natioality: 'Bangladesh',
    occupation: 'teacher'
}

let p = {...p1,...p2};
console.log(p);
