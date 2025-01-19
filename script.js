function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('sq');
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

function createNewGrid() {
    let newSize = prompt('Enter number of squares per side (1-100):');
    
    newSize = parseInt(newSize);
    
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }
    
    if (newSize > 100) {
        alert('Maximum size is 100. Please enter a smaller number');
        return;
    }
    
    createGrid(newSize);
}

function reset() {
    createGrid(16);
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(16);
});