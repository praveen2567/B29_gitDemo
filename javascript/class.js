// Automation testing life cycle
// n-1 approach
// shift left approach
// Manual test cases
// Total 35 test cases you are not going to automate all test cases just we pick very important ones
// major that will take for automation
// 7 Automation test cases main things only automate then we confirm 35 test cases are worked
// what happen if you automate everything you are automation test cases will become huge number
// which is not correct increases script size maintenance effort
// Some have CAPTCHA, OTP — can’t automate
// Some are one-time — waste of time to automate
// Sanity/Smoke – needed for every build
// Login – always needed


//how will you choose the automation test cases
// out of 35 test cases we are dedide which can be automated which cant be automated
// some tests cant be automated
// Login/signup
// API Test	
// Reports/Download
// UI changing every time ❌ No
// CAPTCHA / OTP / file uploads ❌ No Can’t automate, handled manually
// UI alignments check ❌ No	Visual testing needed
// Notifications test ❌ No	Depends on 3rd party
// Edge cases / popup ❌ No	Not repeatable

// “I don’t automate everything. I choose test cases based on priority, stability, and repeatability.”

// 🔍 Criteria	                    ✅ Automate?🤝 Why?             Example
// High priority (critical flow)	✅ Yes	            Like Login, Signup – used daily
// Repeated often (regression)	    ✅ Yes	            Smoke/sanity checks every release
// Stable UI	                    ✅ Yes	            No frequent UI changes (e.g., dashboard)
// API tests	                    ✅ Yes	            Fast and reliable


// class
// constructor
// methods
// static 
// this

// you know functions right

// function add(){
//     // block of code
// }

// function sub(){
//     // block of code
// }

// // class - is a collection of functions

// class Calculator{
//     x = 20
//     y = 30
//     add(){ // here we can say methods
//     // block of code
// }

//     sub(){
//     // block of code
// }
// }


// syntax

// class className{

//     // Variables
//     // Methods
// }

// const obj1 = new calculator() // create object of the particular class
// obj1 - object name
class calculator{
    x = 20
    y = 30

    add(num1,num2){
        console.log(num1 + num2)
    }
    sub(num1,num2){
        console.log(num1 - num2)
    }
    mul(num1,num2){
        console.log(num1 * num2)
    }
    div(num1,num2){
        console.log(num1 / num2)
    }
}

// To access
// you need to create object of this class or instance of the class

const cal1 = new calculator() //new is a keyword to create object of that particular class
cal1.add(5,5) //10
cal1.sub(10,2) //8
console.log(cal1.x) //20
console.log(cal1.y) //30

// how this is useful for us in automation like login credentionals write one time
//  we can acess in multiple modules just we call method create that variable
// import first create that particular object then we access methods means reusability means
// we can create n number of objects to the class
// all this where we use in automation is POM(page object model)

const cal2 = new calculator()
cal2.add() // NaN why we expect two parameters/args but undefined + undefined = NaN
cal2.add(3,8) //11


class employee{
    username = "Raju"
    password = "G"
    raju(){
        console.log("Raju")
        console.log(this.password) // this is not only for methods variables also
        //why this keyword used any variable or method to call another method or we have to access variable or method inside the same method
        // that time you used this keyword
        // this can be used to access variable and method inside the same class we used
    }
    printMessage(){
        this.raju()
        console.log("This is a simple method")
    }
    constructor(username,password){
        console.log(username,password)
    }
    createEmployee(){
        this.printMessage() // i want to call here use this.method 
        console.log("Create Employee logic here");
        
    }
}

const emp1 = new employee("Praveen", "Sairo")
// emp1.printMessage() 
emp1.createEmployee() //first constrcutor called
emp1.raju()


// const emp1 = new employee() This is a simple method - this time i am not going to call any method by default constructor
// is executed
// const emp1 = new employee() again call print This is a simple method

// const emp2 = new employee("Admin","admin123") // constructor will call after object is created
// const emp2 = new employee() //undefined undefined 
// this is imp in automation we are going to create POM we create constructor and pass argument
//constructor is a method but  
// we dont call that method , after you create object of that class
// automatically constructor will be called
// here suppose i dont have any constructor empty constructor will be there by default
// constrcutor is a method but it requires data how to pass data

// memory eating can be more if you create object like this
// const obj1 = new A() 20 KB
// if you create like this n number of objects your memory utilization will be increased
// i want to avoid this yes you can

class student{
    static x = "Abc" //static variables - which are created static keyword
     y = "xyz" //non static variable
   static m1(){ //static method
        console.log("This Method is M1")
    }
    m2(){ // non static method
        console.log("This Method is M2")
    }
   static m3(){
        console.log("This Method is M3")
    }
   static m4(){
        console.log("This Method is M4")
    }
}
// no need to create object to access variables because of static
//static - used to reduce memory consumption you will not create object it occupies some special memory location
// one place even if you are accessing for thousands places pointing to the same memory location memory consumpton is reduced
const stu1 = new student()
student.m1()
student.m2()

// when i have static keyword create object now can i access the static variables and methods is not possible
const stu = new student()
stu.m2() //This Method is M2
student.m1()
// this is importance of static keyword
// in another file no accessed possible only from the man import the class then call method in your file 
// with respect to scope tight then its global scope

// OOPs - supported by JS
// 1. Encapsulation
class ABC{
    M1
    M2
    M3
}
// M2 is dependent on m1 that is encapsulation if you have proper results of m2 you call m1 first
const abc1 = new ABC()
// 2. Inheritance
class A{
    10 methods
}
class B{
    10 methods diff
}
const obj = new B() //access only 10 methods because there is no relation bet A and B
// but we give realtion b make it child and A make it parent
// through the child you can access the parent class also that is called inheritance we use extends keyword now we access both A and B
// this is Multi-level inheritance
// multiple inheritance not allowed
// single inheritance allowed
//  Hierarchical Inheritance (Allowed via classes) - One parent, many children
// Prototypal Inheritance
// 3. Polymorphism
// 1.Methodoverloading
// 2.Methodoverrding
// 4. Prototyping
// prototype variable prototype method