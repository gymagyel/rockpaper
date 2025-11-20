/* 
getComputerChoice()
Generate a random number between 0 and 2    
If 0 - "rock"
    1 - "paper"
    2 - "scissors"
return the choice
*/

function getComputerChoice() {
    const n= Math.floor(Math.random() * 3);
    if (n == 0) return "rock" ;
    if (n == 1) return "paper" ;
    return "scissors" ;
}



const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const resultsDiv = document.querySelector('#results')

let playerScore = 0;
let computerScore = 0;
let gameOver = false;


const scoreDiv = document.querySelector('#score')

rockBtn.addEventListener('click',() => 
  playRound( "rock"));
paperBtn.addEventListener('click' ,() => 
  playRound("paper"))
scissorsBtn.addEventListener( 'click' ,() => 
  playRound("scissors"))


function playRound(playerSelection) {
  const computerSelection = getComputerChoice ();
  if (playerSelection === computerSelection){
    resultsDiv.textContent = `It's a tie. You both choose ${playerSelection}`;
  return;
}
const playerWins =
(playerSelection === "rock" && computerSelection === "scissors") ||
(playerSelection === "paper" && computerSelection === "rock") ||
(playerSelection === "scissors" && computerSelection === "paper") ;
if (playerWins) {
  playerScore++;
  resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;

} else {
  computerScore++;
  resultsDiv.textContent = `You lose! ${computerSelection} beat ${playerSelection}!`;
}
scoreDiv.textContent = `Score - You ${playerScore} | Computer: ${computerScore}`;

if (playerScore === 5 || computerScore === 5) {
  gameOver = true;
if (playerScore === 5){
  resultsDiv.textContent = ` You won the game! Final score: You: ${playerScore} | Computer: ${computerScore}`
}else {
  resultsDiv.textContent = `You lost the Game. Final score: You: ${playerScore} | Computer: ${computerScore}`
}
}
}