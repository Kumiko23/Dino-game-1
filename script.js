const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const game = document.getElementById("game");
const restartBtn = document.getElementById("restart-btn");

let isGameOver = false;
let gameInterval;

// Detect screen tap to jump (for mobile)
game.ontouchstart = jump;

function jump() {
    if (!dino.classList.contains("jump") && !isGameOver) {
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 500);
    }
}

// Add jump animation
let style = document.createElement('style');
style.innerHTML = `
    .jump {
        animation: jump 0.5s linear;
    }

    @keyframes jump {
        0% { bottom: 0; }
        50% { bottom: 100px; }
        100% { bottom: 0; }
    }
`;
document.head.appendChild(style);

// Function to start game loop
function startGame() {
    isGameOver = false;
    restartBtn.style.display = "none";
    obstacle.style.left = "100%";

    gameInterval = setInterval(() => {
        let obstaclePos = obstacle.offsetLeft;
        let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

        if (obstaclePos < 50 && obstaclePos > 0 && dinoPos < 30) {
            gameOver();
        }

        obstacle.style.left = (obstaclePos - 5) + "px";
        if (obstaclePos < 0) {
            obstacle.style.left = "100%";
        }
    }, 30);
}

// Game Over Function
function gameOver() {
    clearInterval(gameInterval);
    isGameOver = true;
    alert("Game Over!");
    restartBtn.style.display = "block";
}

// Restart Game
function restartGame() {
    startGame();
}

// Start game when page loads
startGame();
