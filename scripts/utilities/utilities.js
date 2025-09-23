const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");

export function utilities() {
    // SAVE
    saveBtn.addEventListener("click", () => {
        const savedData = [];

        document.querySelectorAll(".floor").forEach(floor => {
            const floorId = floor.id;
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
    });

    // CLEAR
    clearBtn.addEventListener("click", () => {
        if (!confirm("تحذير: سيتم حذف كل البيانات!")) return;

        document.querySelectorAll(".input").forEach(input => {
            input.value = null;
        });

        localStorage.removeItem("dashboardData");
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
}