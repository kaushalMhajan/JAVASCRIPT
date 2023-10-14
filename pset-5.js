//Question 1 
let arr = []
let a = prompt("enter the number to add in the array")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Question 2
let arr1 = []
let b;
do{
    b = prompt("enter the number")
    b = Number.parseInt(b)
    arr1.push(b)
}while(b!=0)
console.log(arr1)



//Question 3
let arr2 = [10, 12, 15, 20, 2, 100]
let ne = arr2.filter((a)=>{
    return a%10==0
})
console.log(ne)

//Question 4
let mp = arr2.map((value)=>{
    return value*value
})
console.log(mp)

// //Question : => using reduce to find factorial of a given number
// let arr3 = [1, 2, 3, 4, 5, 6]
// let f = arr3.reduce((e1,e2)=>{
//     return e1*e2
// })
// console.log("the factorial of six number is " + f)
