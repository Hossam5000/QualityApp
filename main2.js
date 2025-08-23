const responses = []

function saveResponse(button) {
    const input = button.previousElementSibling
    const value = input.value.trim()
    if (!value) return

    const index = Array.from(document.querySelectorAll('#inputs .input-group')).indexOf(button.parentElement)
    const existing = responses.find(r => r.id === index + 1)

    if (existing) {
        existing.response = value
    } else {
        responses.push({ id: index + 1, response: value })
    }

    input.value = ""
    renderOutput()
}

function renderOutput() {
    const output = document.getElementById("output")
    output.textContent = JSON.stringify(responses, null, 2)
}

function downloadJSON() {
    const blob = new Blob([JSON.stringify(responses, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "responses.json"
    a.click()
    URL.revokeObjectURL(url)
}
