





function gameOver (playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5)
    return "game over!"
}

/*function playRound (playerSelection, computerChoice) {
    if (computerChoice==="rock" && playerSelection==="scissors") {
        computerScore +1;
        return console.log ("you lose, rock beats scissors");
    } if (computerChoice==="scissors" && playerSelection==="paper"){
        computerScore +1;
        return ("you lose, scissors beats paper");
    } if (computerChoice==="paper"&&playerSelection==="rock"){
        computerScore +1;
        return ("you lose, paper beats rock");
    } if (computerChoice==="paper"&&playerSelection==="scissors"){
        playerScore +1;
        return ("you win, scissors beats paper");
    } if (computerChoice==="rock"&&playerSelection==="paper"){
        playerScore +1;
        return ("you win, paper beats rock");
    } if (computerChoice==="scissors"&&playerSelection==="rock"){
        playerScore +1;
        return ("you win, rock beats scissors");
    }else {
        draw +1;
        console.log (`a tie! current scores are ${playerScore} and ${computerScore}`);
        //return playRound();
    }
    }*/
   


/*function game (playerScore, computerScore){
    for (let i = 0; i < 5; i++) {
        playRound (playerSelection, computerChoice)
    if (playerScore === 5 ) {
        return "you win!"
    } if (computerScore === 5){
        return "you lost!"
    
}}} */


const computerChoiceDisplay=document.getElementById('computerchoice');
const userChoiceDisplay=document.getElementById('userchoice');
const resultDisplay=document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
const userScoreDisplay = document.getElementById ('userscore')
const computerScoreDisplay = document.getElementById ('computerscore')
const winnerDisplay = document.getElementById('winner')

let userChoice
let computerChoice
let winner=''
let userScore=0;
let computerScore=0;
let draw=0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener ('click', (e) => {
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResults ()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3) + 1 

    if (randomNumber === 1) {
        computerChoice= 'rock'
    } if (randomNumber ===2) {
        computerChoice = 'scissors'
    } if (randomNumber===3) {
        computerChoice='paper'
    }
    
    computerChoiceDisplay.innerHTML=computerChoice;

}

function getResults () {
    if (computerChoice === userChoice) {
        result = 'a draw'}
        if (computerChoice==="rock" && userChoice==="scissors") {
            result = "you lose, rock beats scissors";
            computerScore=computerScore +1;
        } if (computerChoice==="scissors" && userChoice==="paper"){
            result = "you lose, scissors beats paper"
            computerScore=computerScore +1;
        } if (computerChoice==="paper"&& userChoice==="rock"){
            result = "you lose, paper beats rock";
            computerScore= computerScore +1;
        } if (computerChoice==="paper"&& userChoice==="scissors"){
            result =  "you win, scissors beats paper";
            userScore = userScore +1;
        } if (computerChoice==="rock"&& userChoice==="paper"){
            result = "you win, paper beats rock";
            userScore = userScore +1;
        } if (computerChoice==="scissors"&& userChoice==="rock"){
            result = "you win, rock beats scissors";
            userScore = userScore +1;
}if (computerScore ===5){
    endGame()
    winner="computer won!"
}
if (userScore===5) {
endGame()
winner="you won!"
}    

    resultDisplay.innerHTML = result
    userScoreDisplay.innerHTML=userScore
    computerScoreDisplay.innerHTML=computerScore
    winnerDisplay.innerHTML=winner
}

function endGame () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    




}

