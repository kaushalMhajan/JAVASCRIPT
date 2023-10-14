/*//Question 1
const obj = {
    harry : 98,
    rohan : 70,
    aakash : 7
}
for(let i=0;i<Object.keys(obj).length;i++){
    console.log("the marks obtained by " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
}

//Question 2
for(let key in obj){
    console.log("the marks obtained by " + key + " is " + obj[key])
}

//Question 3
let num = 10
let ui
while(ui!=num){
     ui = prompt("enter the number")
}
alert("the number is right")*/

//Question 4
const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}

console.log("the mean is " + mean(2,3,4,5,6))  