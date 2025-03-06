document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    let currentInput = "0";
    let operator = null;
    let firstOperand = null;

    // 🔥 A 페이지에서 설정한 숫자 가져오기 🔥
    let targetNumber = localStorage.getItem("targetNumber"); // 저장된 목표 숫자 불러오기
    console.log("설정된 목표 숫자:", targetNumber); // 콘솔에서 정상적으로 불러오는지 확인

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

    function calculateResult() {
        if (firstOperand === null || operator === null) return;

        let secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case "+": result = firstOperand + secondOperand; break;
            case "-": result = firstOperand - secondOperand; break;
            case "*": result = firstOperand * secondOperand; break;
            case "/": result = firstOperand / secondOperand; break;
        }

        currentInput = result.toString();
        operator = null;

        // 🔥 비공개 숫자(X) 계산 🔥
        if (targetNumber) {
            let secretNumber = targetNumber / result;
            console.log("비공개 숫자 (X):", secretNumber);
        }
    }
});
