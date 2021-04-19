// Object Literals

function studentInfo1 (name,age){
    return{
        name ,
        age
    }
}
console.log(studentInfo1("Rokibul Islam",29));

let message = {

    'body name'(){
        return `Hi, I am object function`
}
}

console.log(message['body name']());