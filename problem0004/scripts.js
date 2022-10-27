//Problem Description:

//"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers."

//999*999 = 998001

function checkPalindrome(num) {
    num = num.toString();
    let numArray = num.split("");
    
    let reverseArray = [];
    for (let i = 0; i < numArray.length; i++) {
        reverseArray.unshift(numArray[i]);
    }
    let reverseNum = reverseArray.join("");
    if (num === reverseNum) {
        return true;
    }
    else {
        return false;
    }
};

function checkDivisibility(product, factor) {
    if (product % factor == 0) {
        return true;
    }
    else {
        return false;
    }
};

function multiply(a,b) {
    return (a*b);
}

function countdown(maxNum) {
    let floor = 100;
    let bigPal = 1;
    for (let firstNum = maxNum; firstNum > floor; firstNum--) {
        for (let secondNum = firstNum; secondNum > floor; secondNum--) {
            let product = multiply(firstNum, secondNum);
            if (checkPalindrome(product) == true) {
                if (product > bigPal) {
                    bigPal = product;
                    floor = secondNum;
                }
                else {
                    continue;
                }
            }
            else {
                continue;
            }
        }
    }
    return bigPal;
}