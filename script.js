let yourWins = 0
let compWins = 0

// evaluate the winner, I feel dumb as shit because there has to be an easier way of doing this, maybe objects when i learn those
function evalutateWinner(userSelection) {
    //computer picks an object
    let objectArray =["rock", "paper", "scissors"]
    let computerObject = objectArray[Math.floor(Math.random()* 3)]
    
    console.log( `you picked ${userSelection}, computer picked ${computerObject}`)
    
    if (userSelection === computerObject){
        tie() 
    }
    else if (userSelection === "scissors" && computerObject === "rock") {
        computerWins() 
    }
    else if (userSelection === "rock"  && computerObject === "paper"){
        computerWins() 
    }
    else if (userSelection === "paper"  && computerObject === "scissors") {
        computerWins() 
    }
    else if (userSelection === "scissors" && computerObject === "paper"){
        playerWins() 
    }
    else if (userSelection === "rock" && computerObject === "scissors"){
        playerWins() 
    }
    else if (userSelection === "paper" && computerObject === "rock") {
       playerWins() 
    }
}

//helper functions

const playerWins = () => {
    yourWins+=1
    yourScoreEl.innerHTML =`<h5>${yourWins}</h5>`
    winOrLoseEl.innerHTML ="<h3>YOU WIN<H3>"
    console.log(`you win, Your wins: ${yourWins}   Computer wins: ${compWins}`)
}

const computerWins = () => {
    compWins+=1
    compScoreEl.innerHTML = `<h5>${compWins}</h5>`
    winOrLoseEl.innerHTML ="<h3>YOU LOSE<H3>"
    console.log(`you lose, Your wins: ${yourWins}   Computer wins: ${compWins}`)
}
const tie = () => {
    console.log(`you tied, Your wins: ${yourWins}   Computer wins: ${compWins}`)
    winOrLoseEl.innerHTML ="<h3>TIE<H3>"

}

//event listens for buttons and such

let rockEl = document.getElementById("rockbutton").addEventListener("click", () => evalutateWinner("rock"))
let paperEl= document.getElementById("paperbutton").addEventListener("click", () => evalutateWinner("paper"))
let scissorsEl= document.getElementById("scissorsbutton").addEventListener("click", () => evalutateWinner("scissors"))
let yourScoreEl = document.getElementById("yourscore")
let compScoreEl = document.getElementById("compscore")
let winOrLoseEl = document.getElementById("winorlost")
