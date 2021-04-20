//array destructure

// let numbers = [10,20,30,40,50]
// let [num1,num2,num3,num4,num5] = numbers;
// console.log(num2)
// console.log(num1)




//swap variables

// let a = 10, b= 20;

// [a,b] = [b,a]
// console.log(a)
// console.log(b)




//Object destructure and nested object

// const studentInfo = {
//     id : 101,
//     fullname : 'Anisul Islam',
//     gpa : 3.92,
//     languages : {
//         native : 'bangla',
//         beginner : 'english'
//     }

// }

// const {id,fullname,languages} = studentInfo;

// console.log(id)
// console.log(fullname)
// console.log(languages.native)



//destructuring function parameters


const studentInfo = ({id,fullname}) => {
    console.log(`${id},${fullname}`)
}

const student = {
    id : 101,
    fullname : 'Anisul Islam'
}

studentInfo(student);