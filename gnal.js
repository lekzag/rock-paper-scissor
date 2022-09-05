let x = "you win";
let y = "you lose";
let z = "draw";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let item = ["rock", "paper", "scissors"];
  let getComputerSelection = item[Math.floor(Math.random() * item.length)];
  return getComputerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      console.log(y);
      computerScore++;
    } else if (computerSelection === "scissors") {
      console.log(x);
      playerScore++;
    } else {
      console.log(z);
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      console.log(x);
      playerScore++;
    } else if (computerSelection === "scissors") {
      console.log(y);
      computerScore++;
    } else {
      console.log(z);
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      console.log(y);
      computerScore++;
    } else if (computerSelection === "paper") {
      console.log(x);
      playerScore++;
    } else {
      console.log(z);
    }
  } else {
    prompt("choose rock, paper or scissors");
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("what's your choice");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    console.log("you won the game");
  } else if (playerScore < computerScore) {
    console.log("you lose the game");
  } else if (playerScore === computerScore) {
    console.log("Draw game");
  }
}

game();
