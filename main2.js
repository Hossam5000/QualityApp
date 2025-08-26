// vars & cons
const inputs = document.querySelectorAll("input");
const saveBtn = document.getElementById("btn");
const saveMsg = document.getElementById("saveMessage");
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
    console.log(list);
};
// events
window.addEventListener("load", () => {
    save();
});

saveBtn.addEventListener("click", save);