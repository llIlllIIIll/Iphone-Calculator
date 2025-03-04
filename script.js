let display = document.getElementById("display");
let equation = "";
let secretNumber = ""; 

function pressKey(value) {
    if (value === "X") {
        // 비공개 숫자를 입력하는 단계
        if (secretNumber.length < 9) {
            secretNumber += Math.floor(Math.random() * 9) + 1; 
            display.innerText = secretNumber;
        }
    } else {
        equation += value;
        display.innerText = equation;
    }
}

function clearDisplay() {
    equation = "";
    secretNumber = "";
    display.innerText = "0";
}

function calculate() {
    let publicResult = eval(equation); // 공개 숫자 결과
    let finalNumber = 248240749; // 예제: 24년 8월 24일 07시 49분

    let X = finalNumber / publicResult; 
    display.innerText = X.toFixed(0);
}
