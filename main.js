// cons & vars
const dataFields = [];
const question1 = document.getElementById("question1")
const input = document.getElementById("input");
const saveBtn = document.getElementById("btn");

// functions
function save() {
    dataFields.push({
        "quest": input.parentElement.querySelector("span").textContent,
        "response": input.value,
    });

    localStorage.setItem("responses", JSON.stringify(dataFields));
    console.log(input.value);
    input.value = "";
    console.log(input.parentElement.querySelector("span").textContent)
    console.log(dataFields)
}
saveBtn.addEventListener("click", save);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        save();
    }
});
// code

