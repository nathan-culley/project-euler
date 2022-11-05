let runningTotal = 1;
const allFactors = [];
const countedArray = [];
let maxNum = 20;

function calcSmallestMultiple(maxNum, runningTotal) {
    runningTotal = getTotalMultiple(maxNum, runningTotal);
    runningTotal = divideTotal(maxNum, runningTotal);
    return runningTotal;
}

function getTotalMultiple(maxNum, runningTotal) {
    for (let i = 1; i <= maxNum; i++) {
        runningTotal = runningTotal * i;
        //console.log(runningTotal);
    }
    return runningTotal;
}

function divideTotal(maxNum, runningTotal) {
    console.log("Running divideTotal()");
    let subTotal = runningTotal;
    //console.log(subTotal);
    for (let counter = maxNum; counter >= 1; counter--) {
        console.log(runningTotal, subTotal, counter);
        subTotal = runningTotal / counter;
        console.log(runningTotal, subTotal, counter);
        let divisible = true;
        for (let i = 20; i >= 1; i--) {
            if (subTotal % i != 0) {
                console.log("break");
                divisible = false;
                
            }        
        }
        if (divisible == true) {
            runningTotal = subTotal;
        }
        
    }
    return runningTotal;
}