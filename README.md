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
