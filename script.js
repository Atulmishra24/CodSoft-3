document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    let currentOperation = "";
    let isResultDisplayed = false;

    document.querySelector(".buttons").addEventListener("click", function(e) {
        if (e.target.tagName === "BUTTON") {
            const value = e.target.getAttribute("data-value");

            // If a result is currently displayed and a number is pressed next, clear the display
            if (isResultDisplayed && !isNaN(value)) {
                currentOperation = "";
                isResultDisplayed = false;
            }

            if (value === "=") {
                try {
                    currentOperation = eval(currentOperation).toString();
                    isResultDisplayed = true;
                } catch (err) {
                    currentOperation = "Error";
                }
            } else if (value === "CE") {
                currentOperation = ""; // Clear the current entry
            } else if (value === "C") {
                currentOperation = ""; // Clear everything
                isResultDisplayed = false;
            } else if (value === "remove") {
                currentOperation = currentOperation.slice(0, -1); // Remove the last character
            } else if (value === "." && currentOperation.slice(-1) === ".") {
                // Prevent adding multiple decimals in a row
                return;
            } else {
                currentOperation += value;
            }

            output.value = currentOperation;
        }
    });
});
