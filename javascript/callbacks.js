// A callback function is a function that you give to another function to be called later
// When you click a button on a website, you want something to happen – like showing a message. That action is a callback!

// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button was clicked!");
// });
// The function inside addEventListener is a callback – it runs only when the button is clicked.

// You want to show a message after 3 seconds:
// setTimeout(function() {
//     console.log("Hello after 3 seconds ⏱️");
// }, 3000);
// Here, the function is called after 3000 milliseconds (3 seconds). 
// This function is a callback

// Array and forEach
// Let’s say you have a box of fruits 🍎🍌🍇 and you want to say hello to each fruit.
// let fruits = ["Apple", "Banana", "Grapes"];

// fruits.forEach(function(fruit) {
//     console.log("Hello " + fruit);
// });
// The function inside forEach() is a callback – it runs for each item in the array

// ✅ Why Use Callbacks?
// You want to wait for something to finish first (like loading, clicking, etc.)
// You want to do something after another thing
// You don’t know how long the first task takes (asynchronous stuff)

// Thing	                Meaning
// Callback Function	    A function passed to another function
// When it runs?	        After the first task is done
// Where it's used?	        Events, API calls, timeouts, loops
// Why it's cool?	        Helps handle things that take time ⏳

// EX-Basic calculator using callbacks 
// function calculator(a, b, operation) {
//     return operation(a, b);  // callback function
// }

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// console.log(calculator(5, 3, add));       // 8
// console.log(calculator(10, 4, subtract)); // 6


// js is a syn language but we can make async with help of callbacks promises async/await
// function1
// function2
// when i call function2 function1 will execute



// function greet(){
//     console.log("hey hi")
// }
// function printMessage(value){
//     greet()
//     console.log(value)
// }
// printMessage("raju") hey hi then raju

// function greet(){
//     console.log("hey hi")
// }
// function greet1(){
//     console.log("Namaste")
// }
// function printMessage(value,callback){
//     callback()
//     console.log(value)
// }
// printMessage("raju",greet) //hey hi raju
// printMessage("raju",greet1) //Namaste greet1 - raju which function should be executed also at the time of calling
// callback function is basically an argument to another function what is this main function is there that is higher order function printMessage("raju",greet1)
// greet1 - callback function
// function greet(){
//     console.log("hey hi")
// }
// function greet1(value){
//     console.log("Namaste " + value)
// }
// function printMessage(value,value1,callback){
//     let x = value1
//     callback(x)
//     console.log(value)
// }
// printMessage("raju","guru",greet1) 

// closure function - also call back functions why do we call it with different name
// but in some certain cases only not in all the cases

// higher order - the main function which accepting callback
// callback - function we will send as argument to another function
// anonymous function - function without name most of the time we use anonymous function as callback function
// closure function - if callback function is there that is accessing data or params from higher order function then we say closure function

// one function is there that function call another function1 now function 1 will have another callback function
// function(function1(function2(function3))) //call back hell
// if you take web driver io another tool no debugging option is there so putting some break points and debug line by line manually


// function calculator(a, b, operation){
//     return operation(a,b) //callback function
// }
// function add(x,y){
//     return x + y
// }
// function sub(x,y){
//     return x - y
// }
// console.log(calculator(5,3,add))
// console.log(calculator(5,3,sub))

// anonymous function we call it as arrow function
// const p = new Promise((resolve, reject) => {
//     let x = 2
//     if(x === 2){
//         resolve("Success")
//     }else{
//         reject("Fail")
//     }
// })
// console.log(p) //Promise { 'Success' } promise will bring some data for us
// how to get the values here there will be 2 method
// p.then( message => console.log(message)) //Success then only in sucess
// .catch( message => console.log(message))
// Promise { <rejected> 'Fail' }
// Fail
// we can also write like this
// p.then( message => console.log(message),message => console.log(message))

//another syntax
// p = Promise.resolve("Success")
// p = Promise.reject("Raju")
// console.log(p)
// p.catch(message=>console.log(message))
// .finally(console.log("Promises finally")) //finally always execute
// Promise { <rejected> 'Raju' }
// Promises finally
// Raju

// Promise { <rejected> 'Raju' }
// Raju

// 3 states of promises will be there
// 1. Pending
// 2. resolved
// 3. rejected

// promises also have some mehods when we have working with arrays
// .allSettled()
// .all()
// .any()
// .race()

const p1 = Promise.resolve('Like if you understood callbacks')
// const p2 = Promise.reject('Rejected')
const p3 = 100

const p4 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'Subscribe for more updates')
})
const p5 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,'Subscribe for less updates')
})

// Promise.all([p1,p3,p4,p5]).then((values)=>console.log(values))//resolved values
// Promise.race([p4,p5]).then((value)=>console.log(value))
// Promise.allSettled([p1,p2,p3,p4,p5]).then((values)=>console.log(values))
// Promise.any([p4,p5]).then((values)=>console.log(values))