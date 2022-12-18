let maxNumber = 4000000;
function createFib(maxNum) {
    let sum = 0;
    let prevNum = 0;
    for (let i = 1; i < maxNum; i = i +prevNum) {
        if ( i % 2 == 0) {
            sum = sum + i;
        }
        //sum = sum + i;
        console.log (i, sum);
        prevNum = i - prevNum;
    }
    return sum;
}
let evenSum = createFib(maxNumber);
document.getElementById("solution").innerHTML += evenSum + ".";
