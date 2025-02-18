/*
Objective: To make a Rock, Paper and Scissors game using Node.js.
*/ 
 
/*
 Team Members:
 Hanok Lungeli (200559866)
 Rod Iver Vallero
*/
 
 
 
 
 // This is the Import of prompt-sync package
const prompt = require('prompt-sync')();

// Creating a function to get the use choice
function getUserChoice() {
    let userSelection = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ").toUpperCase();

    // Valiating the user input commands
    while (!["ROCK", "PAPER", "SCISSORS"].includes(userSelection)) {
        console.log("Invalid choice. Please enter ROCK, PAPER, or SCISSORS.");
        userSelection = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ").toUpperCase();
    }
    
    return userSelection;
}

// Creating a function for computer to make a random choice
function getComputerChoice() {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1

    // This if else condition allows the 33.33% chances or probablity for each of the moves
    if (randomNumber < 0.34) return "PAPER";
    else if (randomNumber < 0.67) return "SCISSORS";
    else return "ROCK";
}

// Finally creating a function to determine the if the game is a tie or have a winner
function determineWinner(user, computer) {
    console.log(`User selected: ${user}`);
    console.log(`Computer selected: ${computer}`);

    // This if statement shows if both parties are in tie condition
    if (user === computer) return "It's a tie!";
    
    // This if statement is the conditions for the use to win
    if (
        (user === "ROCK" && computer === "SCISSORS") ||
        (user === "PAPER" && computer === "ROCK") ||
        (user === "SCISSORS" && computer === "PAPER")
    ) {
        return "User Wins!";
    } 
    // Finally if the conditions are reveresed, computer wins.
    else {
        return "Computer Wins!";
    }
}

// Run the game
const userChoice = getUserChoice();
const computerChoice = getComputerChoice();
const result = determineWinner(userChoice, computerChoice);

console.log(result);

