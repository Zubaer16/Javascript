//how to create promise- pending, resolve , reject
const promise1 = new Promise((resolve,reject)=>{
    // let completedPromise = true;
    // if (completedPromise){
    //     resolve('completed promise 1');
    // }else{
    //     reject(new Error("not completed promise 1"));
    // }
    setTimeout(()=>{
        resolve("completed promise 1");
    },2000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise 2");
    },1000)
})

// console.log(promise1);
// promise1
// .then(res =>{
//     console.log(res);
// })
// .catch(err => {
//     console.log(err.message);
// })
// promise2.then((res) => console.log(res));

Promise.race([promise1,promise2]).then((res) => console.log(res));
console.log("end");
