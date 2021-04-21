// //callback and higher order function


// function square(x){
//     console.log(`square of ${x}: ${x*x}`);
// }

// square(5);

// // const y = square;
// // y(5);

// function higherOrderFunction (num,callback){
//     callback(num);
// }

// higherOrderFunction(6, square)



// synchronous

const taskOne = (callback) => {
    console.log("task one");
    callback();
}
// const dataLoading = () => {
//     console.log("Task2. data loading");
// }
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2. Data Loading");
        callback();
    },3000);
};
const taskThree = (callback) => {
    console.log("task three");
    callback();
}
const taskFour = (callback) => {
    console.log("task four");
    callback();
}
const taskFive = () => {
    console.log("task five");
}

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4(){
                taskFive();
            });
        });
    });
});



