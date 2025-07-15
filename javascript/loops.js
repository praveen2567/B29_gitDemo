// for loop is used to repeat a block of code multiple times

// console.log("Praveen")
// console.log("Praveen")
// console.log("Praveen")
// console.log("Praveen")
// console.log("Praveen")

// syntax
// for(initialization; condition; increment / decrement){
//     // block of code
// }

// for(let i=1; i<=5; i++){
//     console.log("Praveen")
// } // 5 times it will be printed

// Print numbers from 1 to 100 with "Praveen"

// for(let i=1; i<=100; i++){
//     console.log(i)
//     console.log("Praveen")
// }

// store locators inside an array or check multiple checkboxes
// arr = ['input[value="0"]', 'input[value="2"]', 'input[value="4"]']


// for(let i=0; i<arr.length; i++){  //Loop starts from 0 to arr.length - 1
//     // await page.locator(css).check()
//     await page.locator(arr[i]).check()
// }

// const fruits = ['mango', 'apple', 'banana']
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// ✅ for...of — Best for Arrays and Iterables it gives values directly
//for of loop(no index needed)

// const fruits = ['apple', 'mango', 'banana']
// for(let fruit of fruits){
//     console.log(fruit)
// }

// for in loop(no index needed)
//  Don’t use for...in on Arrays

let nums = [10,20,30]

for(let num in nums){
    console.log(num) //❌ Gives index: 0, 1, 2
    console.log(nums[num]) //✅ 10, 20, 30 (but not the best approach)
}

// for...in gives index (as string) when used on arrays. 
// It's not ideal for arrays because it may include custom properties. 
// Instead, for...of is better when we want actual values

// Use for...of for array values
// Use for...in for object properties

// ✅ for...in — Best for Objects

let person = {
    name: "Raju",
    age: "34",
    job: "QA"
}

for(let key in person){
    // console.log(key, ":", person[key])  //When property name is dynamic (from variable)
    console.log(key, ":", person.key) //When property name is known
    console.log(person.name) // instead use this
    console.log(person.age)
    console.log(person.job)
}

// for of use case
// ✅ Best for	Arrays, Strings, Iterables
// 📦 Iterates over	Values
// 🛠 Use case	Reading array values, looping DOM, strings
// ⚠ Not suitable for	Objects (non-iterable)

// for in use case
// ✅ Best for Objects (key names)
// 📦 Iterates over	Keys (property names)
// 🛠 Use case Looping object keys or dynamic properties
// ⚠ Not suitable for Arrays (you'll get index, not value)

// objects
// An object is a collection of key-value pairs.
// property = combination of a key and a value
// ➡️ Each key: value pair is called a property of the object
// Key → Always a string (or will be converted to string).
// Value → Can be any data type: string, number, boolean, array, object, function, etc.
// Property → A full key-value pair like "name": "Raju".


// syntax
// while(condition){
//     //block of code
//     increment / decrement
// }

// print 10 times

//here below both do the same job but here different use cases
// let i = 1
// while(i<=10){
//     console.log(i)
//     console.log("Praveen")
//     i++
// }

// for(let i=1; i<=10; i++){
//     console.log(i)
//     console.log("Praveen")
// }

// for
// You know how many times to run (fixed count)
// Everything (init, condition, increment) is in one line
// Better for counting
// Bro, when logic is simple like "run 10 times", for loop is best 💯

// while
// You don’t know how many times loop will run
// You wait for some condition to become true or false
// Input/data dependent
// Initialization outside
// Better for waiting loops
// More flexible for complex conditions
// Bro, when you’re waiting for user action, API status, or anything dynamic, go for while loop 🔄

// I use a while loop when I need to wait for a condition to change — like waiting for user input, 
// or API response. It keeps running until the condition becomes false. It gives more flexibility than a for loop


// let i = 11 //infinite loop

// while(i>0){
//     console.log(i)
//     console.log("Shiva")
//     i++
// }


//condition true or false atleast one time execute block of code
//syntax
// do{
// //block of code
// }while(condition)

// i = 0 (initial value)
// Run this block (even before checking the condition!) do{}
let i=0
do{
    console.log(i)
    console.log("Praveen")
    i++
}while(i<=10)

// 🤯 What Makes do...while Special?
// ✅ Even if the condition is false at the beginning, the loop runs once

let x = 100
do{
    console.log("Hey Praveen")
}while(x<10)
// op - I will run once even if false!

// ES6 we used in automation
// for in - Objects
// for of - arrays
// for each - arrays