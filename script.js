// get user InputEvent
function getUserObject(){
    let userObject = window.prompt("what fighter would you like?")
if (userObject == "rock" || userObject == "scissors" || userObject == "paper"){
    return userObject;
}
else getUserObject()
}

// if else conditionals to evaluate the winner
function evalutateWinner() {
    let userObject = getUserObject()
    let computerObject = computerPick()
    console.log( `you picked ${userObject}, computer picked ${computerObject}`)

    if (userObject === computerObject)
    console.log("tie")

    else if (userObject === "scissors" && computerObject === "rock")
    console.log("you lose")

    else if (userObject === "rock"  && computerObject === "paper")
    console.log("you lose")

    else if (userObject === "paper"  && computerObject === "scissors")
    console.log("you lose")

    else if (userObject === "scissors" && computerObject === "paper")
    console.log("you win")

    else if (userObject === "rock" && computerObject === "scissors")
    console.log("you win")

    else if (userObject === "paper" && computerObject === "rock")
    console.log("you win")


}

//computer picks an object
function computerPick(){
    let objectArray =["rock", "paper", "scissors"]
    let computerObject = objectArray[Math.floor(Math.random()* 3)]
    return computerObject
}
