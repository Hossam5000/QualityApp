// vars & cons
const inputs = document.querySelectorAll("input");
const saveBtn = document.getElementById("btn");
const msgBox = document.getElementById("msgBox");
const exportBtn = document.getElementById("export");

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