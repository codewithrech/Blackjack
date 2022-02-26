let firstCard=10;
let secondCard=5;
let cards=[firstCard,secondCard]
let hasBlackjack=false;
let isAlive=true;
let message="";
let sum=firstCard+secondCard;
console.log(sum);
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
function startGame(){

    renderGame();
}
function renderGame(){
if(sum<21){
    message=("play again😁");
} else if(sum===21){
    message=("Winner👍");
    hasBlackjack=true;
}else{
    message=("Game over🤣");
    isAlive=false;
      }
      messageEl.innerHTML=message;
      sumEl.innerHTML="Sum:"+sum;
      //cardsEl.innerHTML+=`${firstCard}   ${secondCard}`
      cardsEl.innerHTML= "cards:"+ cards[0]+ " "+ cards[1];
}
function newCard(){
    console.log("Drawing a new card from the deck");
    let card=6;
    sum +=card;
    renderGame();
}
