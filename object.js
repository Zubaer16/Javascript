//How to create an object
//How to print the value of an object
//adding a constructor
// adding function inside a constructor

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }

}

var student1 = new Student("Anisul Islam",27,3.92,["Bengali","Hindi","English"]);
var student2 = new Student("Sufia",37,2.92,["Bengali","Portuguese","English"]);
var student3 = new Student("Linkon",24,4.92,["Bengali","Urdu","English"]);

student1.display();
student2.display();
student3.display();





