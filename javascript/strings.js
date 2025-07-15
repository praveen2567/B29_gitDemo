// raju's place bangalore // we can use single quotes with outside

// str = 'raju's place bangalore' // not correct syntax already single quote there

// str = "raju's place bangalore" // you can use double quotes or backticks

// str = `raju's place "bangalore"`

//length

// str = "javascript"
// console.log(str.length) //char count

// samething available in arrays also
// count how many elements are there - length

// console.log(str[0])//index 0

// str1 = "Raju"
// str2 = "Praveen"

// str3 = str1.concat(str2) //RajuPraveen

// str3 = str1 + str2 //output same but coercion problem occurrs using +

// console.log(str3)

// str4 = "    Login   "

// console.log(str4.trim()) //remove spaces from begin and end

// recently introduced 
// trimStart() removes only begin
// trimEnd()   removes only end

// str5 = "dfghayqopkfjhsgvcmkfdj"

// console.log(str5.toUpperCase())

//to access particular index instead of this console.log(str[0])

// console.log(str.charAt(0))

// str = "javascript"

// str7 = str.substr(4)
// str7 = str.substr(0,4) 0, 1, 2, 3

// console.log(str7) //script
// console.log(str7) //java

// str = "Raju\nShiva" // \n - cursor will take new line
// console.log(str)
// Raju
// Shiva

// str = "Raju\tShiva" // \t - one tab space
// console.log(str)
// Raju    Shiva -- one tab is 4 spaces

//await page.locator(xpath).fill("Understanding requirements\nWriting test scripts")

// str = "Praveen"

// console.log(str.includes('e')) //true

//Template Literals(ES6)

// str1 = "Bangalore"

// str2 = `Capital city for KA is - ${str1}`

// console.log(str2)

// strings are immutable
// arrays are mutable we can change arr[0] = "raju" or push()

// replace()
// replaceAll()

str = Number ("10") //10

price1 = Number("₹69,999".replace("₹", "").replace(",", "")) //69999 still string convert to Number

price2 = Number("₹79,999".replace("₹", "").replace(",", ""))

total = price1 + price2

console.log(total)