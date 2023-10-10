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
