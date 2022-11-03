let runningTotal = 1;
const allPrimeFactors = [];
const countedArray = [];
let maxNum = 20;


function countdown(maxNum, runningTotal) {
for (let i = maxNum; i >= 1; i--) {
    //console.log(i, maxNum);
    if (multipleCounted(i) == true) {
        //console.log(i,multipleCounted(i));
        continue;
    }
    else {
        if (primeCheck(i) == true) {
            runningTotal *= i;
            countedArray.push(i);
            console.log(i);
            /*console.log(i);
            console.log(primeCheck(i));
            console.log(runningTotal);
            console.log(countedArray);*/
        }
        else {
            const counterFactors = findFactors(i);

            //console.log(counterFactors);
            let subCounter = i;
            //for (let factor of counterFactors) {
            for (let i = counterFactors.length - 1; i >= 0; i--) {
                let factor = counterFactors[i];
                if (inAPF(factor) == false) {
                    allPrimeFactors.push(factor);
                    //console.log(allPrimeFactors[allPrimeFactors.length - 1]);
                }
                else {
                    subCounter = subCounter / factor;
                    //console.log(subCounter);
                }
            }
            console.log(i);
            console.log(counterFactors);
            runningTotal *= subCounter;
            countedArray.push(subCounter);
        }
    }
    //console.log(countedArray);
    
    console.log(runningTotal);
}
return runningTotal;
}

function multipleCounted(num) {
    let product;
    for (let i = num; i >= 1; i --) {
        product = i * num;
        //console.log(num + "*" + i + "=" + product);
        //console.log(countedArray);
        //console.log(countedArray.includes(product));
    }
    return countedArray.includes(product);

}

function primeCheck(divisor) {
    let primeness = true;
    for (let i = 2; i < divisor; i ++) {
        if (divisor % i == 0) {
            primeness = false;
            return primeness;
        }
    }
    return primeness;
}

function divisibilityCheck(divisor,dividend) {
    //console.log(dividend,divisor);
    if (dividend % divisor == 0) {
        //console.log("divisible");
        return true;
    }
    else {
        //console.log("not divisible");
        return false;
    }
}

function findFactors(divisor) {
    const counterFactors = [];
    //console.log(counterFactors);
    for (let i = 1; i <= divisor/2; i++) {
        //console.log(i,divisor);
        //console.log(divisibilityCheck(i,divisor));
        //console.log(primeCheck(divisor));

        if (divisibilityCheck(i,divisor) == true) {
            //console.log(divisibilityCheck(i,divisor));
            //console.log(primeCheck(divisor));
            counterFactors.push(i);
        }
    }
    //console.log(counterFactors);
    return counterFactors;
    
}

function inAPF(num) {
    return allPrimeFactors.includes(num);
}


// && primeCheck(i) == true