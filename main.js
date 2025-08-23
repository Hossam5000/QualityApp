const questions = document.querySelectorAll(".question");

function loadResponses() {
    const saved = JSON.parse(localStorage.getItem("responses")) || [];
    questions.forEach((q) => {
        const label = q.querySelector("span").textContent;
        const input = q.querySelector("input");
        const match = saved.find((item) => item.quest === label);
        if (match) input.value = match.response;
    });
}

function saveResponse(questionElement) {
    const label = questionElement.querySelector("span").textContent;
    const input = questionElement.querySelector("input");
    const value = input.value.trim();

    if (!value) return;

    let saved = JSON.parse(localStorage.getItem("responses")) || [];

    const index = saved.findIndex((item) => item.quest === label);
    if (index !== -1) {
        saved[index].response = value;
    } else {
        saved.push({ quest: label, response: value });
    }

    localStorage.setItem("responses", JSON.stringify(saved));
    console.log(`Saved: ${label} → ${value}`);
}

questions.forEach((q) => {
    const button = q.querySelector("button");
    button.addEventListener("click", () => saveResponse(q));
});

loadResponses();
