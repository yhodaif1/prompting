document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = [];
    const textboxes = [];
    const outputText = document.getElementById("outputText");

    // Collect all dropdowns and textboxes into arrays
    for (let i = 1; i <= 6; i++) {
        dropdowns.push(document.getElementById(`dropdown${i}`));
        textboxes.push(document.getElementById(`textBox${i}`));
    }

    // Add event listeners for all dropdowns and textboxes
    dropdowns.forEach((dropdown, index) => {
        dropdown.addEventListener("change", () => updateOutput(index));
    });

    textboxes.forEach((textbox, index) => {
        textbox.addEventListener("input", () => updateOutput(index));
    });

    function updateOutput(index) {
        const selectedValues = dropdowns.map((dropdown, i) => {
            if (i === index) {
                return `${dropdown.value} ${textboxes[i].value}`;
            } else {
                return dropdown.value;
            }
        });

        const resultText = selectedValues.join(" ");
        outputText.textContent = resultText;
    }
});
