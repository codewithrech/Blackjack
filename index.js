let firstCard=10;
let secondCard=5;
let hasBlackjack=false;
let isAlive=true;
let message="";
let sum=firstCard+secondCard;
console.log(sum);
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
function startGame(){
if(sum<21){
    message=("play again😁");
} else if(sum===21){
    message=("Winner👍");
    hasBlackjack=true;
}else{
    message=("Game over🤣");
    isAlive=false;
      }
      messageEl.textContent=message;
      sumEl.innerHTML+=sum;
      //cardsEl.innerHTML+=`${firstCard}   ${secondCard}`
      cardsEl.innerHTML+=firstCard + " "+ secondCard;
console.log(message);
}