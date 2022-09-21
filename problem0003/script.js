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
let dividend = 600850

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
}