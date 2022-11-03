//promise 
const prom = new Promise((resolve,reject) => {
// the code goes here 
});

//example
const promise = new Promise((resolve,reject) => {
    setTimeout(() => resolve("done"),1000)
});

//promise chaining
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve(10),2000)
})
.then((result) => {
    console.log(result)
    return result + 20;
})
.then((result) => {
    console.log(result)
    return result + 30;
})