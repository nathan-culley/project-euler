Problem Description:

"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers."

Solution 0004A:

This solution starts by initiating two for loops, one for the first three-digit number (firstNum), counting down from 999, and the other for the second three-digit number(secondNum), counting down from the current value of the first number. Both loops are set to terminate when the number reaches a "floor" (floor) that is initially set at 100 (the lowest possible three-digit number). It then multiplies the numbers together and checks if the product is a palindrome. If so, it checks to see if the product is larger than the current largest palindrome found (bigPal). If so, it sets the product as the new value of bigPal and sets the current secondNum as the new floor.

This solution works quickly by 1) immediately eliminating any product that is not a palindrome or is not larger than the largest previously-found palindrome, and 2) using the lower number of any pair that results in a palindrome to set a lower bound for the factors of any potential future palindromes. This rapidly shrinks the search space.

Originally, I attempted a much different approach that was far too slow and expensive to be feasible. It started with a for loop counting down from 998,001 (999*999), checking if each number was a palindrome, then checking for its divisibility by all three-digit numbers, then checking if the other factor was also three digits. This quickly seemed impractical, though I was able to see that my approach counted far past what I later learned was the largest palindrome, so it's possible my program was just broken for reasons I did not understand at the time.