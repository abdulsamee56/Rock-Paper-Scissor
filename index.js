function getComputerChoice(){
    let aiOption = ["scissors", "rock", "paper"];
    let choice = Math.floor(Math.random()*3);
    return aiOption[choice];
}


function getPlayerChoice(choice){
    let pChoice = choice;
    return pChoice;
}
let playerWins =0;
let computerWins =0;
let tie =0;
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase(); // Convert player's choice to lowercase
    computerChoice = computerChoice.toLowerCase(); // Convert computer's choice to lowercase
    
    if (playerChoice === "rock" && computerChoice === "paper") {
      computerWins+=1;
      return "Player loses! Paper beats Rock.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerWins+=1;
      return "Player wins. Paper beats Rock.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerWins+=1;
      return "Player wins. Scissors beats Paper.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerWins+=1;
      return "Player loses. Scissors beats Paper.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerWins+=1;
      return "Player wins. Rock beats Scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerWins+=1;
      return "Player loses. Rock beats Scissors.";
    } else {
      tie+=1;
      return "Tie!";
    }
  }


  
  function updateScores(playerChoice, computerChoice) {
    const result = playRound(playerChoice, computerChoice);
  
    
    
    document.getElementById('playerScore').textContent="Player Wins: " + playerWins;
    document.getElementById('computerScore').textContent="Computer Wins: " + computerWins;
    document.getElementById("tie").textContent = "Ties: " + tie;
    
    if (playerWins === 5 || computerWins === 5) {
       
        const winner = playerWins === 5 ? 'Player' : 'Computer';
        alert(winner + ' wins the game!');
        
        tie=0;
        playerWins = 0;
        computerWins = 0;
        
       
        document.getElementById('playerScore').textContent = 'Player Score: 0';
        document.getElementById('computerScore').textContent = 'Computer Score: 0';
        document.getElementById('tie').textContent = 'Tie: 0';
    }
}
  
  

  