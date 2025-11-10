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
console.log(getComputerChoice());