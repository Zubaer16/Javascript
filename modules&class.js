// import {text, setText} from './myModule.js';


// console.log(text);
// setText("goodbye from es6");
// console.log(text);

// import {text as Message} from './myModule.js';


// console.log(Message);


class Student {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.id +" "+this.name;
    }
}

let s1 = new Student(101,"Anis");
console.log(s1.studentInfo);
// console.log(s1.id);
// console.log(s1.name);

// s1.studentName = "lalala";
// console.log(s1.name);