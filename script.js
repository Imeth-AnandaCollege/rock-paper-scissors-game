let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "🧱",
    paper: "📄",
    scissors: "✂️"
  };

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-icon").textContent = emojis[playerChoice];
  document.getElementById("computer-icon").textContent = emojis[computerChoice];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    result = "You win! 🎉";
  } else {
    computerScore++;
    result = "You lose! 😢";
  }

  document.getElementById("result").textContent = result;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  const prizeMessage = document.getElementById("prize-message");

  if (playerScore >= 5) {
    prizeMessage.innerHTML = "🎉 You won a prize! 🎁";
    resetGame();
  } else if (computerScore >= 5) {
    prizeMessage.innerHTML = "🤖 Computer won and got a robot prize!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  setTimeout(() => {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
  }, 1500);
}
