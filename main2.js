function saveInput(inputId) {
    const inputElement = document.getElementById(inputId);
    const value = inputElement.value.trim();

    if (!value) {
        updateStatus("⚠️ Please enter a value before saving.");
        return;
    }

    // Save or update in localStorage
    localStorage.setItem(inputId, value);
    updateStatus(`✅ Saved: "${value}" to ${inputId}`);
    inputElement.value = "";
}

function updateStatus(message) {
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = message;
}
