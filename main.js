// Select all input fields and the save button
const inputs = document.querySelectorAll(".input");
const btn = document.getElementById("btn");

// Save function: pushes a new entry to the list in localStorage
function save() {
    // Get existing list or initialize empty array
    const existingData = JSON.parse(localStorage.getItem("questions_list")) || [];

    // Create a new entry object with input IDs and values
    const newEntry = {};
    inputs.forEach((item) => {
        newEntry[item.id] = item.value;
    });

    // Add timestamp (optional)
    newEntry.timestamp = new Date().toISOString();

    // Push new entry to the list
    existingData.push(newEntry);

    // Save updated list to localStorage
    localStorage.setItem("questions_list", JSON.stringify(existingData));

    console.log("Saved entry:", newEntry);
}

// Load function: logs all saved entries on page load
window.addEventListener("load", () => {
    const savedList = JSON.parse(localStorage.getItem("questions_list")) || [];
    console.log("All saved entries:", savedList);
});

// Event listener for save button
btn.addEventListener("click", save);
