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

## Current Workflow

-   Build HTML for shell section

## Rubric Tasks and Point Values

### Code Quality / Grading Requirements

-   Open PR from dev to main with your changes 0.5
-   Preview deploy from Netlify showing on your PR 0.5
-   Clear commit history 1
-   Good naming conventions and code is easy to read 1
-   Effective use of CSS and semantic HTML 2

### Code Requirements

-   On clicking a hiding place button, the total number of guesses increment 2
-   On clicking the correct shell button, the total number of correct guesses increment 2
-   On clicking the incorrect shell button, the number of incorrect guesses increments 2
-   On click, see the ball revealed, clearing out the previous correct guess style 3
-   `displayResults` function for displaying the updated state 3
-   `reset` function for resetting the styles that display the correct location
