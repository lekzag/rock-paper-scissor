let playerScore = 0;
let computerScore = 0;
let x = "you win";
let y = "you lose";
let z = "draw";

function computerPlay() {
  let item = ["rock", "paper", "scissors"];
  return item[Math.floor(Math.random() * item.length)];
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    // récupération de la valeur du bouton cliqué
    let playerSelection = button.id;
    let computerSelection = computerPlay();

    const playRoundResult = playRound(playerSelection, computerSelection);

    const round = document.getElementById('round');
    round.innerHTML = "You chose, " + playerSelection + " your opponent chose " + computerSelection + ". Result : " + playRoundResult;

    const scores = document.getElementById('scores');
    scores.innerHTML = "Your score : <span style='color: red';>" + playerScore + "</span> Your opponent's score <span style='color: green;'>" + computerScore + "</span>";

    playGame(playerScore, computerScore);
  });
});

function playRound(playerSelection, computerSelection) {

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return y;
    } else if (computerSelection === "scissors") {
      playerScore++;
      return x;
    } else {
      return z;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return x;
    } else if (computerSelection === "scissors") {
      computerScore++;
      return y;
    } else {
      return z;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return y;
    } else if (computerSelection === "paper") {
      playerScore++;
      return x;
    } else {
      return z;
    }
  }
}

function playGame(playerScore, computerScore) {

const resultFindWinner = findWinner(playerScore, computerScore);

  if (playerScore === 5 || computerScore === 5) {

  const theEnd = document.getElementById('theEnd');
  theEnd.innerHTML = 'The game is over, ' + resultFindWinner + '!';
  }
}

function findWinner(playerScore, computerScore) {

  let playerWon = "you won this game"
  let computerWon = "the compu is better than you"

  if (playerScore > computerScore) {
    return playerWon;
  }
    else {
    return computerWon;
    }
}