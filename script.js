const whiteBoard = document.getElementById('whiteBoard')
const eraseButton = document.getElementById('eraseButton')
const blackButton = document.getElementById('blackButton')
const rainbowButton = document.getElementById('rainbowButton')


// variables 
let gridSize = 156



// Function to create a whiteboard with a specified number of pixels
function createWhiteboard(numDiv) {
  for (let n = 0; n < numDiv * numDiv; n++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${500 / numDiv}px`
    pixel.style.height = `${500 / numDiv}px`
  

    // Add a mouseover event listener to change the background to a random color
    pixel.addEventListener('mouseover', function () {
      // let randomColor = getRandomColor();
      pixel.style.background = 'black' //randomColor;
    });

    whiteBoard.appendChild(pixel);
  }
}






createWhiteboard(gridSize)


// // Create a button and place it in the top of the 
// const generateBoardButton = document.createElement('button')
// generateBoardButton.className = 'generateBoardButton'
// generateBoardButton.textContent = 'Click to change grid size'
// generateBoardButton.addEventListener('click', gridSizeButton)
// document.body.appendChild(generateBoardButton)



// // Create a 

// // Create a whiteboard div and append it to the body
// const whiteboard = document.getElementById('whiteboard')
// whiteboard.className = 'whiteboard';
// document.body.appendChild(whiteboard);


// // Function to adjust the size of the grid
// function gridSizeButton(){
//     boardSize = prompt('What size grid would you like? eg. 10 = 10*10')
//     createWhiteboard(boardSize)
//     adjustBoardSize(boardSize)
// }


// // Function to generate a random hex color code
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
  
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
  
//   return color;
// }

// // Function to adjust the board size
// function adjustBoardSize(gridSize) {
//   whiteboard.style.maxWidth = `${10 * gridSize}px`;
// }

// let boardSize = 16;
// createWhiteboard(boardSize);
// adjustBoardSize(boardSize);
