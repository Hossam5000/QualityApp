// vars & cons
const inputs = document.querySelectorAll("input");
const saveBtn = document.getElementById("btn");
const msgBox = document.getElementById("msgBox");
const exportBtn = document.getElementById("export");
const clearBtn = document.getElementById("clear");


// functions
function save() {
    const list = {};
    inputs.forEach((item) => {
        list[item.id] = item.value;
        if (item.dataset.pro) {
            list[item.dataset.pro] = "perfect👌";
        }
    });
    localStorage.setItem("Quality_Report", JSON.stringify(list));

    msgBox.textContent = "تم الحفظ";
    setTimeout(() => {
        msgBox.textContent = "";
    }, 1000);
    console.log(list);
};
// events
window.addEventListener("load", () => {
    const savedDate = JSON.parse(localStorage.getItem("Quality_Report")) || {};
    inputs.forEach((item) => {
        if (savedDate[item.id]) {
            item.value = savedDate[item.id];
        }
    });


});

saveBtn.addEventListener("click", save);



clearBtn.addEventListener("click", () => {
    localStorage.clear();
    inputs.forEach((input) => {
        input.value = "";
    });
});


// excel function
exportBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("Quality_Report"));

    if (!data || Object.keys(data).length === 0) {
        alert("لا توجد بيانات للتصدير.");
        return;
    }

    // Convert object to array of { Field, Value }
    const formatted = Object.entries(data).map(([key, value]) => ({
        Field: key,
        Value: value
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Quality_Report");

    XLSX.writeFile(workbook, "Quality_Report.xlsx");
});











