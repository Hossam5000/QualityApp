export function createFloors(container, floors) {
    floors.forEach(floorItem => {
        const floor = document.createElement("section");
        floor.classList.add("floor");
        floor.setAttribute("id", floorItem.floorId);

        const floorTitle = document.createElement("h1");
        floorTitle.classList.add("floor-title");
        floorTitle.textContent = floorItem.floorId;
        floor.append(floorTitle);

        floorItem.sections.forEach(sectionItem => {
            const section = document.createElement("section");
            section.classList.add("sections");

            const sectionTitle = document.createElement("h2");
            sectionTitle.classList.add("section-title");
            sectionTitle.textContent = sectionItem.sectionTitle;

            const divisions = document.createElement("div");
            divisions.classList.add("divisions");

            sectionItem.divisions.forEach(divisionItem => {
                const division = document.createElement("div");
                division.classList.add("division");

                const divisionTitle = document.createElement("h3");
                divisionTitle.classList.add("division-title");
                divisionTitle.textContent = divisionItem.divisionTitle;

                const questionsContainer = document.createElement("div");
                questionsContainer.classList.add("division-questions");

                divisionItem.questions.forEach(questionText => {
                    const question = document.createElement("div");
                    question.classList.add("division-question");

                    const label = document.createElement("label");
                    label.classList.add("label");
                    label.textContent = questionText;

                    const input = document.createElement("input");
                    input.classList.add("input");
                    input.type = "number";
                    input.min = "0";
                    input.max = "10";
                    input.step = "1";

                    input.addEventListener("blur", () => {
                        if (input.value > 10) input.value = 10;
                        else if (input.value < 0) input.value = 0;
                    });

                    input.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            if (input.value > 10) input.value = 10;
                            else if (input.value < 0) input.value = 0;
                        }
                    });

                    question.append(label, input);
                    questionsContainer.append(question);
                });

                division.append(divisionTitle, questionsContainer);
                divisions.append(division);
            });

            section.append(sectionTitle, divisions);
            floor.append(section);
        });

        container.append(floor);
    });
}