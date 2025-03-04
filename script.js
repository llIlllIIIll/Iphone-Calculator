document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    function updateScreen(value) {
        screen.textContent = value;
    }

    function handleNumber(num) {
        if (currentInput.length < 9) {
            currentInput += num;
            updateScreen(currentInput);
        }
    }

    function handleOperator(op) {
        if (currentInput === "" && previousInput === "") return;

        if (previousInput !== "") {
            calculate();
        } else {
            previousInput = currentInput;
        }

        operator = op;
        currentInput = "";
    }

    function calculate() {
        let result = 0;
        let prev = parseFloat(previousInput);
        let curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (operator) {
            case "+":
                result = prev + curr;
                break;
            case "−":
                result = prev - curr;
                break;
            case "×":
                result = prev * curr;
                break;
            case "÷":
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString().slice(0, 9);
        previousInput = "";
        operator = "";
        updateScreen(currentInput);
    }

    function resetCalculator() {
        currentInput = "";
        previousInput = "";
        operator = "";
        updateScreen("0");
    }

    function toggleSign() {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateScreen(currentInput);
        }
    }

    function percentage() {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateScreen(currentInput);
        }
    }

    document.querySelectorAll(".number").forEach(button => {
        button.addEventListener("click", () => {
            handleNumber(button.textContent);
        });
    });

    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "=") {
                calculate();
            } else {
                handleOperator(button.textContent);
            }
        });
    });

    document.querySelectorAll(".utility").forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "AC") {
                resetCalculator();
            } else if (button.textContent === "+/-") {
                toggleSign();
            } else if (button.textContent === "%") {
                percentage();
            }
        });
    });
});
