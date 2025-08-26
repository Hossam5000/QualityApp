// Select input fields and buttons
const inputs = document.querySelectorAll(".input");
const saveBtn = document.getElementById("btn");
const exportBtn = document.getElementById("export");
const messageBox = document.getElementById("saveMessage");

// Save function: stores one object with all input values
function save() {
    const newEntry = {};

    inputs.forEach((item) => {
        newEntry[item.id] = item.value;
    });

    newEntry.timestamp = new Date().toISOString();

    localStorage.setItem("questions_list", JSON.stringify(newEntry));

    console.log("Saved entry:", newEntry);

    // Show confirmation message
    messageBox.textContent = "تم الحفظ";

    // Clear message after 3 seconds
    setTimeout(() => {
        messageBox.textContent = "";
    }, 3000);
}

// Load saved data on page load
window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem("questions_list")) || {};
    console.log("Saved data:", savedData);
});

// Save on button click
saveBtn.addEventListener("click", save);

// Export to Excel (two-column format)
exportBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("questions_list"));

    if (!data || Object.keys(data).length === 0) {
        alert("لا توجد بيانات للتصدير.");
        return;
    }

    // Convert object to array of {Field, Value}
    const formatted = Object.entries(data).map(([key, value]) => ({
        Field: key,
        Value: value
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Questions");

    XLSX.writeFile(workbook, "questions_list.xlsx");
});
