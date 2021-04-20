var students = [

    {
        id : 101,
        name : 'Anisul Islam',
        gpa : 2.65
    },
    {
        id : 102,
        name : 'Bijoy',
        gpa : 3.65
    },
    {
        id : 103,
        name : 'Rabeya',
        gpa : 4.65
    },
    {
        id : 101,
        name : 'Bijoy',
        gpa : 2.65
    }
];

function studentNames(){

    return students.filter(function(x){
       return x.gpa > 3;
    }).map(function(y){
        return y.name;
    });
    }
console.log(studentNames());





const studentNames2 = () =>{
    return students.filter((x)=> x.gpa > 3).map((y) => y.name);
}

console.log(studentNames2());