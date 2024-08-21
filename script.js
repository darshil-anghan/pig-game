'use strict';

// selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const current0El = document.querySelector('#current--0');
// const current1El = document.querySelector('#current--1');
// s;
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayers = function () {
//   document.querySelector(`#current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   currentScore = 0;
//   player0El.classList.toggle('player--active'); // both
//   player1El.classList.toggle('player--active'); // both
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating random number
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     // 3. Check for rolled 1:if true, switch to next player
//     if (dice !== 1) {
//       //add dice to current score
//       currentScore += dice;
//       document.querySelector(`#current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayers();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     document.querySelector(`#current--${activePlayer}`).textContent = 0;
//     // switchPlayers();

//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--active');
//       element.removeEventListener('click', 'btn--roll');
//     } else {
//       switchPlayers();
//     }
//   }
// });

// btnNew.addEventListener('click', function () {
//   init();
// });

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  // switch to next player

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    // scores[1] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] > 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      player0El.classList.add('player--active');
      player1El.classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player1El.classList.remove('player--active');
  activePlayer = 0;
});
