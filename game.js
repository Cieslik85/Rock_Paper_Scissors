// Input handling

function getPlayerChoice() {
    result = prompt("Choose Rock, Paper, or Scissors:").trim();
    if (result === null || result === "" || !['Rock', 'Paper', 'Scissors'].includes(result)) {
        alert("Don't cheat! We are here to play! Play fair or else...!! Choose Rock, Paper, or Scissors.");
        return getPlayerChoice();
    }
    return result;
}

// Round Logic

function computerPlay() {
    const compChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomChoice];
}

function playround(playerSelection, computerSelection) {

}

// Main game loop

function game() {
}

game();
