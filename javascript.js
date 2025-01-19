
// add 16 x 16 grid of divs by js
// 16 spans with 16 divs

let grid_size = 16;

const container = document.getElementById('container');

function createGrid() {
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
}

createGrid();

const gridDivs = document.querySelectorAll('.colored')
gridDivs.forEach(div => {
    div.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'blue';
    });
});
