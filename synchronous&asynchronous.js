// synchronous

const taskOne = () => {
    console.log("task one");
}
const dataLoading = () => {
    console.log("Task2. data loading");
}
const taskTwo = () => {
    setTimeout(dataLoading,2000);
}
const taskThree = () => {
    console.log("task three");
}
const taskFour = () => {
    console.log("task four");
}
const taskFive = () => {
    console.log("task five");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();