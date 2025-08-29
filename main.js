const saveBtn = document.getElementById("saveBtn");
const exportBtn = document.getElementById("exportBtn");
const clearBtn = document.getElementById("clearBtn");
const msgBox = document.getElementById("msgBox");

function getInputs() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        comment: document.getElementById("comment").value
    };
}

saveBtn.addEventListener("click", () => {
    const data = getInputs();
    localStorage.setItem("FormData", JSON.stringify(data));
    msgBox.textContent = "✅ Data saved!";
    setTimeout(() => msgBox.textContent = "", 1500);
});

exportBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("FormData"));
    if (!data) {
        alert("No data to export.");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet([data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FormData");
    XLSX.writeFile(workbook, "FormData.xlsx");
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("FormData");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    msgBox.textContent = "🧹 Form cleared.";
    setTimeout(() => msgBox.textContent = "", 1500);
});
