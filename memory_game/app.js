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

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()