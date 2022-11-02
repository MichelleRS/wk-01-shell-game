/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

// results
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
const hidingPlaces = ['shell-1', 'shell-2', 'shell-3'];

let wins = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    const ballLocation = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[ballLocation];
    handleGuess(answer, 'shell-1');
});

button2.addEventListener('click', () => {
    const ballLocation = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[ballLocation];
    handleGuess(answer, 'shell-2');
});

button3.addEventListener('click', () => {
    const ballLocation = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[ballLocation];
    handleGuess(answer, 'shell-3');
});

function resetShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}

/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

function handleGuess(correctAnswer, userGuess) {
    // move shells to start position
    resetShells();
    // increment total guesses
    total++;

    const correctBallLocation = document.getElementById(`${correctAnswer}`);
    correctBallLocation.classList.add('reveal');

    if (userGuess === correctAnswer) {
        wins++;
    }
    displayResults();
}

// (don't forget to call any display functions you want to run on page load!)
