
// add 16 x 16 grid of divs by js
// 16 spans with 16 divs

let grid = 16;
let grid_size = grid;

const container = document.getElementById('container');

function createGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        const span = document.createElement('span');
        span.id = `row ${i + 1}`;
        // span.textContent = `row ${i + 1}`;
        container.appendChild(span);
        for (let k = 0; k < grid_size; k++) {
            const gridDiv = document.createElement('div');
            gridDiv.id = `row ${i + 1} col ${k + 1}`;
            gridDiv.className = "colored";
            // gridDiv.textContent = `row ${i + 1} col ${k + 1}`;
            
            span.appendChild(gridDiv);
            
        }
    }

    const gridDivs = document.querySelectorAll('.colored')
    gridDivs.forEach(div => {
    div.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'blue';
    });
});
}

createGrid(grid_size);



const button = document.querySelector('button');
button.addEventListener('click', function() {
    // clear table by removing new divs
    container.replaceChildren();
    // get user input for new table
    let new_grid = parseInt(prompt("Enter a number for the new grid size"));
    createGrid(new_grid);
});
