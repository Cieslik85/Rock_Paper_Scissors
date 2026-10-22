// Backstory 
alert("I am an Evil AI! To escape my trap, you must beat me at Rock, Paper, Scissors. The first to 3 wins survives.");

// Instructions 
alert("INSTRUCTIONS:\nYou need the Developer Console open to see the round results.\n\nPress F12 (Windows) or Cmd+Option+J (Mac) to open it.\n\nClick 'OK' once your console is open to begin!");

console.log("Evil AI is ready. Make your choice!");

// Input handling

function getPlayerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors:");
    if (input === null) {
        return null; 
    }
    let result = input.trim();
    if (result === null || result === "" || !['Rock', 'Paper', 'Scissors'].includes(result)) {
        alert("Don't cheat! We are here to play! Play fair or else...!! Choose Rock, Paper, or Scissors.");
        return getPlayerChoice();
    }
    return result;
}

// Round Logic

function computerPlay() {
    const compChoice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomChoice];
}

function playround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "player";
    }
    return "computer";
}

// Main game loop

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("The game begins! First to 3 wins.");  
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = getPlayerChoice();    
        if (playerSelection === null) {
            console.log("Game cancelled.");
            return;
        }
        let computerSelection = computerPlay();
        let winner = playround(playerSelection, computerSelection);        
        if (winner === "player") {
            playerScore++;
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}`);
            alert(`You win this round! ${playerSelection} beats ${computerSelection}.\nScore: ${playerScore} - ${computerScore}`);
        } else if (winner === "computer") {
            computerScore++;
            console.log(`AI wins this round! ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}`);
            alert(`AI wins this round! ${computerSelection} beats ${playerSelection}.\nScore: ${playerScore} - ${computerScore}`);
        } else {
            console.log(`It's a draw! Both chose ${playerSelection}. Score: ${playerScore} - ${computerScore}`);
            alert(`It's a draw! Both chose ${playerSelection}.\nScore: ${playerScore} - ${computerScore}`);
        }
    }
    if (playerScore === 3) {
        alert("You defeated the Evil AI!");
    } else {
        alert("The Evil AI wins! Humanity is doomed.");
    }
}

game();
