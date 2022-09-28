Problem Description:

"The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?"

Solution 0003A:

This solution creates arrays of 1) all factors (factorArray), and 2) prime factors (primeFactorArray). The main findLowestPrimeFactor() function then checks if the given dividend (600851475143 in this case) is even. If it is, it adds 2 as the first element of both factorArray and primeFactorArray. Then it continues on to cycle through all odd numbers, first checking if an odd number is a factor of the dividend (adding it to factorArray if so), then checking to see if it is prime (adding it to primeFactorArray if so). The search terminates when the odd number being checked is equal to or greater than (dividend / lowest prime factor); improving the criteria for terminating the search will be the goal of solution 0003B, as this solution takes 2 minutes and 33 seconds to complete with the given dividend.