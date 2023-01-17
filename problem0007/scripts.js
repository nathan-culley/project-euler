let targetNum = 10001;
const primeArray = [2];

function findNthPrime(targetNum, primeArray) {
    //iterate through positive odd integers, starting at 3 and continuing while primeArray.length < targetNum.
    for (let i = 3; primeArray.length < targetNum; i += 2) {

        //if i is prime, add to primeArray
            if (checkPrime(i, primeArray) == true) {
                primeArray.push(i);
            }
            else {
                continue;
            }

    }

    //return the last element of primeArray as the specified prime
    return primeArray[primeArray.length - 1];
}


function checkPrime(i, primeArray) {   
    //iterate (n) through the members of primeArray.

    for (let n of primeArray) {   

        //if i is cleanly divisible by primeArray[n], i is confirmed composite. Terminate this loop and return false.

        if (i % n == 0) {
            return false;
        }
        
        //if i is not cleanly divisible by primeArray[n], i may be prime. Continue to the next member of primeArray.
        else {
            continue;
        }
    }
    //if the entirety of primeArray has been iterated and i was not divisible by any of them, i is prime.
    return true;
}
