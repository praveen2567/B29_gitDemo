// condition
// {
//     block of code
// }

// if else if switch

// {

// }
// for, while, do while, for in

//if i call function name then block of code executed how

// function printMessage(){
//     console.log("Raju")
//     console.log("Praveen")
// }
// printMessage() //call the function prints

//i want to change the names when i call function

function printMessage(val1, val2){
    console.log(val1)
    console.log(val2)
    console.log(val1 + val2)
}
printMessage("Praveen", "Sairo")
printMessage(10,20)

// JS
// x = 20

// x = "Raju"

// console.log(x)//Raju (latest)

// TS
x : number = 20 //x stores number 

x = "raju"// x not stores string

console.log(x)//throw an error


x : any = 20 //now we can store anything this works

x = "raju"

console.log(x)//raju 

// this is the major difference between javascript and typescript
// functions with params / args
// functions without params / args

// function add(num1, num2){
//     console.log("Raju")
//     console.log(num1 + num2)
//     console.log("Execution completed")
// }
// add(10,20)


// function add(num1, num2){
//     console.log("Raju")
//     console.log(num1 + num2)
//     console.log("Execution completed")
// }
// add()//without values i call 1st and 3rd prints 2nd one NaN(undefined + undefined = NaN)


// function with return keyword
// function display(){
//     return "Praveen"
// }
// x = display()//Praveen
// console.log(x)

function add(num1, num2){
    return num1 + num2
}
console.log(add(5,3))


// ES6 - Arrow functions

// function printMessage(){
//     console.log("This is a normal function")
// }

printMessage = () => {
    console.log("arrow function")

}
printMessage()

// function sqrtnum(num){
//     console.log(num*num)
// }
// sqrtnum()

sqrtnum = num => { //single parameter no need to give brackets
    console.log(num*num)
}
sqrtnum(9)


// add = (num1, num2) => { //if you have 2 or more params give brackets
//     console.log(num1 + num2)
// }
// add(5,3)


// function add(num1, num2){
//     return num1 + num2
// }

add = (num1, num2) => num1 + num2 //when you have a single return statement
console.log(add(4,3))
