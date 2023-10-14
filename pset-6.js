//Question-1
let age = prompt("enter your age")
console.log(typeof age)
age = Number.parseInt(age)
if(age>=18){
    alert("you can drive")
}else{
    alert("you cannot drive")
}

//Question 2
let write = confirm("do you want to see the prompt again")
if(write){
    let age = prompt("enter your age")
console.log(typeof age)
age = Number.parseInt(age)
if(age>=18){
    alert("you can drive")
}
//part of the Question 3
else if(age<0){
    console.error("age cannot be negative")
}
else{
    alert("you cannot drive")
}
}
else{
    console.log("see you next time")
}

//Question 4
let age1 = prompt("enter your age")
console.log(typeof age1)
age1 = Number.parseInt(age1)
if(age1>=18){
    alert("you can drive")
}else if(age1>4){
    location.href = "https://codewithharry.com"
}else{
    alert("you cannot drive")
}

//Question 5
let user = prompt("enter the color for the background")
document.body.style.background = user
