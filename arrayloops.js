let array = [4, 8, 6, 7]
// //for loop
// for(let i =0 ; i < array.length ; i++){
//     console.log(array[i])
// }
//foreach loop 
// array.forEach((element) =>{
//     console.log(element*element)
// })
// console.log(array)

// //Array.from => this method is use to convert a string into an array
// let str = "Kaushal"
// let arr = Array.from(str)
// console.log(arr)
// console.log(typeof array)
// console.log(typeof arr)

// //for...of loop
// console.log("for of loop")
// for(let i of array){
//     console.log(i)
// }

// //for...in loop 
// console.log("for in loop")
// for(let i in array){
//     console.log(array[i])
// }

// // Array.map() method ==>does not change the original array
// console.log("array.map() method is used")
// let a = array.map((value , index, array)=>{
//    console.log(value , index , array)
//    return value + 1//adds every element in the array with 1
// })
// console.log(a)

// // Array filter() method ==>does not change the original array
// let array1 = [23, 67, 82, 22, 0 , 1 , 3 , 16]
// let b = array1.filter((a) =>{
//     return a<10
// })
// console.log(b)

// //reduced method
// let arr3 = [1, 2, 3, 4, 5, 2, 1]
// // let newarr = arr3.reduce((h1,h2) =>{
// //     return h1+h2
// // })
// // console.log(newarr)
// //or
// const refunc = (h1,h2)=>{
//     return h1*h2
// }
// let newarr = arr3.reduce(refunc)
// console.log(newarr)


