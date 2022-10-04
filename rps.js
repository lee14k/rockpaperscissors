const computerChoiceDisplay=document.getElementById('computerchoice');
const userChoiceDisplay=document.getElementById('userchoice');
const resultDisplay=document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
const score = document.getElementById ('score')

let userChoice
let computerChoice
let result

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
        } if (computerChoice==="scissors" && userChoice==="paper"){
            result = "you lose, scissors beats paper"
        } if (computerChoice==="paper"&& userChoice==="rock"){
            result = "you lose, paper beats rock";
        } if (computerChoice==="paper"&& userChoice==="scissors"){
            result =  "you win, scissors beats paper";
        } if (computerChoice==="rock"&& userChoice==="paper"){
            result = "you win, paper beats rock";
        } if (computerChoice==="scissors"&& userChoice==="rock"){
            result = "you win, rock beats scissors";
}
    resultDisplay.innerHTML = result
}