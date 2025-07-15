
// arr = {12,34,56,78,34,12}// this not correct way of doing in JS
// arr = [] //empty array

// arr1 = [2,4,5,"Raju",7,8,9]
// count no. of elements inside an array
// console.log(arr1.length)
// //i want to fetch paricular ele from the array
// // index starts 0
// // 1st element index 0
// //last index ele is length - 1
// console.log(arr1[3])

// creds = ["Admin", "admin123"]
// creds[0]
// //arrays elements can be same data type or different type
// console.log(typeof(arr1))//object
// console.log(typeof(arr1[3]))//string

// ✅ arr1 is an object
// ✅ It comes from the Array class
// ✅ And Array itself is derived from the base Object class
//  Every class returns an object when you create an instance
// 👉 Array is a class,
// 👉 An array is an object,
// 👉 Typeof array is "object",
// because all arrays are objects, but not all objects are arrays.
// Arrays are just objects created from the Array class

// which is wrong syntax
// arr2 = [4,2,5,6,3,9]
// //sort arr2 in asc order
// arr3 = arr2.sort()
// console.log(arr3)

// this is correct -  asc
// arr4 = [10,34,56,71,23]

// arr5 = arr4.sort((a, b) => a - b)

// console.log(arr5)

//dsc
// arr6 = [12,34,5,6,76]

// arr7 = arr6.sort((a,b) => b - a)

// console.log(arr7)

// Sort array of objects by property (e.g., students.sort((a, b) => a.age - b.age))

//sort asc by strings
// arr8 = ["Praveen", "Sumanth", "Sairo", "Teja"]

// arr9 = arr8.sort()

// console.log(arr9)

// arr8 = ["praveen", "sumanth", "Sairo", "teja", "Gagan","anjali"] //because of caps Gagan should came first

// arr9 = arr8.sort()

// console.log(arr9)

//reverse or flipped the strings inside an array

// arr9 = ["praveen", "sumanth", "Sairo", "teja", "Gagan","anjali"]

// arr10 = arr9.reverse() //in-built method

// console.log(arr10)

// arr11 = ["praveen", "sumanth", "Sairo", "teja", "Gagan","anjali"]

// str = arr11.join() //praveen,sumanth,Sairo,teja,Gagan,anjali

// str = arr11.join("") //praveensumanthSairotejaGagananjali

// str = arr11.join(" ") //praveen sumanth Sairo teja Gagan anjali

// console.log(str)

//i have one string that i will convert into array

// str = "javascript class" //even this space considered one ele

// arr7 = str.split("") split - convert string to array

// console.log(arr7)

// str = "this is javascript class" //4 elements

// arr7 = str.split(" ")

// console.log(arr7)


// push
// shift
// unshift
// pop

// str2 = "PraveenKumar"

// revstr = str2.split("").reverse().join("") //now you get reversed string .
// join("") joins the reversed array back into a string, with no spaces
// .reverse() reverses the array
// .split("") splits the string into an array of individual characters
// console.log(revstr)

//i want to add one more element in an array - push
// arr = ["eat", "sleep"]

// arr.push("Study") //add element at the end of the array

// console.log(arr)

// arr.unshift("drink") //add element at the beginning of the array

// console.log(arr)

// arr.pop() //remove the element at the end of the array

// console.log(arr)

// console.log(arr)

// arr1 = ["mango","apple","banana"]
// for(let i=arr1.length-1; i>=0; i--){
//     arr1.pop()
// }
// console.log(arr1) //[]

// arr1 = ["Apple","mango","orange"]

// arr1.pop()
// arr1.shift() //remove element at the beginning of the array

// console.log(arr1)

// arr = ["eat", "sleep","Study"]
//replacing 
// arr[2] = "Play"
// console.log(arr) //[ 'eat', 'sleep', 'Play' ]


//includes() - in ES6 true or false
// arr = ["eat", "sleep","Study"]
 
// console.log(arr.includes("sleep"))//true
// console.log(arr.includes("praveen"))//false
// console.log(arr.indexOf("Study")) // 3

//Yes! ✅ JavaScript is case-sensitive — both in syntax and data values like strings, variables, function names, etc
// 🔹 Feature                     ✅ Case-Sensitive?
	                   
// Variable names	                ✅ Yes
// Function names	                ✅ Yes
// String values	                ✅ Yes
// Keywords (if, let)	            ✅ Yes
// Array methods (push, includes)	✅ Yes

// concat() - it takes two arrays make it as one array

// arr1 = ["manogo","sleep","apple"]
// arr2 = ["eat","sleep"]

// console.log(arr1.concat(arr2))

// slice() - chop it and create new array

// arr3 = ["hello","world","hey","what"]

// console.log(arr3.slice(0,2))

// splice() - 

arr4 = ["suv","sumo","tata","kia"]

// Remove 1 element at index 2
arr4.splice(2, 1)
console.log(arr4) //[ 'suv', 'sumo', 'kia' ]
// 2. Add an element 'code' at index 1
arr4.splice(1,0,"code") //after index 0 we add one element 
console.log(arr4) //[ 'suv', 'code', 'sumo', 'kia' ]

// 3. Replace element at index 3 with 'exercise'
arr4.splice(3,1,"exercise") // how many ele you want to replace 1
console.log(arr4) //[ 'suv', 'code', 'sumo', 'exercise' ]

// 4. Remove last two elements
arr4.splice(-2, 2)
console.log(arr4) //[ 'suv', 'code' ]

// 5. Clear entire array using splice
arr4.splice(0, arr4.length)
console.log(arr4) //[]

// map() - i want to perform on each ele in the array apply some logic
// filter() - i want to filter eles based on some conditions lke only odd numbers, even numbers, which is divisible by 3
// reduce() - i want to perform all operations but finally get one result

// arr5 = ["tata","infy","hcl","lti"]

// arr5.forEach(element => {
//     console.log(element)
// });
// tata
// infy
// hcl
// lti

// both forEach and for of gives same output
// this will be again helpful for data driven testing
// arr5 = ["tata","infy","hcl","lti"]

// for(let ele of arr5){
//     console.log(ele)
// }
// // tata
// // infy
// // hcl
// // lti

// str = "Praveen Kumar"

// arr = str.split(" ")  

// console.log(arr)


// arr = str.split("")
// [
//   'P', 'r', 'a',
//   'v', 'e', 'e',
//   'n'
// ]

// arr = str.split(" ")  
// [ 'Praveen', 'Kumar' ]

// descending order
// arr1 = [1,5,8,9,2,4]

// arr2 = arr1.sort().reverse()

// console.log(arr2)




// const nums = [1,3,4,6,7,9,2]

// const res = nums.filter((ele) => ele > 2)

// console.log(res) //[ 3, 4, 6, 7, 9 ]

// strings - we have different methods
// numbers - we have different methods

// filter()
// print the numbers which is greater than 2
// const nums = [1,3,4,6,7,9,2]

// const res = nums.filter((ele) => ele > 2)

// console.log(res) //[ 3, 4, 6, 7, 9 ]


// print the names which contains a
// const names = ["Praveen", "Sairo", "Teja", "Vishnu"]

// const res = names.filter((ele) => ele.includes('a'))

// console.log(res)




// map()
// const users = [
//     {name: "Praveen", age: 25},
//     {name: "Teja", age: 22},
//     {name: "Sairo", age: 27}
// ]
// const names = users.map(ele => ele.age) // access only names
// const names = users.map(ele => ele.age) //access only ages
// const names = users.map(ele => ele.age).sort() // this will give in asc order
// const names = users.map(ele => ele.name).sort().reverse() // this will give in dsc order
// console.log(names)

// squares of numbers - map()
// const nums = [1,3,2,4,5]

// const res = nums.map(ele => ele * ele) 

// console.log(res)


// print sum of all the numbers
// const nums = [1,3,2,4,5]

// const sum = nums.reduce((acc, curVal) => {
//     acc = acc + curVal
//     return acc
// },0)
// console.log(sum)


// Set is a built-in JavaScript object that only stores unique values remove duplicates
// const num = [1,2,2,3,4,4]

// const uniqSum = [...new Set(num)].reduce((acc,val) => acc+val,0)

// console.log("Unique sum: "+uniqSum )


// ✅ 2. Average of numbers
// const num = [1,4,5,3,2]

// const sum = num.reduce((acc, val) => acc+val,0)

// const avg = sum/num.length;

// console.log(avg)

// ✅ 3. Product of numbers
// const num = [1,4,5,3,2]
// const product = num.reduce((acc, val) => acc * val, 1);
// console.log("Product:", product);

// ✅ 4. Maximum number
// const num = [1,4,5,3,2]
// const max = num.reduce((acc, val) => (val > acc ? val : acc));  //Ternary operator like if else condition 
// console.log("Max:", max);

// ✅ 5. Minimum number
// const num = [1,4,5,3,2]
// const min = num.reduce((acc, val) => (val < acc ? val : acc));
// console.log("Min:", min);

