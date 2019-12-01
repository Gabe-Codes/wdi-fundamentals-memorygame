var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var streak = 0;

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    streak += 1;
    cardsInPlay = [];
    document.getElementById("streak").innerHTML = streak;
    alert("You found a match!");
    clearBoard();
  } else {
    streak = 0;
    cardsInPlay = [];
    document.getElementById("streak").innerHTML = streak;
    alert("Sorry, try again.");
    clearBoard();
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', (cards[cardId].cardImage));
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

function clearBoard() {
  for (var i = 0; i < cards.length; i++) {
    var board = document.getElementById('game-board');
    var boardCards = board.getElementsByTagName('img');
    boardCards[i].setAttribute('src', 'images/back.png');
    boardCards[i].setAttribute('data-id', i);
    boardCards[i].addEventListener("click", flipCard);
  }
}

createBoard();
