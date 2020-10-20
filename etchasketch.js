function createGrid(gridSize) {
    for (let i=0; i < gridSize * gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = document.getElementById('container').offsetWidth / gridSize + "px";
        square.style.height = square.style.width;
        document.getElementById('container').appendChild(square);
    }
}

highlightCell =(e)=> {
    e.target.classList.add('grid-hover');
    let opacity = Number(e.target.style.opacity);
    let newOpacity = opacity + 0.10;
    Object.assign(e.target.style, {opacity: newOpacity});
}

enableSketch =()=> {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach(item => item.addEventListener('mouseover',highlightCell));
}

clearGrid =()=> {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach(item => item.classList.remove('grid-hover'));
}

deleteGrid =()=> {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach(item => item.remove());
}

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const clearButton = document.createElement('button');
clearButton.innerText = 'Clear Grid';
buttonContainer.appendChild(clearButton);

const resizeButton = document.createElement('button');
resizeButton.innerText = 'Resize Grid';
buttonContainer.appendChild(resizeButton);

document.getElementById('container').parentNode.prepend(buttonContainer);

createGrid(16);
enableSketch();

clearButton.onclick =()=> clearGrid();
resizeButton.onclick =()=> {
    let newGridSize = prompt('Select new size for grid from 1-100.');
    if (newGridSize > 0) {
        if (newGridSize > 100) {
        alert('Size cannot be over 100. The grid size will be 100.');
        let newGridSize = 100;
        }
        deleteGrid();
        createGrid(newGridSize);
        enableSketch();  
    }
    else if (typeof newGridSize !== 'number') {
        return;
    }
}