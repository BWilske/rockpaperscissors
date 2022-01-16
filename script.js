let yourWins = 0
let computerWins = 0

// evaluate the winner, I feel dumb as shit because there has to be an easier way of doing this, maybe objects when i learn those
function evalutateWinner(userSelection) {
    //computer picks an object
    let objectArray =["rock", "paper", "scissors"]
    let computerObject = objectArray[Math.floor(Math.random()* 3)]
    
    console.log( `you picked ${userSelection}, computer picked ${computerObject}`)
    
    if (userSelection === computerObject){
        console.log(`you tied, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "scissors" && computerObject === "rock") {
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "rock"  && computerObject === "paper"){
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "paper"  && computerObject === "scissors") {
        computerWins+=1
        console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "scissors" && computerObject === "paper"){
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "rock" && computerObject === "scissors"){
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
    else if (userSelection === "paper" && computerObject === "rock") {
        yourWins+=1
        console.log(`you win, Your wins: ${yourWins}   Computer wins: ${computerWins}`) 
    }
}

//event listens for buttons and such

let rockEl = document.getElementById("rockbutton").addEventListener("click", () => evalutateWinner("rock"))
let paperEl= document.getElementById("paperbutton").addEventListener("click", () => evalutateWinner("paper"))
let scissorsEl= document.getElementById("scissorsbutton").addEventListener("click", () => evalutateWinner("scissors"))