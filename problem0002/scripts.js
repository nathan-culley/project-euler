function createFib(maxNum) {
    let sum = 0;
    let prevNum = 0;
    for (let i = 1; i < maxNum; i = i +prevNum) {
        if ( i % 2 == 0) {
            sum = sum + i;
        }
        prevNum = i - prevNum;
    }
    return sum;
}

console.log(createFib(4000000));

//check the console to see what was generated

const maxInput = document.getElementById("input-max");
const submitBtn = document.getElementById("submit-btn");
const displaySum = document.getElementById("output-number");

submitBtn.addEventListener("click", function() {
    event.preventDefault();
    displaySum.textContent = createFib(maxInput.value);
})