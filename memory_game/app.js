const cardArray = [
    {
        name: 'fries',
        img: 'images/fries' 
    },
    {
        name: 'hamburger',
        img: 'images/hamburger'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake'
    },
    {
        name: 'pizza',
        img: 'images/pizza'
    },
    {
        name: 'fries',
        img: 'images/fries' 
    },
    {
        name: 'hamburger',
        img: 'images/hamburger'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake' 
    },
    {
        name: 'pizza',
        img: 'images/pizza'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // shuffle the array

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank')
        cards[optionTwoId].setAttribute('src', 'images/blank')
        alert('You have clicked the same image!')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white')
        cards[optionTwoId].setAttribute('src', 'images/white')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank')
        cards[optionTwoId].setAttribute('src', 'images/blank')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenId = []

    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.innerHTML = 'Congratulations, you found them all!'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}