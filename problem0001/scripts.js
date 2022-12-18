let sum = 0; //the current sum of all the multiples of 3 and 5

        function threeCheck(counter) { //checks if counter is divisible by 3
            let remainder = counter % 3;
            if (remainder === 0) {
            return true;
            }
        }

        function fiveCheck(counter) { //checks if counter is divisible by 5
            let remainder = counter % 5;
            if (remainder === 0) {
            return true;
            }
        }

        for (let counter = 0; counter < 1000; counter++) { 
            if (threeCheck(counter) | fiveCheck(counter)) {
            sum = sum + counter;
            }
        }
        console.log(sum);