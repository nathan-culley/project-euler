//let dividend = 600851475143;

let dividend = 600851475143;
//console.log(dividend);
//prime factors are 3, 5, 7, and 11
let largestFactorFound = false;
//console.log(largestFactorFound);
const factorArray = [];
//console.log(factorArray);
const primeFactorArray = [];



function findLowestPrimeFactor(dividend) {
    //console.log(dividend);
    //console.log(checkEven(dividend));
    if (checkEven(dividend) == true) {
        factorArray[0] = 2;
        primeFactorArray[0] = 2;
        //console.log(factorArray);
    }
    let largestPrimeFactor = cycleDivisors(dividend);
    //console.log(largestPrimeFactor);
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
    //console.log(dividend);
    let divisor = 3;
    //console.log(divisor);
    //const primeFactorArray = [];
    //console.log(factorArray);
    //console.log(primeFactorArray);
    //console.log(largestFactorFound);
    while (largestFactorFound == false) {
        let divisible = checkDivisibility(dividend,divisor);
        //console.log(divisible);
        //console.log(checkDivisibility(dividend,divisor));
        if (divisible == true) {
            //console.log(checkDivisibility(dividend,divisor));
            //console.log(factorArray);
            factorArray.push(divisor);
            //console.log(factorArray);
            //console.log(factorArray.length);
            //console.log(factorArray[0]);
            //console.log(factorArray[factorArray.length - 1]);
            //for (let i = 0; i < factorArray.length; i++) {
                //console.log(factorArray);
                //console.log(factorArray.length);
                //console.log(factorArray[i]);
                //console.log(checkPrimeness(factorArray[i]));
                if (checkPrimeness(factorArray[factorArray.length - 1]) == true) {
                    //console.log(factorArray);
                    //console.log(factorArray[factorArray.length - 1]);
                    //console.log(checkPrimeness(factorArray[i]));
                    primeFactorArray.push(factorArray[factorArray.length - 1]);
                    //console.log(primeFactorArray);
                    //console.log(primeFactorArray[primeFactorArray.length - 1]);
                }
            //}
        }
        //console.log(primeFactorArray);
        //console.log(checkCompleteness(primeFactorArray, divisor, dividend));
        if (checkCompleteness(primeFactorArray, divisor, dividend) == true) {
            largestFactorFound = true;
        }
        divisor += 2;
        //console.log(divisor);
        //console.log(largestFactorFound);
    }
    let largestPrimeFactor = primeFactorArray[primeFactorArray.length - 1];
    console.log(factorArray);
    console.log(primeFactorArray);
    console.log(largestFactorFound);
    console.log(largestPrimeFactor);
    return largestPrimeFactor;
    

}

function checkPrimeness(divisor) {
    //console.log(divisor);
    let primeness = true;
    for (let i = 2; i < divisor; i ++) {
        if (divisor % i == 0) {
            primeness = false;
            return primeness;
        }
    }
    return primeness;
}

function checkDivisibility(dividend,divisor) {
    //console.log(dividend);
    //console.log(divisor);
    if (dividend % divisor == 0) {
        return true;
    }
    else {
        return false;
    }
}



function checkCompleteness(primeFactorArray, divisor, dividend) {
    let multiple = 1;
    for (let i = 0; i < primeFactorArray.length; i++) {
        //console.log(primeFactorArray.length)
        //console.log(i);
        //multiple *= primeFactorArray[i];
        //console.log(multiple);
    }
    //console.log(multiple);
    //console.log(dividend);
    //console.log(primeFactorArray[0]);
    let largestPossible = dividend/primeFactorArray[0];
    //console.log(largestPossible);
    if (multiple == dividend) {
        return true;
        //console.log("complete");
    }
    else if (primeFactorArray[primeFactorArray.length - 1] >= largestPossible) {
        return true;
        //console.log("complete");
    }
    else if (divisor >= largestPossible) {
        return true;
        //console.log("complete");
    }
    else {
        return false;
        //console.log()
    }
}