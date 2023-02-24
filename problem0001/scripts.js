function sumMultiples(firstNum, secondNum, maxNum) {
    let sum = 0;
    for (let i = 0; i < maxNum; i++) {
        if (checkFirstNum(i, firstNum) | checkSecondNum(i, secondNum)) {
            sum = sum + i;
        }
    }
    return sum;
}

function checkFirstNum(counter, firstNum) {
    let remainder = counter % firstNum;
    if (remainder === 0) {
        return true;
    }
}

function checkSecondNum(counter, secondNum) {
    let remainder = counter % secondNum;
    if (remainder == 0) {
        return true;
    }
}

console.log(sumMultiples(3, 5, 1000));