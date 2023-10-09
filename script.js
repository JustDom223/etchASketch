let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

function whiteboard() {
    let numberOfDivs = 256;
    for (let n = 0; n < numberOfDivs; n++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        container.appendChild(pixel);
    } 
}

let pixel = whiteboard();

pixel.onmouseover =  console.log('EYYY')
