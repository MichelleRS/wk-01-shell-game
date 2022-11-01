# Week 01: Shell Game

## Expected Layout

![wireframe of shell game](./assets/expected-layout.png)

### HTML

`main`

-   `h1`

`> section.shells > .shell`:

-   `img#shell-1` + `.ball` + `button#button-1`

-   `img#shell-2` + `.ball` + `button#button-2`

-   `img#shell-3` + `.ball` + `button#button-3`

`^ section.stats`:

-   `divs` with `spans` for `#wins`, `#losses`, `#total`

### State

-   wins
-   total
-   losses (derived state - calculated from wins and total)

### Events

-   button clicks (user guess)
    -   increment total
    -   generate a random location for the ball (number between 1 and 3)
    -   take that location and add `.reveal` class to `img`
        -   If lines up with user guess, increment the wins
    -   remove `.reveal` on all shells to reset the game

## Workflow

-   [x] Build HTML for shell section
-   [x] Start style and get DOM elements for button1 and images
-   [x] Start event listener for button1 with random location for ball
-   [x] Add style to shell section elements
-   [x] Create reset function
-   [x] Build HTML for stats section
-   [x] Get DOM elements for stats and initialize elements for state
-   [x] Increment total and wins and display results for user
-   [x] DOM elements and create event listener for button2
-   [x] Get DOM elements and create event listener for button3

### Refactoring

-   [x] Build `handleGuess()` function at end of code
-   [x] Refactor eventListeners and get correct ball location in `handleGuess()`

## Rubric Tasks and Point Values

### Code Quality / Grading Requirements

-   [x] Open PR from dev to main with your changes 0.5
-   [x] Preview deploy from Netlify showing on your PR 0.5
-   [x] Clear commit history 1
-   [x] Good naming conventions and code is easy to read 1
-   [x] Effective use of CSS and semantic HTML 2

### Code Requirements

-   [x] On clicking a hiding place button, the total number of guesses increment 2
-   [x] On clicking the correct shell button, the total number of correct guesses increment 2
-   [x] On clicking the incorrect shell button, the number of incorrect guesses increments 2
-   [x] On click, see the ball revealed, clearing out the previous correct guess style 3
-   [x] `displayResults` function for displaying the updated state 3
-   [x] `reset` function for resetting the styles that display the correct location

## Attributions

Clker-Free-Vector-Images. [_Purple Seashell._](https://pixabay.com/vectors/seashell-clam-fan-purple-306124/). Pixabay.
