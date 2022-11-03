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
            /*console.log(i);
            console.log(primeCheck(i));
            console.log(runningTotal);
            console.log(countedArray);*/
        }
        else {
            const counterPrimeFactors = findPrimeFactors(i);

            //console.log(counterPrimeFactors);
            let subCounter = i;
            for (let factor of counterPrimeFactors) {
                if (inAPF(factor) == false) {
                    allPrimeFactors.push(factor);
                    //console.log(allPrimeFactors[allPrimeFactors.length - 1]);
                }
                else {
                    subCounter = subCounter / factor;
                    //console.log(subCounter);
                }
            }
            runningTotal *= subCounter;
            countedArray.push(subCounter);
        }
    }
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

function findPrimeFactors(divisor) {
    const counterPrimeFactors = [];
    //console.log(counterPrimeFactors);
    for (let i = 1; i <= divisor/2; i++) {
        //console.log(i,divisor);
        //console.log(divisibilityCheck(i,divisor));
        //console.log(primeCheck(divisor));

        if (divisibilityCheck(i,divisor) == true && primeCheck(i) == true) {
            //console.log(divisibilityCheck(i,divisor));
            //console.log(primeCheck(divisor));
            counterPrimeFactors.push(i);
        }
    }
    //console.log(counterPrimeFactors);
    return counterPrimeFactors;
    
}

function inAPF(num) {
    return allPrimeFactors.includes(num);
}