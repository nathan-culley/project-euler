/*let dividend = 6001;

function checkDivisibility(dividend) {
    let factor;
    for (i = 2; i <= dividend / 2; i++) {
        //console.log(i);
        if (dividend % i == 0) {
            factor = i;
        }
    }
    console.log(factor);
}*/

//let dividend = 600851475143;
/*let dividend = 600850

function findLPF(dividend) {
    let lowestFactor = 2;
    let largestPrimeFactor;
    for (divisor = 2; divisor <= dividend / lowestFactor; divisor ++) {
        
        if (dividend % divisor == 0) {
            largestPrimeFactor = divisor;
            console.log(largestPrimeFactor);
        }

    }
    console.log(lowestFactor);
    console.log(largestPrimeFactor);
}*/

let dividend = 9;
//prime factors are 3, 5, 7, and 11
let largestFactorFound = false;
const factorArray = [];


function findLowestPrimeFactor(dividend) {

    if (checkEven(dividend) == true) {
        factorArray[0] = 2;
        //console.log(factorArray);
    }
    let largestPrimeFactor = cycleDivisors(dividend);
    console.log(largestPrimeFactor);
}

function checkEven(dividend) {
    if (dividend % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function cycleDivisors(dividend) {
    let divisor = 3;
    //console.log(divisor);
    const primeFactorArray = [];
    //console.log(factorArray);
    //console.log(primeFactorArray);
    //console.log(largestFactorFound);
    //while (largestFactorFound == false) {
        let divisible = checkDivisibility(dividend,divisor);
        //console.log(divisible);
        if (divisible == true) {
            //console.log(checkDivisibility(dividend,divisor));
            factorArray.push(divisor);
            //console.log(factorArray);
            //console.log(factorArray.length);
            for (let i = 0; i < factorArray.length; i++) {
                //console.log(factorArray.length);
                //console.log(factorArray[i]);
                //console.log(checkPrimeness(factorArray[i]));
                if (checkPrimeness(factorArray[i]) == true) {
                    //console.log(factorArray[i]);
                    //console.log(factorArray[i]);
                    //console.log(checkPrimeness(factorArray[i]));
                    primeFactorArray.push(factorArray[i]);
                    //console.log(primeFactorArray);
                    //console.log(primeFactorArray[i]);
                }
            }
        }
        console.log(primeFactorArray);
        console.log(checkCompleteness(primeFactorArray, dividend));
        if (checkCompleteness(primeFactorArray, dividend) == true) {
            largestFactorFound = true;
        }
        divisor += 2;
        //console.log(largestFactorFound);
    //}
    let largestPrimeFactor = primeFactorArray[primeFactorArray.length - 1];
    return largestPrimeFactor;
}

function checkPrimeness(divisor) {
    //console.log(divisor);
    for (let i = 2; i < divisor; i ++) {
        if (divisor % i == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

function checkDivisibility(dividend,divisor) {
    if (dividend % divisor == 0) {
        return true;
    }
    else {
        return false;
    }
}

function checkCompleteness(primeFactorArray, dividend) {
    let multiple = 1;
    for (let i = 0; i < primeFactorArray.length; i++) {
        multiple *= primeFactorArray[i];
    }
    console.log(multiple);
    console.log(dividend);
    if (multiple == dividend) {
        return true;
    }
    else {
        return false;
    }
}