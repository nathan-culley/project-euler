function sumMultiples(firstNum, secondNum, maxNum) {
    let sum = 0;
    for (let i = 0; i < maxNum; i++) {
        if (i % firstNum == 0 | i % secondNum == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumMultiples(3,5,1000));

const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const upperNum = document.getElementById("upper-bound");
const submitBtn = document.getElementById("submit-btn");
const outputNum = document.getElementById("output-number");


submitBtn.addEventListener("click", function() {
    event.preventDefault();
    outputNum.textContent = sumMultiples(firstInput.value, secondInput.value, upperNum.value);
})