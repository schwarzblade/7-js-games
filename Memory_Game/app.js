document.addEventListener("DOMContentLoaded", () => {
	

	//card option
	const cardArray = [
		{
			name: 'fries',
			img:'img/fries.png'
		},
		{
			name: 'fries',
			img:'img/fries.png'
		},
		{
			name: 'cheeseburger',
			img:'img/cheeseburger.png'
		},
		{
			name: 'cheeseburger',
			img:'img/cheeseburger.png'
		},
		{
			name: 'hotdog',
			img:'img/hotdog.png'
		},
		{
			name: 'hotdog',
			img:'img/hotdog.png'
		},
		{
			name: 'ice-cream',
			img:'img/ice-cream.png'
		},
		{
			name: 'ice-cream',
			img:'img/ice-cream.png'
		},
		{
			name: 'milkshake',
			img:'img/milkshake.png'
		},
		{
			name: 'milkshake',
			img:'img/milkshake.png'
		},
		{
			name: 'pizza',
			img:'img/pizza.png'
		},
		{
			name: 'pizza',
			img:'img/pizza.png'
		}
	]



cardArray.sort( () => 0.5 - Math.random())



const result = document.querySelector('#result')
const grid = document.querySelector('.grid')
cardsChosen = []
cardsChosenId = []
cardsWon = []

//create board

function createBoard(){
	for(let i = 0; i < cardArray.length; i++){
		var card = document.createElement('img')
		card.setAttribute('src','img/blank.png')
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

function flipCard(){
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src',cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500)
	}
}


function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	if(cardsChosen[0] === cardsChosen[1]){
		alert("found a match!!!")
		cards[optionOneId].setAttribute('src','img/white.png')
		cards[optionTwoId].setAttribute('src','img/white.png')
		cardsWon.push(cardsChosen)
	} else {
		cards[optionOneId].setAttribute('src','img/blank.png')
		cards[optionTwoId].setAttribute('src','img/blank.png')
		alert("sry try again")
	}


	cardsChosen = []
	cardsChosenId = []

	result.textContent = cardsWon.length
	
	if(cardsWon.length === cardArray.length/2) {
		result.textContent = 'Congrats you found them all!'
	}
	
}

createBoard()
})