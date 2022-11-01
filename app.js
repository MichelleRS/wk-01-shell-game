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
let wins = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    // increment total on button click
    total++;
    // reset shells when button is clicked
    resetShells();
    // generate a random location for the ball (number between 1 and 3)
    const ballLocation = Math.ceil(Math.random() * 3);
    //  add .reveal to img that lines up with random location (if..else)
    if (ballLocation === 1) {
        wins++;
        shell1.classList.add('reveal');
    } else if (ballLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    displayResults();
});

button2.addEventListener('click', () => {
    // increment total on button click
    total++;
    // reset shells when button is clicked
    resetShells();
    // generate a random location for the ball (number between 1 and 3)
    const ballLocation = Math.ceil(Math.random() * 3);
    //  add .reveal to img that lines up with random location (if..else)
    if (ballLocation === 2) {
        wins++;
        shell2.classList.add('reveal');
    } else if (ballLocation === 1) {
        shell1.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    displayResults();
});

button3.addEventListener('click', () => {
    // increment total on button click
    total++;
    // reset shells when button is clicked
    resetShells();
    // generate a random location for the ball (number between 1 and 3)
    const ballLocation = Math.ceil(Math.random() * 3);
    //  add .reveal to img that lines up with random location (if..else)
    if (ballLocation === 3) {
        wins++;
        shell3.classList.add('reveal');
    } else if (ballLocation === 1) {
        shell1.classList.add('reveal');
    } else {
        shell2.classList.add('reveal');
    }
    displayResults();
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

    const correctBallLocation = document.getElementById(`${correctAnswer}-container`);
    correctBallLocation.classList.add('reveal');

    if (userGuess === correctAnswer) {
        wins++;
    }
    displayResults();
}

// (don't forget to call any display functions you want to run on page load!)
