import getRandomImage from "./fetch.js";
import { renderStartButton, renderScoreboard, nextModal, updateScreen, renderCanvas, leaderboardEntry } from "./renderLogic.js";


/** @type {HTMLCanvasElement} */
export const body = document.querySelector("#container");
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");
export const image = new Image();

const width = 50;
const height = 50;

export let scoreNumber = 0;
export let fetchImage;
let interval;
let xArray = [];
let yArray = [];
let foundImages = [];

window.onload = renderStartButton();

function setScore() {
    scoreNumber++
};

export async function startGame() {
    fetchImage = await getRandomImage();
    image.src = "./images/" + fetchImage.image;
    const startButton = document.getElementById("startButton");

    startButton.remove();
    renderScoreboard();
    renderCanvas();

    interval = setInterval(setScore, 10);
};

export function update(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    let topLeftX = x - (width / 2);
    let topLeftY = y - (height / 2);

    getCoords(topLeftX, topLeftY);
    drawSquare(x, y);
    checkHit();

    setTimeout(() => {
        ctx.drawImage(image, 0, 0)
    }, 1000);
};

export async function nextImage() {
    fetchImage = await getRandomImage();

    if(foundImages.includes(fetchImage.image)){
        nextImage();
    } else {
        image.src = "./images/" + fetchImage.image;
        updateScreen();
    };
};

function checkHit() {
    const correctX = fetchImage.Coordinates[0].X;
    const correctY = fetchImage.Coordinates[0].Y;

    if(xArray.includes(correctX) && yArray.includes(correctY)) {
        checkWin();
    };
};

function checkWin() {
    foundImages.push(fetchImage.image);
    scoreNumber++;

    if(foundImages.length >= 2) {
        leaderboardEntry();
    } else {
        nextModal();
    };
};

export function quitGame() {
    clearInterval(interval);

    foundImages = [];
    scoreNumber = 0;
    renderStartButton();
};

function drawSquare(x, y) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(x - (width / 2), y - (height / 2), width, height);
};

function getCoords(topLeftX, topLeftY) {
    xArray = [];
    yArray = [];

    for(let i = 1; i <= width; i++) {
        topLeftX = topLeftX + 1;
        topLeftY = topLeftY + 1;
        xArray.push(topLeftX);
        yArray.push(topLeftY);
    };
};