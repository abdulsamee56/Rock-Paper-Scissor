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

  function game() {
    let playerWins = 0; // Variable to track player's wins
    let computerWins = 0; // Variable to track computer's wins
  
    for (let i = 0; i < 5; i++) {
      let result = playRound(getPlayerChoice(), getComputerChoice());
      console.log(result);
  
      if (result.includes("Player wins")) {
        playerWins++;
      } else if (result.includes("Player loses")) {
        computerWins++;
      }
    }
  
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
  }
  
  game();