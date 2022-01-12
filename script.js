let yourWins = 0
let computerWins = 0
// begin program
while (yourWins < 5 && computerWins < 5) {
    play()
}
if (yourWins > computerWins){
    console.log (`You won the game :)
Your wins: ${yourWins}   Computer wins: ${computerWins}`)
}
else if (yourWins < computerWins){
    console.log (`You  lost the game :(
Your wins: ${yourWins}   Computer wins: ${computerWins}`)
}
//end program

//mashes functions together
function play(){
    evalutateWinner(getUserObject(), computerPlay())
}

 //computer picks an object
 function computerPlay(){
    let objectArray =["rock", "paper", "scissors"]
    let computerObject = objectArray[Math.floor(Math.random()* 3)]
    return computerObject
}
// grabs user input
function getUserObject(){
    let userObject = window.prompt("what fighter would you like?")
    userObject.toLowerCase()
if (userObject === "rock" || userObject === "scissors" || userObject === "paper"){
    return userObject;
}
else if (!userObject) {
    return
}
else getUserObject()
}

// if else conditionals to evaluate the winner
function evalutateWinner(userObject, computerObject) {
    console.log( `you picked ${userObject}, computer picked ${computerObject}`)
    
    if (userObject === computerObject){
        console.log(`you tied, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "scissors" && computerObject === "rock") {
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "rock"  && computerObject === "paper"){
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "paper"  && computerObject === "scissors") {
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "scissors" && computerObject === "paper"){
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "rock" && computerObject === "scissors"){
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userObject === "paper" && computerObject === "rock") {
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
}