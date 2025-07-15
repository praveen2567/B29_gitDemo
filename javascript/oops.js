// 1. Encapsulation - data binding between the methods

class Employee{

    EmployeeName;
    EmployeePlace;
    EmpOrg;
    // one method is setter method means it will set the data for us
    empDeatils(name, palce, org){
        this.EmployeeName = name
        this.EmployeePlace = palce
        this.EmpOrg = org
    }
    // another method is getter method it will fetch the data for us
    printEmployeeDetails(){
        console.log(this.EmployeeName)
        console.log(this.EmployeePlace)
        console.log(this.EmpOrg)
    }

}
// directly we cant call first create an object then call

// const emp1 = new Employee() 
// const emp1 = new Employee() //not return anything on the console
// emp1.printEmployeeDetails()//expect 3 params but no undefined undefined undefined
// emp1.empDeatils("Raju", "Blr", "DBS QA")
// emp1.printEmployeeDetails()
// this methods will act as one unit that behaviour is called an encapsulation

// 2.inheritance

// class A is base class / parent class
// single inheritance from one class to another class
// class A{
//     m1(){
//         console.log("This is m1 method")
        
//     }
//     m2(){
//         console.log("This is m2 method")
        
//     }
//     m3(){
//         console.log("This is m3 method")
        
//     }
//     m4(){
//         console.log("This is m4 method")
        
//     }
// }
// class B is derived class / child class
// class B extends A{
//     m5(){
//         console.log("This is m5 method")
        
//     }
//     m6(){
//         console.log("This is m6 method")
        
//     }
//     m7(){
//         console.log("This is m7 method")
        
//     }
//     m8(){
//         console.log("This is m8 method")
        
//     }
// }

// const praveen = new B()
// praveen.m1() //A
// praveen.m7() //B

// Multi-level inheritance
// class A{
//     m1(){
//         console.log("This is m1 method")
        
//     }
//     m2(){
//         console.log("This is m2 method")
        
//     }
//     m3(){
//         console.log("This is m3 method")
        
//     }
//     m4(){
//         console.log("This is m4 method")
        
//     }

// }
// class B extends A{
//     m5(){
//         console.log("This is m5 method")
        
//     }
//     m6(){
//         console.log("This is m6 method")
        
//     }
//     m7(){
//         console.log("This is m7 method")
        
//     }
//     m8(){
//         console.log("This is m8 method")
        
//     }
// }

// class C extends B{
//     m9(){
//         console.log("This is m9 method")
//     }
//     m10(){
//         console.log("This is m10 method")
//     }
// }

// const praveen = new C()
// praveen.m1() //A
// praveen.m7() //B
// praveen.m9() //C


// hierarchical inheritance
// class A{
//     m1(){
//         console.log("This is m1 method")
        
//     }
//     m2(){
//         console.log("This is m2 method")
        
//     }
//     m3(){
//         console.log("This is m3 method")
        
//     }
//     m4(){
//         console.log("This is m4 method")
        
//     }

// }
// class B extends A{
//     m5(){
//         console.log("This is m5 method")
        
//     }
//     m6(){
//         console.log("This is m6 method")
        
//     }
//     m7(){
//         console.log("This is m7 method")
        
//     }
//     m8(){
//         console.log("This is m8 method")
        
//     }
// }

// class C extends A{
//     m9(){
//         console.log("This is m9 method")
//     }
//     m10(){
//         console.log("This is m10 method")
//     }
// }

// const praveen = new C()
// praveen.m1() //A
// praveen.m7() //B
// praveen.m9() //C

// Multiple inheritance(through interfaces) - JAVA
// first of all interfaces not there in javascript typescript suports but not javascript
// hybrid inheritance not supported

// 3.Polymorphism 
// Method overriding
// Method overloading

// class A{
//     printMessage(){
//         console.log("Hi")
//     }
//     add(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)
//     }
// }
// class B extends A{
//      printMessage(){
//         console.log("Hi Namste")
//     }
//     add(num1, num2, num3){
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1 + num2 + num3)
//     }
// }

// const obj = new B()
// obj.printMessage() // only child class method will execute parent also having same method
// method overriding mean it will execute only child not the parent
// obj.add(5,10,2) //it prints and total B
// obj.add(10,2)//A undefined NaN this is also overriding to child one

// const obj = new A()
// obj.add(4,12,8) // requires 2 params but we give three compiler not throwing error
// print 4 12 16 last value 8 is ignored method overloading

// prototyping

// class ABC{
//     stname = "Praveen"
//     stlastname = "Kumar"

//     m1(){
//         console.log("This is method m1")
//     }
//     m2(){
//         console.log("This is method m2")
//     }
// }
// ABC.prototype.stplace = "Blr" // we cant access this variable because it is outside the class
// // then how to give connection just mention className.prototype.variable to access 
// ABC.prototype.m3 = function(){
//     console.log("This is method m2")
// }

// const obj = new ABC()
// console.log(obj.stplace)
// obj.m3()

// if(4>3){

// }

// const x = 20
// x = 25 //sometimes editor not capable to catch the errors but our compiler will catch it
// console.log(x)

// POM 
// in pom page wise we will create classes
// class loginPage{

// }

// call backs - before going call backs why do we need 
// Advantages call backs
// Disadvantages call backs
// why peoples moving from call backs to promises from promises to async / await
// Javascript was a syn or aync language
// Javascript is a syn language by default but also supports async behavior using special constructs.
// JS uses callback, Promise, async/await to handle tasks like API calls, timers
// JavaScript has one call stack (no multi-threading)
// console.log("ABC")
// console.log("XYZ")
// which one going to be first execute is ABC then XYZ because line by line excute
// we can execute XYZ first then ABC yes it is possible how make it async
// how to make it asyncs is using call backs promises async / await

// call backs

// function xyz(){

// }

// function abc(xyx){
//     //execution
//     xyz() //callback function
// }
// abc()

// what is anynymous function - function without name

// normal function
// function add(){
//     // logic
// }

// arrow function
// anonymous function
// () => {
    // logic
// }

// most of the time we use anonymous function as a call back function

setTimeout( () => {
    console.log("Mohan")
},3000)
console.log("Raju") //first raju printed then after 3secs mohan will be printed

// higher order function
// closer function


//clean code principles 
// ✅ What is Clean Code?
// "Code should be easy to read, easy to reuse, 
// and easy to fix — not just for you, but for your teammates also."
// 1. camel casing

// Good
// let firstName = "Praveen";
// function getUserDetails() {

// }
// Bad
// let First_Name = "Praveen";
// function GetUserDetails() {}

// 🧠 Why?
// JS follows camelCase by convention
// Makes code look professional and consistent
// Use camelCase for variables and functions (first word small, next words capital)
// 2. DRY
// ✅ 2. DRY – Don’t Repeat Yourself
// "Avoid writing same code again and again. Create reusable functions."

// Bad
// console.log("Welcome Praveen");
// console.log("Welcome Raju");
// Good
// function greet(name) {
//   console.log("Welcome " + name);
// }
// greet("Praveen");
// greet("Raju");
// 🧠 Why?
// Easy to update in one place
// Reduces bugs and lines of code

// 3. SOLID
// ✅ 3. SOLID Principles (Advanced, used in large projects)
// These come from Object-Oriented Design. 
// You’ll mostly use them in big apps with classes (React, TypeScript, Java, etc.)
// S - Single Responsibility
// One function/class → one job.
// // ❌ Wrong - function does multiple things
// function handleUser() {
//   // login + send email + store data
// }

// // ✅ Right - split them
// function loginUser() {}
// function sendEmail() {}
// function saveUserData() {}

// O - Open/Closed
// Open for extension, closed for modification.
// Means: Add new things without changing existing code
// // You create base class
// class Shape {
//   getArea() {}
// }

// class Circle extends Shape {
//   getArea() { return Math.PI * r * r; }
// }

// class Square extends Shape {
//   getArea() { return side * side; }
// }

// L - Liskov Substitution
// Sub-classes should work like parent class — without breaking.
// You can use any child class where parent is expected.

// I - Interface Segregation (rare in JS, common in TypeScript/Java)

// D - Dependency Inversion
// Depend on abstraction, not direct concrete objects. (Used in React services, TypeScript, etc.)


// 4. KISS
// ✅ 4. KISS – Keep It Simple, Stupid
// "Write simple and clear code, not over-smart."
// 🔁 Bad:
// let x = (((a + b) / 2) * Math.sqrt(z)) / Math.PI;
// ✅ Good:
// let average = (a + b) / 2;
// let result = (average * Math.sqrt(z)) / Math.PI;
// 🧠 Why?
// Simple code = fewer bugs
// Easy to maintain

// ✅ Bonus Clean Code Tips:
// ✅ 5. YAGNI – You Aren’t Gonna Need It
// Don’t write extra features “just in case” — write only what’s needed.

// ✅ 6. Comment only if needed
// Code should explain itself. Don’t write unnecessary comments.
// ✅ Good:
// // Wrong: Increase counter
// i++;
// ✅ Better:
// let userCount = 0;
// userCount++;

// ✅ 7. Use meaningful names
// Not like x1, y2, temp.
// ✅ Good:
// let userName = "Praveen";

// 🎯 Summary Table:
// Principle
// Meaning (Simple Words)
// Real Example
// camelCase
// Write variables like userName, getData()
// Standard JavaScript style
// DRY
// Don’t repeat code
// Create reusable functions
// SOLID
// Clean OOP structure
// Break big logic into classes/functions
// KISS
// Keep logic simple
// Avoid smart-looking confusing code
// YAGNI
// No extra code
// Don’t write unused stuff
// Meaningful Names
// Easy to read code
// userEmail not x1