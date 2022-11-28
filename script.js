const container = document.getElementById("container");

function addGrid() {

    for (let i = 0; i < 257; i++) {

        const content = document.createElement("div");
        content.classList.add("grid");
        container.appendChild(content);       
        
    }

}

addGrid();

document.querySelectorAll(".grid").forEach(item => {
    item.addEventListener("mouseover", event => {
        event.target.className = "hover";

    
    item.addEventListener("mouseout", event => {
        event.target.className = "grid";
    });
    });
});

