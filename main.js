// vars & cons
const inputs = document.querySelectorAll(".input");
const saveBtn = document.getElementById("btn");
const exportBtn = document.getElementById("export");
const messageBox = document.getElementById("saveMessage");

// functions
// --save
function save() {
    const newEntry = {};

    inputs.forEach((item) => {
        const proKey = item.dataset.pro;

        newEntry[item.id] = item.value;
        if (proKey) {
            newEntry[proKey] = "بورعي😂";
        }

    });

    newEntry.timestamp = new Date().toISOString();

    localStorage.setItem("Quality_Report", JSON.stringify(newEntry));

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
    const savedData = JSON.parse(localStorage.getItem("Quality_Report")) || {};
    console.log("Saved data:", savedData);
});

// Save on button click
saveBtn.addEventListener("click", save);

// Export to Excel (two-column format)
exportBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("Quality_Report"));

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

    XLSX.writeFile(workbook, "Quality_Report.xlsx");
});
