// This is an array, it's like a list of values which you can select values from 
// by indexing them with an integer. 
// Arrays are zero-indexed so first elememnt is 0, i.e. choices[0] is "rock", choices[1] is "paper"
var choices = ["rock", "paper", "scissors"];

var userChoice = prompt("Do you choose rock, paper or scissors?");

// Check user input - they always do strange things
if(choices.indexOf(userChoice) >= 0) {
  // Find a random number between 0 and 2
  var randomIndex = Math.round(2 * Math.random());

  // Find the element at the index of the random index
  var computerChoice = choices[randomIndex];

  var compare = function(choice1, choice2) {
    switch (choice1 + choice2) {
      case "paper" + "rock":
      case "scissors" + "paper":
      case "rock" + "scissors":
        return choice1 + " wins";

      case "rock" + "paper":
      case "paper" + "scissors":
      case "scissors" + "rock":
        return choice2 + " wins";

      default:
        return "The result is a tie!";
    }
  };

  alert("Computer chose " + computerChoice + " - " + compare(userChoice, computerChoice));
} else {
  alert("That's not a valid choice!");
}
