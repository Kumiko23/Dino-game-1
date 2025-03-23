const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains("jump")) {
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

// Move obstacle
setInterval(() => {
    let obstaclePos = obstacle.offsetLeft;
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

    if (obstaclePos < 50 && obstaclePos > 0 && dinoPos < 30) {
        alert("Game Over!");
        location.reload();
    }

    obstacle.style.left = (obstaclePos - 5) + "px";
    if (obstaclePos < 0) {
        obstacle.style.left = "100%";
    }
}, 30);