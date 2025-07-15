// js is a dynamically typed language - mean In JavaScript, you don’t declare the type of variables 
// (like string, number, boolean) explicitly

// let value = 42;         // Initially a number
// value = "Hello World";  // Now it's a string

// You can write code faster
// JavaScript is flexible, but that flexibility can cause bugs — like passing a string instead of a number.
// In big projects, these mistakes are hard to catch.
// That’s why companies prefer TypeScript — it catches errors early with strict types. ✅

// relation between
// Why the name sounds similar?  
// Java And JS -- no relation
// Just marketing. Java was popular when JavaScript was created, so the name “JavaScript” was chosen to ride the wave
// they both look similar but they are completely different languages
// have different architectures, and are used in different domains.

// JAVA 
// 1.Statically typed (strict types) - you must declare types

// 2.Compiled into bytecode (runs on JVM)

// 3.Backend, Android, Enterprise

// 4.write once run anywhere (JVM based) - run any os 

// 5.Verbose and class-based
// Verbose means you need to write more code to do simple things.
// Java requires declaring types, access modifiers (public, private), classes, methods — even for small tasks
// Class-based means everything in Java must be written inside a class.
// Even if you want to print one line, it has to be in a class and method
// JavaScript didn’t originally require classes, but now supports them (after ES6)

// 6.Multithreading (via threads)
// Java uses threads to perform multiple tasks at the same time.
// A thread is like a lightweight mini-process inside a program.
// Multithreading means running two or more parts of your program simultaneously
// Imagine you're running a banking app in Java:
// One thread checks the balance.
// Another thread processes a withdrawal.
// Another thread sends an SMS.
// All can happen at the same time — without waiting for each other

// JavaScript is single-threaded → it uses only one thread to run all code.
// But it's non-blocking, thanks to its event loop and async features
// 4.usage backend or android apps

// Javascript
// 1.Dynamically typed (flexible) or loosely typed
// In JavaScript, you don’t declare variable types.
// The type is figured out (inferred) at runtime — when the code runs

// 2.Interpreted or JIT compiled or Interpreted in browser/runtime (runs in browser or Node.js)
// JavaScript is not pre-compiled like Java
// It’s either:
// Interpreted → code runs line by line.
// Or JIT compiled (Just-In-Time) → modern engines like Chrome's V8 convert JS to machine code while running for better speed.
// In browsers (Chrome, Firefox, etc.) for web apps.
// In Node.js (outside the browser) for backend/server apps

// 3.Browser-based (mainly), or Node.js for backend
// JavaScript was originally made to run in the browser 🧑‍💻
// ➤ It controls webpages — handles user clicks, animations, form validation, etc.
// But now with Node.js, JavaScript can also run outside the browser — on servers (backend)
// JavaScript mainly runs in the browser to build interactive websites, but with Node.js, 
// it can also run on the server to power full backend apps

// 🔹 Web interactivity
// JavaScript makes websites interactive:
// Button clicks
// Form validation
// Live search, animations, sliders, etc.
// 👉 Without JavaScript, web pages would be static (non-interactive).
// 🔹 APIs
// JavaScript (especially in the browser) can talk to servers using APIs:
// Using fetch() or axios to get/post data
// Example: Load products on an e-commerce site without reloading the page
// 🔹 Full-stack with Node.js
// JavaScript can now be used both frontend and backend:
// Frontend: React, Vue (runs in browser)
// Backend: Node.js + Express (runs on server)
// 📦 So JavaScript is used for full-stack development — one language for both sides!

// 4.Syntax - Lightweight and function-based (though supports classes now(ES6))

// 5.Single-threaded with async/event loop (non-blocking)
// 🔹 Single-threaded
// JavaScript runs one task at a time — like a single line queue.
// It doesn’t create multiple threads like Java does.
// 🔹 Async with Event Loop (Non-blocking)
// Even with one thread, JS can handle multiple tasks efficiently:
// It uses an event loop to pause long tasks (like loading a file or API data)
// And then continues with other work without waiting

// 6.use case - Web pages, real-time apps, dynamic UI
// 7.usage Web frontend, backend (Node.js)

// javascript vs typescript

//  here there is a lot connection is there
//  whatever the code in JS may be run in typescript
//  but whatever in typescript we cant run in js
//  typescript is just an enhanced version of js

// 1.JavaScript is the main language – works everywhere (browser, Node.js)
// 2.TypeScript is like an upgraded version of JavaScript. It adds extra features like types
// 3.Whatever we write in JavaScript will mostly work in TypeScript
// 4.But TypeScript code won’t work directly in JavaScript, because it has some extra rules (like type checking)
// 5.Before running, TypeScript gets converted into JavaScript (called transpiling).
// TypeScript code can’t run directly in browser or Node.js.
// So before running, it is converted into normal JavaScript.
// This converting process is called transpiling.
// After that, the browser or Node.js will run the JavaScript version.
//  So bro, TypeScript is nothing but JavaScript + more safety + better structure. 
//  That’s why companies prefer it for big projects.
// TypeScript → (transpile) → JavaScript → runs


//  Java

//  int x = 4; // here x contains int value but override with string not possible

//  x = "Raju" //compiler will thrown an error
// In Java, you must tell the type (int, String, etc.).
// Once given, you can’t change it to something else.
// Compiler will give error if type changes.

//  But in JS no data type mention

// x = 10 if you dont give anything like variable by default var created

//  y = "Raju"
//  console.log(y)
//  console.log(typeof(y))
// In JS, no need to declare type.
// Variable can hold number, then string, then anything — no problem.
// JS automatically converts types if needed

// type conversion automatically do in JS but this kind of flexibility not there in other languages
// JavaScript is very flexible, but that also makes it riskier if you don’t handle it properly.


// 1. primitive data types --immutable

// 1. Number x=-34 or x = 34.5 both are considered number not like other programming languages 
// for all the numbers number is the data type Both are treated as number, no separate int or float like Java.
// 2. string x = "Raju" or x = 'Raju' or x = `Raju` --> Backticks ( ): Used for template literals, 
// which are string literals allowing embedded expressions like ${}
// 3. Boolean x = true or x = false
// 4. undefined var x or var x = undefined //Variable declared but not given any value.
// 5. null var x = null you declared a variable and explicitly mention empty mean null it return to the consloe object
// You manually say it’s empty. JS shows type as object — it’s a known JS issue.
//  Semicolon (;) at end of line is optional — not compulsory like Java.

// end with semicolon is optinal 

// Non primitive data types - collection of primitive data types --mutable
// 1. Arrays
// let arr = [10, 20, "Raju", true];
// List of values — can be of any type

// 2. Objects
// let person = { name: "Raju", age: 25 };
// Key-value pairs — like real-world things with properties.
// 3. Regular Expressions
// let regex = /abc/;
// Used to match patterns in strings (like password validation, email check, etc.)


arr = [] //empty array

arr1 = ["Admin", "admin123"] // 2 elemets inside

arr2 = ["Raju",34,true,null,undefined] //all the elements are not similar data types -heterogenious
console.log(typeof(arr2[3])) //object
console.log(typeof(arr2[4])) //undefined

arr3 = [1,2,3,4,56,7,89] //all the elements are similar data types - homogenious
console.log(typeof(arr3)) //// object → In JS, array type is also "object"

// index always starts from 0
// ✅ Arrays can store any data types
// ✅ Arrays are mutable – we can add, remove, or change elements.

console.log(arr1[0]); // "Admin"
console.log(arr1[1]); // "admin123"

arr4 = ["Eat", "Sleep"]
arr4[1]="Study"
console.log(arr4)

str = "Javsscript"

str[3]='a' //immutable
console.log(str) //Javsscript
// But why it didn’t change?
// Because → Strings are immutable in JavaScript.

// So how to modify string then?
// You have to create a new string:
// let str = "Javsscript";

// // Replace the 3rd index (which is 's') with 'a'
// let newStr = str.substring(0, 3) + 'a' + str.substring(4);

// console.log(newStr); // Output: Javascript ✅

// str.substring(0, 3)
// Means take from index 0 to 2 → "Jav"
// 'a'
// The new letter we want to insert in place of 's'
// str.substring(4)
// Means take everything from index 4 till end → "script"
// Bro, string can't be changed directly, so we cut and join parts to make a new one

// Combine All:
// "Jav" + "a" + "script" = "Javascript"

// objectname = {
//     propertyname : propertyvalue
// }

student = {
    firstname: "Anjali",
    lastname: "M",
    place: "Blr"
}

console.log(student.firstname)
console.log(student.lastname)
console.log(student.place)

creds = {
    username: "Admin",
    password: "admin123"
}
console.log(creds.username)

// In JavaScript, objects store real-world data in key–value pairs.
// We use dot notation like object.key to access the values.
// Very useful for user info, API responses, configs, etc









