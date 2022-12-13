const container = document.getElementById("container");
let gridSize = 16;
let selectedHover = "redHover";

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
            event.target.className = selectedHover;
    
        
        
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
};



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


document.querySelectorAll("#colorPicker").forEach(item => {
    item.addEventListener("click", event => {
        if (event.target.id === "redButton") {
            selectedHover = "redHover";
        }

        if (event.target.id === "greenButton") {
            selectedHover = "greenHover";
        }

        if (event.target.id === "blueButton") {
            selectedHover = "blueHover";
        }

        if (event.target.id === "yellowButton") {
            selectedHover = "yellowHover";
        }

        
    });
});







addGrid(gridSize);
addMouseOverEffect();
