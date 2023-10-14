//Program to add first n natural number 
//the code given below is compliled in browser as prompt can only be run in browser
let sum = 0 
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for(let i = 1 ; i <= n ; i++){
    sum+=i
}
console.log("the sum of " + n + " natural number is " + sum)




const obj = {
    kaushal : 23,
    viraj : 12,
    daksh : 23
}

//for in loop //it prints the keys of the object
for(let a in obj){
    console.log(a + " obtain marks " + obj[a])
}

//for of loop
for(let a of "obj"){
    console.log(a)
}


//While Loops
let sum1 = 0 
let n1 = 10
let i = 0 
while(i<=10){
    sum1+=i
    i++
}
console.log("the sum of " + n1 + " natural number is " + sum)

//do while loop
let j = 0
do{
    console.log(j)
    j++
}while(j<0)