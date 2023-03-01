//600851475143 is the number called for by Project Euler
let dividend = 600851475143;
let largestFactorFound = false;
const factorArray = [];
const primeFactorArray = [];


//Checks whether the dividend is even; if so, 2 is added as the first element of both factorArray and primeFactorArray.
//Checks all odd numbers, incremented up from 3, for inclusion as prime factors of the dividend, until the largest prime factor is determined; this number is returned to the variable largestPrimeFactor.
function findLowestPrimeFactor(dividend) {
    if (checkEven(dividend) == true) {
        factorArray[0] = 2;
        primeFactorArray[0] = 2;
    }
    let largestPrimeFactor = cycleDivisors(dividend);

    console.log(factorArray);
    console.log(primeFactorArray);
    console.log(largestFactorFound);
    console.log(largestPrimeFactor);
}

//Checks whether the dividend is even.
function checkEven(dividend) {
    if (dividend % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Loops upward through all odd numbers starting at 3. Checks for whether those numbers are prime factors of the dividend, and if so, adds them to the array of prime factors.
//Checks whether the largest prime factor has been found; if so, the loop is terminated and the largest prime factor is returned.
function cycleDivisors(dividend) {
    let divisor = 3;
    while (largestFactorFound == false) {
        let divisible = checkDivisibility(dividend,divisor);
        if (divisible == true) {
            factorArray.push(divisor);
                if (checkPrimeness(factorArray[factorArray.length - 1]) == true) {
                    primeFactorArray.push(factorArray[factorArray.length - 1]);
                }
        }
        if (checkCompleteness(primeFactorArray, dividend) == true) {
            largestFactorFound = true;
        }

        divisor += 2;
    }
    let largestPrimeFactor = primeFactorArray[primeFactorArray.length - 1];

    return largestPrimeFactor;
}

//Checks whether the proposed divisor is prime
function checkPrimeness(divisor) {
    let primeness = true;
    for (let i = 2; i < divisor; i ++) {
        if (divisor % i == 0) {
            primeness = false;
            return primeness;
        }
    }
    return primeness;
}

//Checks whether the dividend is divisible by the proposed divisor
function checkDivisibility(dividend,divisor) {
    if (dividend % divisor == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Checks whether the largest known prime factor is actually the largest prime factor
function checkCompleteness(primeFactorArray, dividend) {
    let dividendCheck = dividend;
    
    //Repeatedly divides dividend by the elements of primeFactorArray until either 1) dividendCheck is equal to 1 (return true), or 2) dividendCheck can no longer be divided by any element of primeFactorArray without a remainder (return false).

    while (dividendCheck != 1) {
        let divisorCheck = false;
        for (let primeFactor of primeFactorArray) {
            
            if (dividendCheck % primeFactor == 0) {
                dividendCheck = dividendCheck / primeFactor;
                divisorCheck = true;
            }
        }
        if (divisorCheck == false) {
            return false;
        }
    }
    return true;
}