const display = document.querySelector('.display');
let currentInput = '0';
let operator = null;
let firstOperand = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (!isNaN(value) || value === '.') {
            handleNumber(value);
        } else if (value === 'AC') {
            resetCalculator();
        } else if (value === '+/-') {
            toggleSign();
        } else if (value === '%') {
            applyPercentage();
        } else if (value === '=') {
            calculateResult();
        } else {
            handleOperator(value);
        }
        updateDisplay();
    });
});

function handleNumber(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
}

function handleOperator(value) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = value;
        currentInput = '0';
    } else {
        calculateResult();
        operator = value;
    }
}

function calculateResult() {
    if (firstOperand === null || operator === null) return;

    let secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+': firstOperand += secondOperand; break;
        case '−': firstOperand -= secondOperand; break;
        case '×': firstOperand *= secondOperand; break;
        case '÷': firstOperand /= secondOperand; break;
    }

    currentInput = firstOperand.toString();
    operator = null;
}

function resetCalculator() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
}

function applyPercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
}

function updateDisplay() {
    display.innerText = parseFloat(currentInput).toLocaleString();
}
