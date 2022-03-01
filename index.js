
let cards=[];
let sum=0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

console.log(sum);
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}
function getRandomCard() {
    let randcard = Math.floor(Math.random() * 13) + 1;
    if (randcard === 1) {
        return 11;
    }
    else if (randcard > 10) {
        return 10;
    }
    else {
        return randcard;
    }

}
function renderGame() {

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";
    }


    if (sum < 21) {
        message = ("play again😁");
    } else if (sum === 21) {
        message = ("Winner👍");
        hasBlackjack = true;
    } else {
        message = ("Game over🤣");
        isAlive = false;
    }
    messageEl.innerHTML = message;
    sumEl.innerHTML = "Sum:" + sum;
    //cardsEl.innerHTML+=`${firstCard}   ${secondCard}`
   // cardsEl.innerHTML = "cards:" + cards[i]
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}

