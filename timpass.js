let num1 = [100, 6, 60, 7, 10, 8]
let b = num1.sort(compare =(a,b)=>{
    return a-b;
})
console.log("the sorted array is " + b)
console.log(typeof b)
let c = num1.reverse()
console.log(c)
console.log(num1.sort())