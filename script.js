document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    let currentInput = "0";
    let operator = null;
    let firstOperand = null;

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.value;

            if (!isNaN(value) || value === ".") {
                handleNumber(value);
            } else if (value === "AC") {
                resetCalculator();
            } else if (value === "+/-") {
                toggleSign();
            } else if (value === "%") {
                applyPercentage();
            } else if (value === "=") {
                calculateResult();
            } else {
                handleOperator(value);
            }
            updateScreen();
        });
    });

    function handleNumber(value) {
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }

    function handleOperator(value) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            calculateResult();
            firstOperand = parseFloat(currentInput);
        }
        operator = value;
        currentInput = "0";
    }

    function calculateResult() {
        if (firstOperand === null || operator === null) return;

        let secondOperand = parseFloat(currentInput);
        switch (operator) {
            case "+": firstOperand += secondOperand; break;
            case "-": firstOperand -= secondOperand; break;
            case "*": firstOperand *= secondOperand; break;
            case "/": firstOperand /= secondOperand; break;
        }

        currentInput = firstOperand.toString();
        operator = null;
    }

    function resetCalculator() {
        currentInput = "0";
        firstOperand = null;
        operator = null;
        updateScreen();
    }

    function updateScreen() {
        screen.textContent = parseFloat(currentInput).toLocaleString();
    }
});
