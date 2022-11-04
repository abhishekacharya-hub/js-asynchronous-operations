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

//promise.all()
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10, "first");
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 20, "second");
  });
  
  Promise.all([promise2, promise3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(`error in promise ${error}`);
    });
  

//promise.race()
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10, "first");
  });
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 20, "second");
  });
  
  Promise.race([promise4, promise5]).then(function (result) {
    console.log(result);
  });


//aync and await
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

//XMLHttpRequest:
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); // this makes asynchronous true or false
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();
  