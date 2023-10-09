let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

function whiteboard(numDiv) {
        for (let n = 0; n < (numDiv * numDiv); n++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('mouseover', function(){
            pixel.style.background = 'black'
        })
        container.appendChild(pixel);
    } 
}

function adjustBoard(gridSize) {
    container.style.maxWidth = `${10 * gridSize}px`
}

boardSize = 100

pixels = whiteboard(boardSize);
adjustBoard(boardSize)