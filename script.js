const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const game = document.getElementById("game");
const restartBtn = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score");

let isGameOver = false;
let score = 0;
let gameInterval;
let scoreInterval;

// Detect screen tap to jump
game.ontouchstart = jump;

function jump() {
    if (!dino.classList.contains("jump") && !isGameOver) {
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 500);
    }
}

// Function to start the game
function startGame() {
    isGameOver = false;
    restartBtn.style.display = "none";
    obstacle.style.left = "100%";
    score = 0;
    scoreDisplay.textContent = score;

    gameInterval = setInterval(() => {
        let obstaclePos = obstacle.offsetLeft;
        let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

        if (obstaclePos < 80 && obstaclePos > 50 && dinoPos < 50) {
            gameOver();
        }

        obstacle.style.left = (obstaclePos - 5) + "px";
        if (obstaclePos < 0) {
            obstacle.style.left = "100%";
        }
    }, 30);

    // Score increases over time
    scoreInterval = setInterval(() => {
        if (!isGameOver) {
            score++;
            scoreDisplay.textContent = score;
        }
    }, 500);
}

// Game Over Function
function gameOver() {
    clearInterval(gameInterval);
    clearInterval(scoreInterval);
    isGameOver = true;
    alert("Game Over! Score: " + score);
    restartBtn.style.display = "block";
}

// Restart Game
function restartGame() {
    startGame();
}

// Start game when page loads
startGame();
