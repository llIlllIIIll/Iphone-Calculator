document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    let currentInput = "0";
    let operator = null;
    let firstOperand = null;

    // 🌙 다크모드 적용 (iOS Safari에서 초기 로딩 문제 해결)
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
 
    setTimeout(() => {
        if (darkMode === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }, 100); // Safari에서 스타일 적용 보정

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
});
