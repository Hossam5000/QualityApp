// //cons & vars
// const inputs = document.querySelectorAll(".input");
// const btn = document.getElementById("btn");

// // functions
// function show() {
//     console.log("success")
// }

// // events
// btn.addEventListener("click", show);

// // storage
// inputs.forEach((item, index) => {
//     localStorage.setItem(`question_${index}`, item.value);
//     console.log(item.value)
// });


// // code

// cons & vars
const inputs = document.querySelectorAll(".input");
const btn = document.getElementById("btn");

// functions
function save() {
    inputs.forEach((item, index) => {
        localStorage.setItem(`question_${index + 1}`, item.value);
        console.log(item.value);
    });
}

// events
btn.addEventListener("click", save);
window.addEventListener("load", () => {
    console.log("load")
})
