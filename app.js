/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
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
    // reset shells when button is clicked
    resetShells();
    // generate a random location for the ball (number between 1 and 3)
    const ballLocation = Math.ceil(Math.random() * 3);
    //  add .reveal to img that lines up with random location (if..else)
    if (ballLocation === 1) {
        shell1.classList.add('reveal');
    } else if (ballLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
});

function resetShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
