
// console.log("5" - 2) // 3

// console.log("Raju" - 2) // NaN(Not a number)

console.log(55 + undefined) // NaN

console.log(isNaN(55 + undefined)) // true Adding number (55) + undefined = Not a Number (NaN)

console.log(isNaN(55 + 20)) // false

str = Number("34")

console.log(typeof(str)) // number

num = String(45)

console.log(typeof(num)) //string

num2 = parseInt("12.45")

console.log(num2) //12

num2 = parseFloat("12.45")

console.log(num2) //12.45

num2 = Number("12.45")

console.log(num2) //12.45

console.log(2**53) // 9007199254740992 any number after this is a big integer

num3 = 90071992547409927345n //big integer last mention n

num4 = 3n

total = num3 + num4

console.log(total) // 90071992547409927348n

max = Math.max(12,24,46,45,67)
min = Math.min(12,24,46,45,67)
Math.abs(-100) //100
console.log(max) // 67
console.log(min) // 12

x = Math.ceil(56.7) //round UP to the nearest whole number
y = Math.floor(56.7) //round DOWN to the nearest whole number

console.log(x) // 57
console.log(y) // 56

console.log(Math.pow(2,4)) // 16

z = Math.sqrt(81)
console.log(z) //9

r = Math.random()
console.log(r) 
//Returns a random number	From 0 (inclusive) to 1 (exclusive) → [0, 1)
// changes everytime

// Want a number between 1 and 100?
let n = Math.floor(Math.random() * 100) + 1; //0 to 100 floor->0 to 99
console.log(n) // 1 to 100

Math.round(4.5) //5 
// decimal part is 0.5 or more → rounds UP
// decimal part is less than 0.5 → rounds DOWN

Math.trunc(4.9) //4 removes the decimal part
Math.trunc(-4.9) //-4

// Math.cbrt(x) returns the cube root of x
Math.cbrt(27) //3  3 × 3 × 3 = 27

Math.floor(Math.random() * 10) + 1; // 1 to 10

Math.random(); // e.g., 0.654872

let radius = 5;
let area = Math.PI * radius * radius;

console.log(area); // Output: 78.53981633974483
