// imports
import floor0 from "./database/floor-0.js";
import floor1 from "./database/floor-1.js";
import floor2 from "./database/floor-2.js";
import floor3 from "./database/floor-3.js";
import floor4 from "./database/floor-4.js";

// CONS & VARS
const topIcon = document.getElementById("top-icon");
const closeSidebar = document.querySelector(".close-sidebar");
const sideBar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");
const dateEle = document.getElementById("date");
const floors = [floor0, floor1, floor2, floor3, floor4];

// FUNCTIONS
function createFloors() {
    floors.forEach(floorItem => {
        const floor = document.createElement("section");
        floor.classList.add("floor");
        floor.setAttribute("id", `${floorItem.floorId}`);

        const floorTitle = document.createElement("h1");
        floorTitle.classList.add("floor-title");
        floorTitle.textContent = `${floorItem.floorId}`;
        floor.append(floorTitle);

        floorItem.sections.forEach(item => {
            const floorSections = document.createElement("section");
            floorSections.classList.add("sections");

            const floorSectionsTitle = document.createElement("h2");
            floorSectionsTitle.classList.add("section-title");
            floorSectionsTitle.textContent = item.sectionTitle;

            const sectionDivisions = document.createElement("div");
            sectionDivisions.classList.add("divisions");

            item.divisions.forEach(divisionItem => {
                const division = document.createElement("div");
                division.classList.add("division");

                const divisionTitle = document.createElement("h3");
                divisionTitle.classList.add("division-title");
                divisionTitle.textContent = divisionItem.divisionTitle;

                const divisionQuestions = document.createElement("div");
                divisionQuestions.classList.add("division-questions");

                divisionItem.questions.forEach(questionItem => {
                    const question = document.createElement("div");
                    question.classList.add("division-question");

                    const questionLabel = document.createElement("label");
                    questionLabel.classList.add("label");
                    questionLabel.textContent = questionItem;

                    const questionInput = document.createElement("input");
                    questionInput.classList.add("input");
                    questionInput.setAttribute("type", "number");
                    questionInput.setAttribute("min", "0");
                    questionInput.setAttribute("max", "10");
                    questionInput.setAttribute("step", "1");

                    function validateQuestionValue() {
                        if (questionInput.value > 10) questionInput.value = 10;
                        else if (questionInput.value < 0) questionInput.value = 0;
                    }

                    questionInput.addEventListener("blur", validateQuestionValue);
                    questionInput.addEventListener("keydown", (event) => {
                        if (event.key === "Enter") validateQuestionValue();
                    });

                    question.append(questionLabel, questionInput);
                    divisionQuestions.append(question);
                });

                division.append(divisionTitle, divisionQuestions);
                sectionDivisions.append(division);
            });

            floorSections.append(floorSectionsTitle, sectionDivisions);
            floor.append(floorSections);
        });

        container.append(floor);
    });
}

function createSidebarLinks() {
    const floorLinks = document.getElementById("floorLinks");

    floors.forEach((floorItem) => {
        // creating the anchor tag
        const a = document.createElement("a");
        a.setAttribute("href", `#${floorItem.floorId}`);
        a.textContent = `${floorItem.floorId}`;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById(floorItem.floorId).scrollIntoView({
                behavior: "smooth",
            });
            sideBar.classList.remove("sidebar-active");
        });

        // creating the li ele
        const li = document.createElement("li");

        // appending item to each other
        li.append(a);
        floorLinks.append(li);
    });

    // creating a data button link
    const dataBtns = document.createElement("a");
    dataBtns.textContent = "ازرار البيانات";
    dataBtns.setAttribute("id", "ازرار البيانات");
    dataBtns.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("controllers").scrollIntoView({
            behavior: "smooth",
        });
        sideBar.classList.remove("sidebar-active");
    });

    // createing the li that handle the dataBtns
    const btnLi = document.createElement("li");

    btnLi.append(dataBtns);
    floorLinks.append(btnLi);
};

// events
// opening the sidebar
topIcon.addEventListener("click", () => {
    sideBar.classList.add("sidebar-active");
});

closeSidebar.addEventListener("click", () => {
    sideBar.classList.remove("sidebar-active");
});


// LOAD
window.addEventListener("load", () => {
    const dateDay = new Date().getDate();
    const dateMonth = new Date().getMonth() + 1;
    const dateYear = new Date().getFullYear();
    const date = `${dateDay}/${dateMonth}/${dateYear}`;
    dateEle.textContent = date;

    createFloors();
    createSidebarLinks();

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
                        input.value = questionItem.value / 10;

                        function validateQuestionValue() {
                            if (input.value > 100) input.value = 100;
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

});

// SAVE
saveBtn.addEventListener("click", () => {
    const savedData = [];

    document.querySelectorAll(".floor").forEach(floor => {
        const floorId = floor.getAttribute("id");
        const floorData = { floorId, sections: [] };

        floor.querySelectorAll(".sections").forEach(section => {
            const sectionTitle = section.querySelector(".section-title").textContent;
            const sectionData = { sectionTitle, divisions: [] };

            section.querySelectorAll(".division").forEach(division => {
                const divisionTitle = division.querySelector(".division-title").textContent;
                const divisionData = { divisionTitle, questions: [] };

                division.querySelectorAll(".division-question").forEach(question => {
                    const label = question.querySelector(".label").textContent;
                    const input = question.querySelector(".input").value;

                    divisionData.questions.push({
                        questionLabel: label,
                        value: Number(input * 10)
                    });
                });

                sectionData.divisions.push(divisionData);
            });

            floorData.sections.push(sectionData);
        });

        savedData.push(floorData);
    });

    localStorage.setItem("dashboardData", JSON.stringify(savedData));
    console.log("Saved Data:", savedData);
});

// CLEAR
clearBtn.addEventListener("click", () => {
    if (!confirm("تحذير: سيتم حذف كل البيانات!")) return;

    document.querySelectorAll(".input").forEach(input => {
        input.value = 0;
    });

    localStorage.removeItem("dashboardData");

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
    requestAnimationFrame(() => {
        toast.style.opacity = "1";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 3000);

    console.log("Dashboard inputs reset to 0 and localStorage cleared.");
});

// EXPORT
exportBtn.addEventListener("click", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Hossam Hasan";
    workbook.created = new Date();

    const savedData = JSON.parse(localStorage.getItem("dashboardData"));
    if (!savedData) {
        alert("من فضلك ادخل بعض البيانات.");
        return;
    }

    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    savedData.forEach(floor => {
        const maxSheetNameLength = 40;
        const sheetName = floor.floorId.length > maxSheetNameLength
            ? floor.floorId.slice(0, maxSheetNameLength)
            : floor.floorId;

        const sheet = workbook.addWorksheet(sheetName);
        sheet.addRow(["القسم", "المسؤلية", "السؤال", `${formattedDate}`]);

        floor.sections.forEach(section => {
            section.divisions.forEach(division => {
                division.questions.forEach(question => {
                    sheet.addRow([
                        section.sectionTitle,
                        division.divisionTitle,
                        question.questionLabel,
                        question.value,
                    ]);
                });
            });
        });

        sheet.columns.forEach(col => {
            col.width = 20;
        });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GMP_Report_${formattedDate.replace(/\//g, "-")}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
});

