// Exercise 1: Guess the Number 
// let number = 0 //Generate the random nuber here 
// let chances = 0
//keep asking for the number untill the correct number is guessed 
//Increment the chances variable

//Eventually after the game is over , display the (100- Number of chances) and the actual number 

//SOLUTION
let ran = Math.floor(Math.random() * 50) + 1
let chances = 0
let user;
let score = 100
let b = false
while(!b){
    user = prompt("guess the number b/w 0 to 50")
    user = Number.parseInt(user)
    chances++
    score--
    if(user==ran){        
        console.log("you guess the correct number in " + chances + " attempts.\nyour score is : " + score + "/100\nthe actual number is : " + ran)
        break
    }
    else if(user>=ran){
        console.log("enter the smaller number")
        continue
    }
    else if(user<=ran){
        console.log("enter the bigger number")
        continue
    }
    else{
        console.log("invalid input")
        break
    }
}
