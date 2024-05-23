const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png' 
    },
    {
        name: 'hamburger',
        img: 'images/hamburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png' 
    },
    {
        name: 'pizza',
        img: 'images/hambpizzaurger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png' 
    },
    {
        name: 'hamburger',
        img: 'images/hamburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png' 
    },
    {
        name: 'pizza',
        img: 'images/hambpizzaurger.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // shuffle the array
console.log(cardArray)