function sumSquares(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i*i;
        console.log(total);
    }
    return total;
}

function squareSums(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    total = total * total;
    return total;
}

function diffSumSquare(num) {
    return squareSums(num) - sumSquares(num);
}