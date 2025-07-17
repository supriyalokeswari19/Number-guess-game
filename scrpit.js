let target;
let attempts;
const maxAttempts = 5;

const guessBtn = document.getElementById("guessBtn");
const restart = document.getElementById("restart");

const attemptsLeft = document.getElementById("attemptsLeft");

function startGame() {
  target = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  feedback.className = "";
  attemptsLeft.textContent = `You have ${maxAttempts} attempts.`;
  document.getElementById("guess").value = "";
  document.getElementById("guess").disabled = false;
  guessBtn.disabled = false;
  restart.hidden = true;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    feedback.className = "error";
    return;
  }

  attempts++;

  if (guess === target) {
    feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempt(s)!`;
    feedback.className = "success";
    endGame();
  } else if (guess > target) {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.className = "error";
  } else {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.className = "error";
  }

  if (attempts >= maxAttempts && guess !== target) {
    feedback.textContent = `❌ Attempts over! The number was ${target}.`;
    feedback.className = "error";
    endGame();
  } else {
    attemptsLeft.textContent = `Attempts left: ${maxAttempts - attempts}`;
  }
}

function endGame() {
  document.getElementById("guess").disabled = true;
  guessBtn.disabled = true;
  restart.hidden = false;
}

guessBtn.addEventListener("click", checkGuess);
restart.addEventListener("click", startGame);

// Start the game initially
startGame();
