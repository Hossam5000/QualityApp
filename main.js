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

                // adding the division titles and the questions container
                const divisionTitle = document.createElement("div");
                divisionTitle.classList.add("division-title");
                divisionTitle.textContent = divisionItem.divisionTitle;

                const divisionQuestions = document.createElement("div");
                divisionQuestions.classList.add("division-questions");
                // divisionQuestions.textContent = divisionItem.questions;

                // loop over each question
                divisionItem.questions.forEach((questionItem) => {
                    // create questions
                    const question = document.createElement("div");
                    question.classList.add("division-question");

                    // create question labels and inputs
                    const questionLabel = document.createElement("label");
                    questionLabel.classList.add("label");
                    questionLabel.textContent = questionItem;

                    const questionInput = document.createElement("input");
                    questionInput.classList.add("input");
                    questionInput.setAttribute("type", "number");
                    questionInput.setAttribute("min", "0");
                    questionInput.setAttribute("max", "10");
                    questionInput.setAttribute("step", "1");

                    // adding a function for the confirmation on the question value
                    function validateQuestionValue() {
                        if (questionInput.value > 10) {
                            questionInput.value = 10;
                        }
                        else if (questionInput.value < 0) {
                            questionInput.value = 0;
                        };
                    };

                    // add event listeners to the question input
                    questionInput.addEventListener("blur", () => {
                        validateQuestionValue();
                    });

                    questionInput.addEventListener("keydown", (event) => {
                        if (event.key === "Enter") {
                            validateQuestionValue();
                        }
                    });

                    question.append(questionLabel, questionInput);
                    divisionQuestions.append(question);
                });

                division.append(divisionTitle, divisionQuestions);
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

