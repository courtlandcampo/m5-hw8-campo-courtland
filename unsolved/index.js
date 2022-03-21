// Create an Array of at least 3 losing messages
let losingMessage = ["Bummer, you lost!", "You Lose.", "Try again, because you lost!"];
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
var box = document.querySelectorAll('.box');
for (var i = 0; i < box.length; i++) {
  box[i].onclick = clickedBox
}

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
function clickedBox(event) {
   clickedBox.textContent = event.target.textContent;
   var numberOfBoxClicked = Number(event.target.textContent);
   console.log(event.target)

  // create a random number between 1-3 and store it to a variable
  // This number will represent the winning box
  var randomNumberWinner = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumberWinner);

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

if (numberOfBoxClicked === randomNumberWinner) {
  console.log("You won!");
  message.textContent = "You won!";
  winScore += 1;
  wins.textContent = "Wins:" + winScore;
  console.log("Your win score:", winScore);
  } else {
    console.log(losingMessage);
  message.textContent = losingMessage[Math.floor(Math.random() * 3)];
  loseScore += 1;
  losses.textContent = "Losses:" + loseScore;
  console.log("Your lose score:", loseScore);
  }
}