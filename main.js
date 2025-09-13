// imports
import floor0 from "./database/floor-0.js";
import floor1 from "./database/floor-1.js";
import floor2 from "./database/floor-2.js";
import floor3 from "./database/floor-3.js";
import floor4 from "./database/floor-4.js";

// CONS & VARS
const container = document.querySelector(".container");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");
const floors = [floor0, floor1, floor2, floor3, floor4];


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

// EVENTS
// save
saveBtn.addEventListener("click", () => {
    const savedData = [];

    document.querySelectorAll(".floor").forEach(floor => {
        const floorId = floor.getAttribute("id");
        const floorData = {
            floorId,
            sections: []
        };

        floor.querySelectorAll(".sections").forEach(section => {
            const sectionTitle = section.querySelector(".section-title").textContent;
            const sectionData = {
                sectionTitle,
                divisions: []
            };

            section.querySelectorAll(".division").forEach(division => {
                const divisionTitle = division.querySelector(".division-title").textContent;
                const divisionData = {
                    divisionTitle,
                    questions: []
                };

                division.querySelectorAll(".division-question").forEach(question => {
                    const label = question.querySelector(".label").textContent;
                    const input = question.querySelector(".input").value;

                    divisionData.questions.push({
                        questionLabel: label,
                        value: Number(input)
                    });
                });

                sectionData.divisions.push(divisionData);
            });

            floorData.sections.push(sectionData);
        });

        savedData.push(floorData);
    });

    localStorage.setItem("dashboardData", JSON.stringify(savedData)); // ✅ Save to localStorage
    console.log("Saved Data:", savedData);
});

// clear
clearBtn.addEventListener("click", () => {
    // Step 1: Confirm before clearing
    if (!confirm("تحذير: سيتم حذف كل البيانات!")) return;

    // Step 2: Reset all input fields to default value (0)
    document.querySelectorAll(".input").forEach(input => {
        input.value = 0;
    });

    // Step 3: Remove saved data from localStorage
    localStorage.removeItem("dashboardData");

    // Step 4: Visual toast-style confirmation
    const toast = document.createElement("div");
    toast.textContent = "Dashboard reset: all values set to 0.";
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#4caf50",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: "1000",
        fontFamily: "sans-serif",
        fontSize: "14px",
        opacity: "0",
        transition: "opacity 0.5s ease-in-out"
    });

    document.body.appendChild(toast);

    // Animate toast in
    requestAnimationFrame(() => {
        toast.style.opacity = "1";
    });

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 3000);

    console.log("Dashboard inputs reset to 0 and localStorage cleared.");
});
// load
window.addEventListener("load", () => {
    createFloors(); // ✅ Build the DOM first

    const savedData = JSON.parse(localStorage.getItem("dashboardData"));
    if (!savedData) return;

    savedData.forEach((floorItem, floorIndex) => {
        const floor = document.querySelectorAll(".floor")[floorIndex];
        if (!floor) return;

        const sectionElements = floor.querySelectorAll(".sections");
        floorItem.sections.forEach((sectionItem, sectionIndex) => {
            const section = sectionElements[sectionIndex];
            if (!section) return;

            const divisionElements = section.querySelectorAll(".division");
            sectionItem.divisions.forEach((divisionItem, divisionIndex) => {
                const division = divisionElements[divisionIndex];
                if (!division) return;

                const questionElements = division.querySelectorAll(".division-question");
                divisionItem.questions.forEach((questionItem, questionIndex) => {
                    const question = questionElements[questionIndex];
                    if (!question) return;

                    const input = question.querySelector("input");
                    if (input) {
                        input.value = questionItem.value;

                        function validateQuestionValue() {
                            if (input.value > 10) input.value = 10;
                            else if (input.value < 0) input.value = 0;
                        }

                        input.addEventListener("blur", validateQuestionValue);
                        input.addEventListener("keydown", (event) => {
                            if (event.key === "Enter") validateQuestionValue();
                        });
                    }
                });
            });
        });
    });

    console.log("Input values loaded from saved data.");
});


// excel function
exportBtn.addEventListener("click", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Hossam";
    workbook.created = new Date();

    const savedData = JSON.parse(localStorage.getItem("dashboardData"));
    if (!savedData) {
        alert("No saved data found.");
        return;
    }

    savedData.forEach(floor => {
        const sheet = workbook.addWorksheet(floor.floorId);

        sheet.addRow(["القسم الرئيسي", "القسم الفرعي", "السؤال", "التقييم"]);
        sheet.autoFilter = {
            from: {
                row: 1,
                column: 1
            },
            to: {
                row: 1,
                column: 4
            }
        };

        floor.sections.forEach(section => {
            section.divisions.forEach(division => {
                division.questions.forEach(question => {
                    sheet.addRow([
                        section.sectionTitle,
                        division.divisionTitle,
                        question.questionLabel,
                        question.value
                    ]);
                });
            });
        });

        sheet.columns.forEach(col => {
            col.width = 20;
        });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "GMP Report.xlsx";
    a.click();

    URL.revokeObjectURL(url);
});
