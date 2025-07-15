// 1. Reverse a string

// str = "Javascript"
// first convert string to an array then reverse after join for converting back to strings
// revstr = str.split("").reverse().join("")

// console.log(revstr)

// (or)

// function reverseString(s){
//     return s.split("").reverse().join("")
// }
// console.log(reverseString("SDET")) //TEDS

// 2. Check palindrome string
// 3. write a program to verify palindrome or not 
// even if you reverse also you getting same 

// function isPlaindrome(s){
//     const revstr = s.split("").reverse().join("")
//     return s === revstr
// }
// console.log(isPlaindrome("racecar")) // true

// (or)
// So "Madam" and "madaM" are not equal, even though they are palindromes when ignoring case.
// js follows camelcase

// str = "Madam"
// revstr = str.split("").reverse().join("")
// if(str == revstr){
// 	console.log("Palindrome")
// }else{
// 	console.log("Not Palindrome") //not palindrome
// }

// (or)

// str = "Madam"
// revstr = str.split("").reverse().join("")
// if(str.toLowerCase() === revstr.toLowerCase()){
// 	console.log("Palindrome")
// }else{
// 	console.log("Not Palindrome") //palindrome
// }

// check if two strings anagram or not
// first convert this string to array then you get sort then join you get string and store it in some variable
// same for second string also
// str1 = "mary" //array/sort/join - amry
// str2 = "army” //array/sort/join - amry

// let str1 = "mary"
// let str2 = "army"

// Step 1: Convert to lowercase (optional but good practice)
// str1 = str1.toLowerCase()
// str2 = str2.toLowerCase()

// Step 2: Sort characters
// let sortedStr1 = str1.split("").sort().join("")
// let sortedStr2 = str1.split("").sort().join("")

// Step 3: Compare
// if(sortedStr1 === sortedStr2){
//     console.log("Anagram")
// }else{
//     console.log("Not Anagram")
// }
// Anagram - both strings have same characters but in different places


// 1. Find Max Value in Array using
// let arr = [34,5,67,43,22]
// let maxValue = arr[0]

// for(let i=1; i<arr.length; i++){ //wrong lengh just click on lengh the press cmd + .(mac)
//     if(arr[i] > maxValue){
//         maxValue = arr[i]
//     }
// }
// console.log("Max value is: " + maxValue)




// arr = [1,4,5,6,1,4,5,9,3,4]
// remove duplicates first iterate through elements and take a new array that array already present dont push it if it is not available then push it so that you will get the unique elements
// take a new array then push it


//  Count Vowels

// str = “this is a sentence” 
// Find vowel counts in str
// take count = 0
// if vowel is present count++
// write a program to find character count in str

// let str = "this is a sentence"
// let count = 0

// for(let i=0; i<str.length; i++){
//     let ch = str[i]
//     // check if character is a vowel
//     if(
//         ch === 'a' ||
//         ch === 'e' ||
//         ch === 'i' ||
//         ch === 'o' ||
//         ch === 'u' 
//     ){
//         count++
//     }
// }
// console.log("Vowel count:",count)

// Problem 2: Count Total Characters (excluding spaces)
// Count all characters except spaces

// let str = "this is a sentence"
// let count = 0

// for(let i=0; i<str.length; i++){
//     if(str[i] !== ' ' ){
//         count++
//     }
// }
// console.log("Character count:", count) //Character count: 15

// Length including spaces: 18
// Spaces: 3 (' ' between "this", "is", and "a")
// So, non-space characters = 18 - 3 = 15


// print only spaces in this string
// let str = "this is a sentence"
// let count = 0

// for(let i=0; i<str.length; i++){
//     if(str[i] == ' ' ){
//         count++
//     }
// }
// console.log("Character count:", count) //Character count: 3


// character count including spaces
// let str = "this is a sentence"
// let count = 0

// for(let i=0; i<str.length; i++){
//         count++
    
// }
// console.log("Character count:", count) //Character count: 18 including spaces 

// find largest number in Array
// let arr = [1,5,3,10,2]
// function findLargest(arr){
//     let max = arr[0] // Assume first number is the largest

//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i] // Update max if current number is bigger
//         }
//     }
//     return max
// }
// console.log(findLargest(arr))

// ✅ Step-by-step Logic:
// Start with max = arr[0]
// Go through the array from index 1 to end
// If any number is greater than max, update max
// At the end, max will hold the largest number

// find even number number in array
// let arr = [1, 5, 3, 10, 2];

// function findEvenNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);  // Print even number
//         }
//     }
// }

// findEvenNumbers(arr);  // Output: 10, 2


// 8.⁠ ⁠Fibonacci Sequence (Iterative)

// function printFibonacci(n){
//     let a = 0, b = 1

//     for(let i=0; i<n; i++){
//         console.log(a)
//         let next = a + b
//         a = b
//         b = next
//     }
// }
// printFibonacci(7)

// factorial
// → Because 0! = 1 (by definition)
// function factorial(n){
//     let result = 1

//     for(let i=1; i<=n; i++){
//         result = result * i; // Multiply result with each number
//     }
//     return result
// }
// console.log(factorial(5)) // 120


// check prime
// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// Print all prime numbers from 1 to 100
// for (let num = 1; num <= 100; num++) {
//     if (isPrime(num)) {
//         console.log(num);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 10, 11];

// for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//         console.log(arr[i] + " is a Prime Number");
//     } else {
//         console.log(arr[i] + " is Not a Prime Number");
//     }
// }

// 1 is Not a Prime Number
// 2 is a Prime Number
// 3 is a Prime Number
// 4 is Not a Prime Number
// 5 is a Prime Number
// 10 is Not a Prime Number
// 11 is a Prime Number




// Reverse an array
// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }

// console.log("Reversed array:", reversed);


// ⁠Check if Array Is Sorted

// let arr = [1, 2, 3, 4, 5]; // Define array globally

// function isSorted() {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isSorted()); //true


// ⁠Check if Array Is Sorted in descending
// let arr = [5, 4, 3, 2, 1]; // Define array globally

// function isSorted() {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isSorted()); //true


// works
// Convert the string to lowercase.
// Loop through each character.
// If it's a letter, check if it's a vowel.
// If not a vowel → it's a consonant.
// Ignore spaces, punctuation, numbers.

// 20.⁠ ⁠Count Vowels and Consonants in String

// let str = "Hello World"
// let vowelCount = 0
// let consonantCount = 0

// str = str.toLocaleLowerCase() // So we handle capital letters

// for(let i=0; i<str.length; i++){
//     let ch = str[i]

//     if(ch >= 'a' && ch <= 'z'){ // only check letters
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ){
//             vowelCount++
//         }else{
//             consonantCount++
//         }
//     } 

// }
// console.log("Vowels:", vowelCount);
// console.log("Consonants:", consonantCount);

// print All characters
// let s = "HelloWorld"

// for(let i=0; i<s.length; i++){
//     console.log(s.charAt(i))
// }

// Which method is used to determine the length of a string in Javascript?
// But note: in JavaScript, length is a property, not a method — so you don’t use parentheses ().


// String length finder

// let s = "Hello World!"
// var length = 0
// for(let i=0; i<s.length; i++){
//     length++
// }
// console.log(length)

// String Concatenator
// using + operator
// let s1 = "Praveen"
// let s2 = " Kumar"

// let result = s1 + s2
// console.log(result)

// using concat()
// let s1 = "Praveen"
// let s2 = " Kumar"

// let result = s1.concat(s2)
// console.log(result)

// using Template literals
// let s1 = "Praveen"
// let s2 = " Kumar"

// let result = `${s1} ${s2}`
// console.log(result)


// using join with an array
// let s1 = "Praveen"
// let s2 = " Kumar"

// let result = [s1,s2].join('')
// console.log(result)

//  Print Character at Given Index
// let s = "HelloWorld!"

// let i = 10
// // Check if index is valid
// if(i >=0 && i<s.length){
//     console.log(s.charAt(i)) // Print character at index k
// }else{
//     console.log("Invalid index")
// }


//  Extract Digits from String
// let s = "Praveen123"

// let result = "" // Empty string To store digits

// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)

//     if(ch >= '0' && ch <= '9'){
//         result += ch + " "
//     }
// }
// // Output result
// if(result.trim() === ""){
//     console.log("No numbers Found")
// }
// else{
//     console.log(result.trim())
// }

// (or)

// let input = "Hello123";
// let result = "";

// // Step 1: Collect digits with space
// for (let i = 0; i < input.length; i++) {
//     let ch = input[i];
//     if (ch >= '0' && ch <= '9') {
//         result += ch + " ";
//     }
// }

// // Step 2: Check if result is empty manually
// if (result === "") {
//     console.log("No numbers found.");
// } else {
//     // Remove trailing space manually
//     let output = "";
//     for (let i = 0; i < result.length - 1; i++) {
//         output += result[i];
//     }

//     console.log(output);
// }


// str.length - 1 removing last character i = 0 to i = 4
// Remove last character i<s.length-1
// Include all characters i < str.length
// Skip first character i = 1; i < str.length


// Why declare i outside? - So both loops can share the same i
// You use i in two separate loops:
// First: to skip spaces
// Second: to continue from that index onward

// JavaScript Code to Remove Leading Spaces:
// both leading spaces and trailing spaces
// let s = "   Hello World   "

// let result = ""

// let i = 0;
// while(i<s.length && s[i] === ' '){
//     i++
// }

// for(; i<s.length; i++){
//     result += s[i]
// }
// console.log(result) //Hello World

// "" → Empty String
// It contains nothing at all — no characters, no spaces.
// Length is 0
// It’s used when you want to store an empty value
// let str = "";
// console.log(str.length);  // 0


// ' ' → Space Character
// This is a string with exactly one space
// Length is 1
// It's a visible whitespace character (but you can't see it)
// let str = ' ';
// console.log(str.length);  // 1

// counting numeric characters in a given string
// let s = "praveen123"

// let count = 0

// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     if(ch >= '0' && ch <= '9'){
//         count++
//     }
// }
// console.log(count)


// Uppercase Character Count
// let s = "PraveenKumar@123"

// let count = 0

// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     if(ch >= 'A' && ch <= 'Z'){
//         count++
//     }
// }
// console.log(count) //2


// Lowercase Character Count
// let s = "PraveenKumar@123"

// let count = 0

// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     if(ch >= 'a' && ch <= 'z'){
//         count++
//     }
// }
// console.log(count) //10

// Consonant Count in String
// let s = "PraveenKumar@123"

// let count = 0

// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     if(ch >= '0' && ch <= '9'){
//         count++
//     }
// }
// console.log(count) //3


// Given a string, extract special characters (i.e., not letters, not digits, not spaces) 
// and print them separated by a space.
// If there are no special characters, print:
// No special characters found

// let s = "Hello! How are you? #Excited!";
// let result = ""
// let count = 0 // To count special characters

// // Step 1: Collect special characters manually
// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     if(
//         !(ch >= 'A' && ch <= 'Z') &&
//         !(ch >= 'a' && ch <= 'z') &&
//         !(ch >= '0' && ch <= '9') &&
//         ch !== ' '
//     ) {
//         result += ch + " "
//         count++ // Counting how many were added

//     }
// }
// Step 2: Manually remove trailing space from result
// let final = ""
// for(let i=0; i<result.length-1; i++){ //We copy all characters except the last space:
//     final += result[i]
// }
// // Step 3: Output based on count
// if(count === 0){
//     console.log("No special characters found.")
// }else{
//     console.log("special characters: "+final) //! ? # ! 
//     console.log("Total special characters: "+count) ////print count ->4
// }


// Problem
// Counts the number of vowels, consonants, and special characters in a given string

let str = "Hello, World!"; // You can change this input string

let vowelsCount = 0;
let consonantsCount = 0;
let specialCount = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // Convert uppercase to lowercase manually
    if (ch >= 'A' && ch <= 'Z') {
        // convert manually to lowercase
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    // Check if it's a vowel
    if (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
    ) {
        vowelsCount++;
    }
    // Check if it's a consonant (i.e., alphabet but not vowel)
    else if (ch >= 'a' && ch <= 'z') {
        consonantsCount++;
    }
    // Otherwise, it's a special character
    else if (ch !== ' ') {
        specialCount++;
    }
}

// ✅ Output
console.log("Vowels:", vowelsCount);
console.log("Consonants:", consonantsCount);
console.log("Special Characters:", specialCount);

