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

The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Async keyword is used along with the function declaration which specifies that this function is now able to accept all types of asynchronous events on itself. Await basically waits for the results which are particularly to be fetched from the source from which that async function is about to fetch the data.

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

__XMLHttpRequest__

XMLHttpRequest() is a built-in browser object that allows to make HTTP requests in JavaScript. XMLHttpRequest has two modes of operation: synchronous and asynchronous.

```javascript
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); // this makes asynchronous true or false
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

```

__fetch()__ :

fetch allows to make network requests similar to XMLHttpRequest. Fetch makes it easier to make asynchronous requests and handle responses better than with the older XMLHttpRequest. It is an improvement over the XMLHttpRequest API. The main difference between Fetch() and XMLHttpRequest() is that the Fetch API uses Promises, hence avoiding callback hell.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("Something went wrong!", err);
  });


```

__async vs defer__ :


1. __async Attribute__

The async attribute is used to indicate to the browser that the script file can be executed asynchronously. The HTML parser does not need to pause at the point it reaches the script tag to fetch and execute, the execution can happen whenever the script becomes ready after being fetched in parallel with the document parsing.

```javascript
<script src="script.js" async></script>
```

This attribute is only available for externally located script files. When an external script has this attribute, the file can be downloaded while the HTML document is still parsing. Once it has been downloaded, the parsing is paused for the script to be executed.


2. __defer__

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads "in the background", and then runs when the DOM is fully built.

```javascript
<script src="script.js" defer></script>
```

Like an asynchronously loaded script, the file can be downloaded while the HTML document is still parsing. However, even if the file is fully downloaded long before the document is finished parsing, the script is not executed until the parsing is complete.


