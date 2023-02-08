// Rock beats Scissors, Paper beats Rock, Scissors beats Paper
// Play 5 rounds and track wins/losses in console

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let counter = 0;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// get random choice for computer's selection
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum >= 1 && randomNum <= 3) {
        return rock;
    }else if (randomNum >= 4 && randomNum <=6 ) {
        return paper;
    }else if (randomNum >= 7 && randomNum <= 9) {
        return scissors;
    }else {
        return getComputerChoice();
    }
}

// Play single round, output user win/loss
function playRound(playerSelection, computerSelection) {
        if (/^rock$/i.test(computerSelection)) {
            if (/^rock$/i.test(playerSelection)) {
                return `It's a Tie!, try again`;
            }else if (/^paper$/i.test(playerSelection)) {
                return `You Win! ${paper} beats ${rock}`;
            }else if (/^scissors$/i.test(playerSelection)) {
                return `You Lose! ${rock} beats ${scissors}`;
            }
        }else if (/^paper$/i.test(computerSelection)) {
            if (/^rock$/i.test(playerSelection)) {
                return `You Lose! ${paper} beats ${rock}`;
            }else if (/^paper$/i.test(playerSelection)) {
                return `It's a Tie!, try again`;
            } else if (/^scissors$/i.test(playerSelection)) {
                return `You Win! ${scissors} beats ${paper}`;
            }
        }else if (/^scissors$/i.test(computerSelection)) {
            if (/^rock$/i.test(playerSelection)) {
                return `You Win! ${rock} beats ${scissors}`;
            }else if (/^paper$/i.test(playerSelection)) {
                return `You Lose! ${scissors} beats ${paper}`;
            }else if (/^scissors$/i.test(playerSelection)) {
                return `It's a Tie!, try again`;
            }
        }
}
 
// Run 5 rounds of playRound and output winners/losers best of 5
function game() {
    while (counter < 5) {
        let userInput = prompt("Please type your selection, Rock, Paper, Scissors");
        let result = playRound(userInput, getComputerChoice());
        if (/^rock$|^paper$|^scissors$/i.test(userInput)) {
            console.log(result);
            counter += 1;
            if (/^You Win/.test(result)) {
                playerScore += 1;
            }else if (/^You Lose/.test(result)) {
                computerScore += 1;
            }else if (/^It's a Tie/.test(result)) {
                ties += 1;
            }
        }else {
            alert("Entry not valid, please enter Rock, Paper or Scissors");
        }
    }
    if (playerScore > computerScore) {
        return console.log(`Congrats, you win - your score ${playerScore} beats computer score ${computerScore} \(with ${ties} games tied out of 5\)`);
    }else if (playerScore < computerScore){
        return console.log(`Sorry, You Lose - only scored ${playerScore} vs computer score ${computerScore} \(with ${ties} games tied out of 5\)`);
    }else {
        return console.log(`It's a tie - your score ${playerScore} equals computer score ${computerScore} \(with ${ties} games tied out of 5\)`);
    }
}

game();