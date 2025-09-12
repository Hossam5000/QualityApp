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
        floorTitle.classList.add("floor-title");
        floorTitle.textContent = `${floorItem.floorId}`;

        // append floor titles
        floor.append(floorTitle);

        floorItem.sections.forEach((item) => {

            // create floorSections
            const floorSections = document.createElement("section");
            floorSections.classList.add("sections");

            // create floorSectionsTitle
            const floorSectionsTitle = document.createElement("h2");
            floorSectionsTitle.classList.add("section-title");
            floorSectionsTitle.textContent = item.sectionTitle;

            // create SectionDivisions
            const sectionDivisions = document.createElement("div");
            sectionDivisions.classList.add("divisions");

            item.divisions.forEach((divisionItem => {
                const division = document.createElement("div");
                division.classList.add("division");
                division.textContent = divisionItem.divisionTitle;
                sectionDivisions.append(division);
            }));


            // append floorSectionTitle to the section
            floorSections.append(floorSectionsTitle, sectionDivisions);
            floor.append(floorSections);
        });

        container.append(floor);
        console.log(floorItem.sections);
    });
}

createFloors();

// EVENTS

// excel function

