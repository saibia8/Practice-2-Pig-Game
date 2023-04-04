"use strict";

// Element selection
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

// Roll the dice
btnRoll.addEventListener("click", function() {
   // 1. Generate random number between 1 and 6
   const diceNumber = Math.trunc(Math.random() * 6) + 1;

   // 2. Display the number on the dice
   diceElement.classList.remove("hidden");
   diceElement.scr = `dice${diceNumber}.png`;

   // 3. If the number is 1, switch to another player
   
});
