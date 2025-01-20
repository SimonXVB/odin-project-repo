import { getLeaderboard } from "./fetch.js";
import { body, startGame, scoreNumber, quitGame, nextImage, canvas, image, ctx, update, fetchImage } from "./gamelogic.js";

const header = document.getElementById("scoreboard");

export function updateScreen() {
    body.innerHTML = "";
    header.innerHTML = "";

    renderScoreboard();
    renderCanvas();
};

async function openLeaderboardModal() {
    const leaderboardModal = document.createElement("dialog");
    const div = document.createElement("div");
    const leaderboardDiv = document.createElement("div");
    const closeButton = document.createElement("button");

    const leaderboard = await getLeaderboard();

    div.innerHTML = "Leaderboard";

    leaderboardModal.id = "openLeaderboardModal";
    leaderboardDiv.id = "leaderboard-div"
    div.id = "leaderboard-header";

    if(leaderboard.length !== 0) {
        leaderboard.forEach((el) => {
            const entry = document.createElement("div");
            const username = document.createElement("div");
            const score = document.createElement("div");

            entry.id = "entry";
    
            username.innerHTML = `Name: ${el.username}`;
            score.innerHTML = `Score: ${el.score}`;
    
            entry.append(username, score);
            leaderboardDiv.appendChild(entry);
        });
    } else {
        leaderboardDiv.innerHTML = "No entries found."
    }
    
    closeButton.innerHTML = "Close";
    closeButton.addEventListener("click", () => {
        leaderboardModal.close();
    });

    leaderboardModal.onclose = () => {
        body.removeChild(leaderboardModal);
    };

    leaderboardModal.append(div, leaderboardDiv, closeButton);

    body.appendChild(leaderboardModal);
    leaderboardModal.showModal();
};

export function leaderboardEntry() {
    const modal = document.createElement("dialog");
    const div = document.createElement("div");
    const scoreDiv = document.createElement("div");
    const buttonDiv = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const closeButton = document.createElement("button");

    modal.id = "leaderboardEntry";

    input.placeholder = "Enter username";
    closeButton.innerHTML = "Quit";
    button.innerHTML = "Submit";
    div.innerHTML = "You have found everyone!";
    scoreDiv.innerHTML = `Your final score is: ${scoreNumber}`;
    
    button.addEventListener("click", async () => {

        if(input.value) {
            await fetch("http://localhost:8080/leaderboard", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    "username": input.value,
                    "score": scoreNumber
                })
            });
    
            quitGame();
        }
    });
    closeButton.addEventListener("click", quitGame);
    modal.onclose = quitGame;

    buttonDiv.append(button, closeButton);
    modal.append(div, scoreDiv, input, buttonDiv);

    body.appendChild(modal);
    modal.showModal();
};

export function nextModal() {
    const modal = document.createElement("dialog");
    const found = document.createElement("p");
    const quitButton = document.createElement("button");
    const nextButton = document.createElement("button");

    modal.id = "nextModal";

    quitButton.innerHTML = "Quit";
    nextButton.innerHTML = "Next Image";
    found.innerHTML = `You found ${fetchImage.Coordinates[0].name}!`;

    quitButton.addEventListener("click", quitGame);
    nextButton.addEventListener("click", nextImage);
    modal.onclose = nextImage;

    modal.append(found, quitButton, nextButton);

    body.appendChild(modal);
    modal.showModal();
};

export function renderScoreboard() {
    const score = document.createElement("div");
    const leaderboard = document.createElement("button");

    leaderboard.innerHTML = "Leaderboard";
    score.innerHTML = "Score: " + scoreNumber;

    leaderboard.addEventListener("click", openLeaderboardModal);

    score.id = "score";
    leaderboard.id = "leaderboard";

    header.append(score, leaderboard);
};

export function renderStartButton() {
    body.innerHTML = "";
    header.innerHTML = "";
    const startButton = document.createElement("button");

    startButton.id = "startButton";
    startButton.innerHTML = "Begin";
    startButton.addEventListener("click", startGame);

    header.appendChild(startButton);
};

export async function renderCanvas() {
    canvas.width = 1440;
    canvas.height = 810;
    canvas.style.position = "relative";

    image.onload = () => {
        ctx.drawImage(image, 0, 0);
    };

    body.append(canvas);
    canvas.addEventListener("mousedown", update);
};