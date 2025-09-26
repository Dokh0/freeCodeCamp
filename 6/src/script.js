function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

/*

function hasPlayerWonTheRound(player, computer) {
  const options = ["Rock", "Paper", "Scissors"];
  if (player === options[0] && computer === options[2]) {
    return true;
  } else if (player === options[2] && computer === options[1]) {
    return true;
  } else if (player === options[1] && computer === options[0]) {
    return true;
  } else {
    return false;
  }
}

*/

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound === true) {
    return (
      playerScore++ && `"Player wins! ${userOption} beats ${computerResult}"`
    );
  } else if (hasPlayerWonTheRound === computerResult) {
    return `"It's a tie! Both chose ${userOption}"`;
  } else {
    return (
      computerScore++ &&
      `"Computer wins! ${computerResult} beats [player's choice]"`
    );
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
