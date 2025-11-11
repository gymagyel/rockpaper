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


/*
getHumanChoice()
1. Ask the user to type "rock", "paper", or "scissors" using prompt()
2. Convert the input to lowercase
3. Return the user's choice
4. (Assume user always types a valid option)
*/

function getHumanChoice(){
    const choice = prompt ("Enter rock, paper, scissors:");
    return choice.toLowerCase();
}

/*
Declare score variables
1. Create two variables in the global scope: humanScore and computerScore
2. Initialize both to 0
3. These will be updated later as the game progresses
*/

function playGame() {

    let humanScore= 0;
    let computerScore = 0;
/*
playRound(humanChoice, computerChoice)
1. Convert humanChoice to lowercase (make it case-insensitive)
2. Compare humanChoice and computerChoice:
   - If both are the same → it's a tie
   - If human beats computer → log "You win!" message and increment humanScore
   - Else → log "You lose!" message and increment computerScore
3. Display the choices and current score using console.log
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Its a tie! Both choose "+ humanChoice);
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log (`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log ( `Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

/*
Define playGame()
This function will run the entire 5-round game.

Move playRound() and the score variables inside it.

Loop 5 times
Each time, you’ll get a new humanChoice and computerChoice, play a round, and update scores.

Declare the winner after the loop finishes.
*/
 // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
  }

  // Final result
  if (humanScore > computerScore) {
    console.log(`🏆 You win the game! Final score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`💻 Computer wins the game! Final score: ${computerScore} - ${humanScore}`);
  } else {
    console.log(`🤝 It's a tie overall! Final score: ${humanScore} - ${computerScore}`);
  }

}
// Start the game
playGame();
