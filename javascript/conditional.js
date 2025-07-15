// condition true

// if(condition){
//     // block of code
// }

// if(false){ //no output
//     console.log("Praveen")
//     console.log("Raju")
// }

// if(true){ // prints output
//     console.log("Praveen")
//     console.log("Raju")
// }

// if(false){ 
//     console.log("Praveen")
//     console.log("Raju")
// }
// else{
//     console.log("Sairo") //print
// }

// if(4>3){ // if true it executes only raju no other statements executed below
//     console.log("Raju")
// }
// else if("4"===4){
//     console.log("Praveen")

// }
// else if(true){
//     console.log("hello")
// }
// else{
//     console.log("All conditions failed")
// }

// if (3 > 5) {
//   // if in case failed it will go for second statement this passed now it prints only Praveen
//   console.log("Raju");
// } else if ("4" == 4) {
//   console.log("Praveen");
// } else if (true) {
//   console.log("hello");
// } else {
//   console.log("All conditions failed");
// }


// if (3 > 5) {
//   // if in case failed it will go for second statement this passed now it prints only Praveen this is also failing now it go 3rd statement
//   console.log("Raju");
// } else if ("4" === 4) {
//   console.log("Praveen");
// } else if (false) {
//   //now all failed then print else block all conditions failed
//   console.log("hello");
// } else {
//   console.log("All conditions failed");
// }

switch("Praveen"){
    case "Praveen":{
        console.log("Praveen here")
    }
    break
    case "Sairo":{
        console.log("Sairo here")
    }
    break
    case "Gagan":{
        console.log("Gagan here")
    }
    break
    case "Kunal":{
        console.log("Kunal here")
    }
    break
    default:{
        console.log("No case matched")
        //by default its similarly like else
    }
    break
}