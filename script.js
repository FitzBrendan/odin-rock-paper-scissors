// Rock beats Scissors, Paper beats Rock, Scissors beats Paper.

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 1;

// get random choice for computer's selection
function getComputerChoice() {
  let computerChoice;
  let randomNum = Math.floor(Math.random() * 10);
  if (randomNum < 1) {
    return getComputerChoice();
  } else if (randomNum >= 1 && randomNum <= 3) {
    computerChoice = "rock";
  } else if (randomNum >= 4 && randomNum <= 6) {
    computerChoice = "paper";
  } else if (randomNum >= 7 && randomNum <= 9) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// create 3 buttons for player to select choice

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock");
rockBtn.setAttribute("class", "button");
rockBtn.setAttribute("name", "rock");
rockBtn.style.backgroundColor = "yellow";
rockBtn.style.fontSize = "2.5rem";
rockBtn.style.padding = "0.3em";
rockBtn.style.margin = "1em";
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);
document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper");
paperBtn.setAttribute("class", "button");
paperBtn.setAttribute("name", "paper");
paperBtn.style.backgroundColor = "yellow";
paperBtn.style.fontSize = "2.5rem";
paperBtn.style.padding = "0.3em";
paperBtn.style.margin = "1em";
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissors");
scissorsBtn.setAttribute("class", "button");
scissorsBtn.setAttribute("name", "scissors");
scissorsBtn.style.backgroundColor = "yellow";
scissorsBtn.style.fontSize = "2.5rem";
scissorsBtn.style.padding = "0.3em";
scissorsBtn.style.margin = "1em";
scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));

// create div to display results of rounds and to announce winner with 5 wins
const tally = document.createElement("div");
tally.setAttribute("id", "tally");
tally.setAttribute("class", "score");
tally.setAttribute("name", "tally");
tally.style.fontSize = "2rem";
tally.style.padding = "7em 5em";
tally.style.whiteSpace = "pre-line";
document.body.appendChild(tally);

// Play single round, output user win/loss, keep score to 5 wins
function playRound(userChoice, computerChoice) {
  let result;
  if (/^rock$/i.test(computerChoice)) {
    if (/^rock$/i.test(userChoice)) {
      ties += 1;
      result = `Round ${rounds}
      It's a Tie!, try again
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^paper$/i.test(userChoice)) {
      playerScore += 1;
      result = `Round ${rounds}
      You Win this Round! ${paper} beats ${rock}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^scissors$/i.test(userChoice)) {
      computerScore += 1;
      result = `Round ${rounds}
      You Lose this Round! ${rock} beats ${scissors}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    }
  } else if (/^paper$/i.test(computerChoice)) {
    if (/^rock$/i.test(userChoice)) {
      computerScore += 1;
      result = `Round ${rounds}
      You Lose this Round! ${paper} beats ${rock}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^paper$/i.test(userChoice)) {
      ties += 1;
      result = `Round ${rounds}
      It's a Tie!, try again
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^scissors$/i.test(userChoice)) {
      playerScore += 1;
      result = `Round ${rounds}
      You Win this Round! ${scissors} beats ${paper}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    }
  } else if (/^scissors$/i.test(computerChoice)) {
    if (/^rock$/i.test(userChoice)) {
      playerScore += 1;
      result = `Round ${rounds}
      You Win this Round! ${rock} beats ${scissors}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^paper$/i.test(userChoice)) {
      computerScore += 1;
      result = `Round ${rounds}
      You Lose this Round! ${scissors} beats ${paper}
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    } else if (/^scissors$/i.test(userChoice)) {
      ties += 1;
      result = `Round ${rounds}
      It's a Tie!, try again
      You've won ${playerScore} round(s)
      and Lost ${computerScore}
      with ${ties} tied`;
    }
  }

  // keep track of rounds played
  rounds += 1;

  // display results of round for game winner with 5 rounds won
  if (playerScore < 5 && computerScore < 5) tally.textContent = result;
  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    ties = 0;
    return (tally.textContent = `You Win the Game, with 5 rounds won`);
  } else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    ties = 0;
    return (tally.textContent = `You Lose the Game, computer won 5 rounds`);
  }
}
