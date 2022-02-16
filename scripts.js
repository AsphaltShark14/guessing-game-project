const rgb = document.querySelector('.rgb');
const squares = document.querySelectorAll('.square');
const scoreDisplay = document.querySelector('.score');
const message = document.querySelector('.message');
const modes = document.querySelectorAll('.mode');
const resetButton = document.querySelector('.reset');
const headline = document.querySelector('.headline');

let squareNum = 6;
let score = 0;
let colors = [];
let pickedColor;

function init() {
    score = 0;
    colors = [];
    
    if (squareNum == 3) {
        for (i = 0; i < squareNum; i++){
            squares[i].style.display = 'none';
        }
    } else {
        squares.forEach(square => square.style.display = 'block');
    }
    generateRandomColors();
    pickColor();
    rgb.textContent = pickedColor.toUpperCase();
    
}

function gameMode() {
    const mode = this.textContent;
    mode == 'EASY' ? squareNum = 3 : squareNum = 6;
    init();
}

function pickColor() {
    const random = Math.round(Math.random() * colors.length);
    return pickedColor = colors[random];
}

function generateRandomColors() {
    squares.forEach(square => {
        square.style.backgroundColor = makeColor();
        if(square.style.display == 'block'){colors.push(square.style.backgroundColor);}
    })
}

function makeColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

modes.forEach(mode => mode.addEventListener('click', gameMode));
resetButton.addEventListener('click', init);

init();

