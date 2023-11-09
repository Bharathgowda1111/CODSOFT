document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let prevInput = "";
    let operator = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
                prevInput = "";
                operator = "";
                display.value = "";
            } else if (!isNaN(value)) {
                currentInput += value;
                display.value = currentInput;
            } else if (value === "+" || value === "-") {
                operator = value;
                prevInput = currentInput;
                currentInput = "";
            } else if (value === "=") {
                if (prevInput !== "" && currentInput !== "") {
                    const result = calculate(prevInput, currentInput, operator);
                    display.value = result;
                    currentInput = result;
                    prevInput = "";
                    operator = "";
                }
            }
        });
    });

    function calculate(num1, num2, op) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (op === "+") return num1 + num2;
        if (op === "-") return num1 - num2;
    }
});
