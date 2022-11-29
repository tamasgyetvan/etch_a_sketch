const container = document.getElementById("container");
let gridSize = 16;

function addGrid(size) {    

    container.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    container.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
    let numberOfGridItem = size*size;

    for (let i = 0; i < numberOfGridItem; i++) {

        const content = document.createElement("div");
        content.classList.add("grid-item");
        container.appendChild(content);     
        
    };
};

function addMouseOverEffect() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", event => {
            event.target.className = "hover";
    
        
        
        });
    });
};

function clearCurrentGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    addGrid(gridSize);
    addMouseOverEffect();
        
    };

function removeCurrentGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
}



document.getElementById("clearGridBtn").onclick = function() {
    clearCurrentGrid();
};

document.getElementById("changeGridBtn").onclick = function() {
    gridSize = prompt("Please enter the size of the grid (nxn):");
    /**Removes all child elements of container*/
    removeCurrentGrid();
    addGrid(gridSize);
    addMouseOverEffect();
    console.log(gridSize);

};

addGrid(gridSize);
addMouseOverEffect();
console.log(gridSize);