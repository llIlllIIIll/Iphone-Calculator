document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    let currentInput = "0";
    let operator = null;
    let firstOperand = null;

    // 🌙 A 페이지에서 저장한 다크 모드 설정 가져오기
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

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
