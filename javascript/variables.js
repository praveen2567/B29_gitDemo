var x = 10
var y = 20

var z = x + y

console.log("The value of z is: "+z)

//var is a global scope
// good for reusability purpose  
var sname = "Praveen"

sname = "Sairo"

sname = "Teja"

console.log(sname)

var a; //declaration

var a = 10 //declaration & assignment

console.log(a)

// before

console.log(2*2*2*2*2)

//This ** introduced in ES6(Ecma Script) in 2015
console.log(2**5) // 2 power 5

str = "     hello   "

console.log(str.trim()) //we use built in methods

// function example(){ this is function scoped not accessible from outside
//     var num = 10
// }
// console.log(num) //❌ ReferenceError: num is not defined

// function example(){
//     var num = 10
//     console.log(num)
// }
// example() //call the function

// {
//   var x1 = 100;
// }
// console.log(x1); // ✅ 100 — not block scoped!


// ✅ What's really happening behind the scenes
// var x1; // make it as global scope
// {
//   x1 = 100;
// }
// console.log(x1); // ✅ 100

// If you want num to be accessible outside, declare it outside the function:

// The variable num is declared using var inside a function.
// var has function scope, which means:
// The variable exists only within that function.
// It is not accessible outside the function



// var
// 1. var global scope or  //function scope
// 2. reassign different values is possible
// 3. redeclaration same variable is possible
// 4. var is from initial version(ES1) JS

// if declared outside any function, then it becomes global scope.

// var greet = "Namasthe"
if(4>3){
    var greet = "Namasthe"
    // console.log(greet)
}
console.log(greet) // same for if accessible outside block //let const - not accessible from outside even for if
// var does not have block scope (unlike let or const).
// Even though greet is declared inside an if block, it is hoisted to the function or global scope.
// So greet is accessible outside the if block



// let
// 1. Blocked scope
// 2. reassign different values is not possible // You just can't redeclare it in the same scope
// 3. redeclarartion same variable is not possible
// 4. let from ES6(2015) version JS

// You CAN reassign new values to a variable declared with let.
// let x = 10;
// x = 20; // ✅ valid
// console.log(x); // 20

// Yes, you cannot redeclare a let variable in the same scope.
// let x = 10;
// let x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared

// But in different blocks, it’s allowed:
// let a = 1;
// {
//   let a = 2; // ✅ allowed (different scope)
// }


//const
// Blocked scope
// reassign diffrent value is not possible
// redclaration same variable is not possible in same scope
// let from ES6(2015) version js


// But in different blocks, it's allowed
// const a = 10;
// {
//   const a = 20; // ✅ Block-scoped
//   console.log(a); // 20
// }
// console.log(a); // 10

// You cannot reassign, but if the value is an object or array, you can mutate its contents:
// const arr = [1,2,3]

// arr.push(4)

// console.log(arr)

if(4 > 3){
    let greet = "Namaste"
    console.log(greet)

    if(5>2){
        console.log(greet)
    }
    {
        console.log(greet)
    }
}
// if block inside many sub blocks yes we can access