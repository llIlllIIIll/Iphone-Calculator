let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;
let shouldResetDisplay = false;

// 숫자 입력
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }
    currentInput += number;
    updateDisplay();
}

// 연산자 설정
function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculateResult();
    }
    operator = op;
    shouldResetDisplay = true;
}

// 결과 계산
function calculateResult() {
    if (firstOperand === null || operator === "") return;

    let secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = secondOperand !== 0 ? firstOperand / secondOperand : "오류";
            break;
    }

    firstOperand = result;
    currentInput = result.toString();
    operator = "";
    shouldResetDisplay = true;
    updateDisplay();
}

// 화면 업데이트 (3자리마다 콤마 추가)
function updateDisplay() {
    display.textContent = parseFloat(currentInput).toLocaleString("ko-KR");
}

// 화면 초기화
function clearDisplay() {
    currentInput = "";
    firstOperand = null;
    operator = "";
    shouldResetDisplay = false;
    display.textContent = "0";
}
