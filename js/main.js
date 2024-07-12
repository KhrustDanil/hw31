const block = document.querySelector('.block');

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function changeColor() {
    block.style.background = getRandomColor();
}

function changePos() {
    let maxW = window.innerWidth - block.offsetWidth;
    let maxH = window.innerHeight - block.offsetHeight;
    let rangeW = getRandomPosition(maxW);
    let rangeH = getRandomPosition(maxH);

    block.style.left = rangeW + "px";
    block.style.top = rangeH + "px";
}





setInterval(changeColor, 500);
setInterval(changePos ,1000);

