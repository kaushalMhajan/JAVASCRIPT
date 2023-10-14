//Exercise 2 : the snake , water , gun
let i=0
let userwon = 0
let systemwon = 0
let name = prompt("enter your name")
while(i<10){
let ran = Math.floor(Math.random()*3)
let user = prompt("Enter 0 for snake\nEnter 1 for gun\nEnter 2 for water")

user = Number.parseInt(user)
i++
 if(user==0 && ran==2 || user==1 && ran==0 || user==2 && ran==1){
    console.log("you won")
    userwon++
    continue
 }else if(user==ran){
    console.log("draw")
    continue
 }else{
    console.log("computer won")
    systemwon++
    continue
 }
 
}
console.log("the score of " + name + ":" + userwon + " and computer : "+ systemwon)