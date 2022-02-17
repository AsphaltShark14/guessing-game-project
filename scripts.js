const rgb = document.querySelector('.rgb');
const squares = document.querySelectorAll('.square');
const scoreDisplay = document.querySelector('.score');
const message = document.querySelector('#message');
const modes = document.querySelectorAll('.mode');
const resetButton = document.querySelector('.reset');
const headline = document.querySelector('.headline');
const options = document.querySelector('.options');
const oldHTML = headline.innerHTML;

let squareNum = 3;
let score = 0;
let colors = [];
let pickedColor;

function init() {
    colors = [];
    restoreDefalut();
    
    if (squareNum == 3) {
        for (i = 0; i < squareNum; i++){
            squares[i].style.display = 'none';
        }
    } else {
        squares.forEach(square => square.style.display = '');
    }
    generateRandomColors();
    pickColor();
    const rgb = document.querySelector('.rgb');
    rgb.textContent = pickedColor.toUpperCase();
    
}

function gameMode() {
    const mode = this.textContent;
    mode == 'EASY' ? squareNum = 3 : squareNum = 6;
    reset();
}

function pickColor() {
    const random = Math.round(Math.random() * (colors.length-1));
    return pickedColor = colors[random];
}

function generateRandomColors() {
    squares.forEach(square => {
        square.style.backgroundColor = makeColor();
        if(!square.style.display){colors.push(square.style.backgroundColor);}
    })
}

function makeColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function restoreDefalut() {
    headline.innerHTML = oldHTML;
    headline.style.borderColor = '';
    headline.style.color = '';
    options.style.backgroundColor = '';
}

function play() {
    let playerColor = this.style.backgroundColor;

    if (playerColor == pickedColor) {
        squares.forEach(square => square.style.backgroundColor = '#008000');
        headline.innerHTML = `<br>CORRECT!<br><br>`;
        headline.style.borderColor = '#008000';
        headline.style.color = '#008000';
        options.style.backgroundColor = '#008000';

        score++;
        scoreDisplay.textContent = `Score: ${score}`;

        setTimeout(init, 1000);
    } else {
        squares.forEach(square => square.style.backgroundColor = '#880808');
        headline.innerHTML = `<br>WRONG!<br><br>`;
        headline.style.borderColor = '#880808';
        headline.style.color = '#880808';
        options.style.backgroundColor = '#880808';

        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;

        setTimeout(init, 1000);
    }
}

function reset() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;

    init();
}

modes.forEach(mode => mode.addEventListener('click', gameMode));
resetButton.addEventListener('click', reset);
squares.forEach(square => square.addEventListener('click', play));

init();

