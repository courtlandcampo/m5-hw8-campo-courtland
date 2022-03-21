// Create an Array of at least 3 losing messages
let losingMessage = ["That ain't it! But you should try again.", "Nope, not that one.", "Try again"];
console.log(losingMessage);

// Create variables to count wins and losses
let winScore = 0;
let loseScore = 0;
console.log("Your win score:", winScore);
console.log("Your lose score:", loseScore);

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
let message = document.getElementById("message");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
console.log(message);
console.log(wins);
console.log(losses);

// target all .box elements and attach a click event listener to each one using a loop

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses