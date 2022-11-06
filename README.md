in this repo you can find all short of asynchronous operations in javascript 


__Promise__ :

promise is deal with asychronous operations and it is an alternate of callback and it provides better approach then callback by reducing the callback hell. and writing cleaner code.
promise has three state :

1. fulfilled, pending and reject

```javascript
//syntax
const promise = new Promise((resolve,reject) => {
    //code goes herr
});

const promise = new Promise((resolve,reject) => {
    setTimeout(() => resolve("done"),2000)
});
```

__Promise chaining__ :

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. It allows you to chain on another then call which will run when the second promise is fulfilled. The .catch() can still be called to handle any errors that might occur along the way.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((result) => {
    console.log(result);
    return result + 20;
  })
  .then((result) => {
    console.log(result);
    return result + 30;
  });

```

__Promise.all()__ :

Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, "rirst");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 20, "second");
});

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(`Error in promise $[error]`));

```

__promise.race()__ :

Promise.race() method will return the promise instance which is firstly resolved or rejected.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 30, "first");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 20, "second");
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});

```

__pros and cons of promise over callback__

__pros__ :

1. It avoids callback hell which is unreadable
2. Easy to write sequential asynchronous code with .then()
3. Easy to write parallel asynchronous code with Promise.all()
4. Solves some of the common problems of callbacks(call the callback too late, too early, many  times and swallow errors/exceptions)
5. Integrated error handling.

__cons__ :

1. It makes little complex code
2. It cannot return multiple arguments.
3. We need to load a polyfill if ES6 is not supported


__async and await__ :

```javascript
async function fetchMethod() {
  try {
    let response = await fetch("https://api.github.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchMethod();
```