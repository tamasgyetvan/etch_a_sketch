const container = document.getElementById("container");

function addGrid() {

    for (let i = 0; i < 256; i++) {

        const content = document.createElement("div");
        content.classList.add("grid-item");
        container.appendChild(content);     
        
    }

}

addGrid();

document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("mouseover", event => {
        event.target.className = "hover";

    
    
    });
});


function clearGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    

}

document.getElementById("clearGridBtn").onclick = function() {
    clearGrid();
}