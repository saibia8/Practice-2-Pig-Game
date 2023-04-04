"use strict";

// Element selection
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let totalScores, currentScore, activePlayer, isPlaying;

// Game initial conditions
const startNewGame = function () {
   totalScores = [0, 0];
   isPlaying = true;
   currentScore = 0;
   activePlayer = 0;
   
   score0Element.textContent = 0;
   score1Element.textContent = 0;
   current0Element.textContent = 0;
   current1Element.textContent = 0;
   player0Element.classList.remove("player--winner");
   player1Element.classList.remove("player--winner");
   player0Element.classList.remove("player--active");
   player1Element.classList.remove("player--active");
   player0Element.classList.add("player--active");
   diceElement.classList.add("hidden");
};

startNewGame();

// Switch active player
const switchActicePlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

// Roll the dice
btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    // 1. Generate random number between 1 and 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    // 2. Display the number on the dice
    diceElement.classList.remove("hidden");
    diceElement.src = `img/dice-${diceNumber}.png`;

    // 3. If the number is 1, switch to another player, if not add that number to the current points
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActicePlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    // 1. Add current score to active players total score
    totalScores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    // 2. If total score of active player is >= 100, active player wins. If not then switch the player
    if (totalScores[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--active");
      diceElement.classList.add("hidden");
    } else {
      switchActicePlayer();
    }
  }
});

btnNew.addEventListener("click", startNewGame);
