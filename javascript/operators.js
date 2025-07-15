// +
// -
// *
// /
// %
// **
// ++
// --
// >
// <
// >=
// <=
// ==
// ===
// &&
// ||
// !

// 1.Arithmetic operators
// +
// -
// *
// /
// % //modulus
// **
// ++ //increemtn
// -- //decrement

let a = 10, b = 3
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(2 ** 4); // 16

let x = 5;
x++
console.log(x) //6

x--
console.log(x) //5

// x = 20
// x++ //x = x+1
// console.log(x)

// y = 40
// y-- //y = y-1
// y--
// console.log(y) // 38

console.log(6+7) //Addition

console.log("Raju" +" "+ "G") // concatenation
// console.log("Raju "+"G") Raju G

//coersion in JS
console.log(45 + " raju") //automatically converted to string 45 raju
console.log(45 + "23") //same con to str 4523
console.log(2+3+5+"4"+4+2)//10442
console.log(40-"20") // 20

console.log(40 - "raju") //NaN - not a number something there but not a number


console.log(34-20)
console.log(20/10)
console.log(14%5)


// x = 20
// x++ //x = x+1
// console.log(x) // 21

// y = 40
// y-- //y = y-1
// y--
// console.log(y) // 38

// 1. Addition vs Subtraction
console.log("10" + 2);     // "102" → string + number → string
console.log("10" - 2);     // 8 → string - number → convert to number

//  2. Boolean + Number
console.log(true + 1);     // 2 → true becomes 1
console.log(false + 5);    // 5 → false becomes 0

// 3. null & undefined
console.log(null + 1);     // 1 → null becomes 0
console.log(undefined + 1); // NaN → undefined can’t convert to number

//  4. Mix of everything
console.log(2 + "3" + 4);     // "234" → number + string = string
console.log(2 + 3 + "4");     // "54" → numbers first, then string
console.log("2" - "1");       // 1 → strings become numbers
console.log("2" + "1");       // "21" → just joined as string

//  5. Array to number
console.log([] + 1);          // "1" → [] becomes "" (empty string), then "" + 1 = "1"
console.log([1] + 1);         // "11" → [1] becomes "1", then "1" + 1 = "11"
console.log([1,2] + 3);       // "1,23"

// 6. null, undefined, NaN comparison
console.log(null == undefined);   // true → loose equality 
console.log(null === undefined);  // false → strict equality
console.log(NaN == NaN);          // false → NaN is never equal to itself you know its not a number so that we never with itself
console.log(isNaN("Raju"));       // true → not a number

// 7. Weird but common
console.log("5" - - "2");         // 7 → - - becomes + //JS converts both strings to numbers because - is an arithmetic operator.
console.log("5" + + "2");         // "52" → +2 becomes number, but + with string = string +"2" → unary plus → converts "2" to 2 (number)
console.log(true + true);         // 2 → true = 1
console.log(false == 0);          // true → both treated as 0
console.log(false === 0);         // false → strict check (type also matters)

// ✅ Pro Tips to Remember:
// + with string → everything becomes string
// -, *, / → try to convert to numbers
// true → 1, false → 0, null → 0, undefined → NaN
// NaN == NaN is false
// [] becomes "", {} becomes "[object Object]"


console.log(10!=20) // true

// Surprising Loose Equality Examples (==)

"0" == 0 //true String "0" → number 0
false == 0 //true false → 0
true == 1 // true true → 1
null == undefined //true Special rule — only these two are equal 
// null type - object
// undefined type - undefined
0 = '' //true Empty string → 0
false = '' //true Both become 0
[] == false //true [] → "" → 0, false → 0
[] == '' //true
[] == 0 //true
[1] == 1 //true [1] → "1" → 1
'' == 0 //true
'' == false //true
[] == ![] //true ![]-false-0
{} == {} //false Different object references
NaN == NaN // false NaN is never equal to anything (even itself)

// Examples with Strict Equality (===)
"0" === 0 //false
false === 0 //false
null === undefined // false
[1] === "1" //false
NaN === NaN //false
0 === 0 //true

// Always prefer === unless you are absolutely sure about type coercion
