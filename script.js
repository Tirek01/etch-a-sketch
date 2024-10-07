const container = document.querySelector('.container');

// create grid
function addGrid(gridSize) {
    // limit grid elements
    gridSize = (gridSize <= 100) ? gridSize : 100;
    for (let i = 0; i < gridSize; i++) {
        const gridRowElement = document.createElement('div');
        gridRowElement.classList.add('gridRow')
        container.appendChild(gridRowElement);
    
        for (let i = 0; i < gridSize; i++) {
            const gridColumnElement = document.createElement('div');
            gridColumnElement.classList.add('gridElement');
            gridColumnElement.style.height = `${960 / gridSize}px`;
            gridRowElement.appendChild(gridColumnElement);
        }
    }

    // random background color on grid elements
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
            element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            element.style.opacity = `${+element.style.opacity + 0.1}`;
        })
    })        
}
// remove all grid elements
function removeGrid() {
    const allGridElements = document.querySelectorAll('.container div');
    allGridElements.forEach((element) => element.remove());
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    removeGrid()
    let size = +prompt('Enter grid size! Example 16 == (16x16 grid)');
    addGrid(size);
})













