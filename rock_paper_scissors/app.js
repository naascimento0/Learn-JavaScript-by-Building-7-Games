const computerChoiceDisplay = document.getElementById('computer-choice') // select the span element
const userChoiceDisplay = document.getElementById('user-choice')  // select the span element
const resultDisplay = document.getElementById('result')  // select the span element
const possibleChoices = document.querySelectorAll('button')  // select all buttons in the page

let userChoice  // stores the user choice
let computerChoice
let result

// iterate over each selected button in possibleChoices
// add a event through each button click
// e.target.id gets the id of the clicked button
// userChoice receives the id
// innerHTML refreshes the HTML element content userChoiceDisplay
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if(randomNumber === 1)
        computerChoice = 'rock'
    else if(randomNumber === 2)
        computerChoice = 'scissors'
    else if(randomNumber === 3)
        computerChoice = 'paper'  

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice)
        result = 'Its a draw!'
    if(computerChoice === 'rock' && userChoice === 'paper')
        result = 'You win!'
    if(computerChoice === 'rock' && userChoice === 'scissors')
        result = 'You lost!'
    if(computerChoice === 'scissors' && userChoice === 'paper')
        result = 'You lost!'
    if(computerChoice === 'scissors' && userChoice === 'rock')
        result = 'You win!'
    if(computerChoice === 'paper' && userChoice === 'rock')
        result = 'You lost!'
    if(computerChoice === 'paper' && userChoice === 'scissors')
        result = 'You win!'

    resultDisplay.innerHTML = result
}