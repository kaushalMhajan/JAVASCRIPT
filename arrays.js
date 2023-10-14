// //arrays
// let marks12 = [99, 72, 93, 84, null, false, "Not present"]
// console.log(marks12[0])
// console.log(marks12[1])
// console.log(marks12[2])
// console.log(marks12[3])
// console.log(marks12[4])
// console.log(marks12[5])
// console.log(marks12[6])
// console.log(marks12[7])//this prints undefined because index 7 does not exist
// marks12[7] = 56//adding the value to the array
// marks12[0] = 98//changing the value of the array
// console.log("the length of the array is " + marks12.length)
// console.log(marks12)
// console.log(typeof marks12)
// //using for loop to print an element present in the array
// for(let i=0;i<marks12.length;i++){
//     console.log(marks12[i])
// }

// // Arrays methods
// let num = [1, 2, 3, 34, 45, 44, 12]
// let b = num.toString()//converts an array to the string 
// console.log(b)
// let c = num.join('_')//joins all the elemnts using ('_')
// console.log(c)

// let d = num.pop()//removes the last element from an array
// // console.log(d)
// console.log(num)

// let d1 = num.shift()//removes the first element from an array
// // console.log(d1)
// console.log(num)


// let e = num.push(9)//pushes the element in the array at last position
// // console.log(e)//returns the new length of the array
// console.log(num)

// let e1 = num.unshift(9)//pushes the element in the array at first position
// // console.log(e1)//returns the new length of the array
// console.log(num)

// delete num[3]//use to delete an element fronm an array
// console.log(num)

// let num1 = [5, 6, 7]
// let num2 = [8, 10, 9]

// let g = num.concat(num1,num2)//num1 and num2 get added to num
// console.log(g)

// //sort method
// let compare = (a,b)=>{
//     return a-b
// }
// num.sort(compare)//it modifies the original array
// num.reverse()
// console.log(num)



//Splice and Slice Methods

//splice 
let a = [1, 2, 3, 5, 45, 98, 100,1000]
let deletedvalues = a.splice(2, 4, 1021, 1022, 1023)//splice method modifies the source array
console.log(a)
console.log(deletedvalues)//returns deleted values

//slice 
let newarray = a.slice(1,5)//slice method does not modifies the source array
console.log(newarray)
