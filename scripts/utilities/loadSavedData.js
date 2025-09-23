export function loadSavedData() {
    const savedData = JSON.parse(localStorage.getItem("dashboardData"));
    if (!savedData) return;

    savedData.forEach((floorItem, floorIndex) => {
        const floor = document.querySelectorAll(".floor")[floorIndex];
        if (!floor) return;

        const sections = floor.querySelectorAll(".sections");
        floorItem.sections.forEach((sectionItem, sectionIndex) => {
            const section = sections[sectionIndex];
            if (!section) return;

            const divisions = section.querySelectorAll(".division");
            sectionItem.divisions.forEach((divisionItem, divisionIndex) => {
                const division = divisions[divisionIndex];
                if (!division) return;

                const questions = division.querySelectorAll(".division-question");
                divisionItem.questions.forEach((questionItem, questionIndex) => {
                    const question = questions[questionIndex];
                    if (!question) return;

                    const input = question.querySelector("input");
                    if (input) {
                        input.value = questionItem.value / 10;

                        input.addEventListener("blur", () => {
                            if (input.value > 100) input.value = 100;
                            else if (input.value < 0) input.value = 0;
                        });

                        input.addEventListener("keydown", (e) => {
                            if (e.key === "Enter") {
                                if (input.value > 100) input.value = 100;
                                else if (input.value < 0) input.value = 0;
                            }
                        });
                    }
                });
            });
        });
    });
}