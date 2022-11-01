/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

/* State */

/* Events */
button1.addEventListener('click', () => {
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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
