// imports
import floor1 from "./database/floor-1.js";
import floor2 from "./database/floor-2.js";
import floor3 from "./database/floor-3.js";

// CONS & VARS
const container = document.querySelector(".container");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");
const floors = [floor1, floor2, floor3];





// FUNCTIONS
function createFloors() {
    floors.forEach(floorItem => {
        // create floors
        const floor = document.createElement("section");
        floor.classList.add("floor");
        floor.setAttribute("id", `${floorItem.floorId}`);

        // create floorTitles
        const floorTitle = document.createElement("h1");
        floorTitle.classList.add("floorTitle");
        floorTitle.textContent = `${floorItem.floorId}`;

        // create floorSections
        const floorSections = document.createElement("section");
        floorSections.classList.add("sections");


        // append elements
        floor.append(floorTitle);

        container.append(floor);
        console.log(floorTitle);
    });
}

createFloors();

// EVENTS

// excel function

