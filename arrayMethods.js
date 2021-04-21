//find (callback , value) return the value of the first element that pass certain condition
// let numbers = [5,55,14,5,78];

// let firstEvenNumbers = numbers.find(x => x%2===0);
// console.log(firstEvenNumbers);

// let numbers = [5,55,14,5,78];

// const evenNumber =(value,index,array) => {
//     if (value%2===0)
//     return value;
// }

// let firstEvenNumbers = numbers.find(evenNumber);
// let firstEvenNumbersIndex = numbers.findIndex(evenNumber);
// console.log(firstEvenNumbers)
// console.log(firstEvenNumbersIndex)


//---------------------------------------------------------------------------
//fnidIndex(callback, value) return the index of the first element that pass certain condition

const students = [

    {
        id : 101,
        gpa : 2.5
    },
    {
        id : 102,
        gpa : 3.5
    },
    {
        id : 103,
        gpa : 4.5
    },
    {
        id : 104,
        gpa : 5
    },

    
]



console.log(students.find(x => x.gpa>4));