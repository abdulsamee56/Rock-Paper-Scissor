function getComputerChoice(){
    let aiOption = ["scissors", "rock", "paper"];
    let choice = Math.floor(Math.random()*3);
    return aiOption[choice];
}


function getPlayerChoice(){
    let pChoice = prompt("Enter Rock, Paper, or Scissors");
    return pChoice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase(); // Convert player's choice to lowercase
    computerChoice = computerChoice.toLowerCase(); // Convert computer's choice to lowercase
  
    if (playerChoice === "rock" && computerChoice === "paper") {
      return "Player loses! Paper beats Rock.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      return "Player wins. Paper beats Rock.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      return "Player wins. Scissors beats Paper.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      return "Player loses. Scissors beats Paper.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      return "Player wins. Rock beats Scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      return "Player loses. Rock beats Scissors.";
    } else {
      return "Tie!";
    }
  }



for(let i =0; i < 5;i++){
    console.log(playRound(getPlayerChoice(),getComputerChoice()));
}

