// console.log("welcome to pset-1")
// //question 1 : try to add a number to the string
// let a = "kaushal" + 8;
// console.log(a)

// //question 2 : use of typeof operator to find its datatype
// console.log(typeof a)

// //question 4
// const a1 = {
//     name : "kaushal",
//     rollno : 234
// }
// a1["friend"] = "kirtesh"//new key friend is added to the constant a1.
// console.log(a1)

// //question 5 : crete a word meaning dictionary of 5 words
// const word = {
//     "patang" : "kite",
//     "oil" : "use to fry",
//     789 : "number",
//     "$$" : "symbol",
//     "hey" : "hello"
// }
// //given below are the ways to print the key walue from the const object
// console.log(word["hey"])
// console.log(word.hey)

// let age = prompt("enter the age");
// age = parseInt(age)
// console.log(typeof age)
// if(age>10 && age<20){
//     console.log("the number lies between the 10 and 20")
// }else{
//     console.log("does not lies between 10 and 20")
// }

const odds = (n) =>{
    if(n%2!=0){
        console.log(n  + " is odd number")
    }else{
        console.log(n + " is even")
    }
}

odds(110)