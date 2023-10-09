const whiteBoardElement = document.getElementById('whiteBoard');
const eraseButtonElement = document.getElementById('eraseButton');
const blackButtonElement = document.getElementById('blackButton');
const rainbowButtonElement = document.getElementById('rainbowButton');
const sliderElement = document.getElementById('slider')



// variables 
let gridSize = 16;
let rainbowBrush = true;
let blackBrush = 'black';

// clear the board
function clearBoard(){
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(function(pixel) {
    pixel.style.background = 'white'
  });
}

// Function to generate a random hex color code
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}


// // Clear the whiteboards existing grid to make room to the adjusted settings
// function removeBoard(){
//   whiteBoardElement.replaceChild();
// }


// Function to create a whiteboard with a specified number of pixels
function createWhiteboard(numDiv) {
  for (let n = 0; n < numDiv * numDiv; n++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${500 / numDiv}px`
    pixel.style.height = `${500 / numDiv}px`
    
    
    // Add a mouseover event listener to change the background to a random color
    pixel.addEventListener('mouseover', function () {
      let randomColor = getRandomColor();
      if (rainbowBrush === true){
        pixel.style.background = randomColor
      }else{
        pixel.style.background = 'black' 
        
      }
      
    });
    
    whiteBoardElement.appendChild(pixel);
  }
}



eraseButtonElement.addEventListener('click', clearBoard)
rainbowButtonElement.addEventListener('click', function(){
  rainbowBrush = true
});

blackButtonElement.addEventListener('click', function(){
  rainbowBrush = false
});

sliderElement.addEventListener('input', function(){
  const sliderValue = parseInt(sliderElement.value);

  switch(sliderValue){
    case 1:
      gridSize = 16;
      break;
    case 2:
      gridSize = 24;
      break;
    case 3:
      gridSize = 32;
      break;
    case 4:
      gridSize = 64;
      break;
      
  }
  whiteBoardElement.innerHTML = '';
  createWhiteboard(gridSize);
})

createWhiteboard(gridSize);


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
  
// // Function to adjust the board size
// function adjustBoardSize(gridSize) {
//   whiteboard.style.maxWidth = `${10 * gridSize}px`;
// }

// let boardSize = 16;
// createWhiteboard(boardSize);
// adjustBoardSize(boardSize);
