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
console.log("Human choice:", getHumanChoice())