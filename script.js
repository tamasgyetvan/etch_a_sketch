const container = document.getElementById("container");

function addGrid(size) {
    

    container.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    container.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
    let numberOfGridItem = size*size;
    for (let i = 0; i < numberOfGridItem; i++) {

        const content = document.createElement("div");
        content.classList.add("grid-item");
        container.appendChild(content);     
        
    }

}

function addMouseOverEffect() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", event => {
            event.target.className = "hover";
    
        
        
        });
    });
}




function clearGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    

}

document.getElementById("clearGridBtn").onclick = function() {
    clearGrid();
}

document.getElementById("addGridBtn").onclick = function() {
    let gridSize = prompt("Please enter the size of the grid (nxn):");
    clearGrid();
    addGrid(gridSize);
    addMouseOverEffect();

}