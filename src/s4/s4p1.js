/**
 * Title: 자릿수의 합 
 * Content: N개의 자연수가 입력되면, 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하기.
 *          자릿수의 합이 같은 경우, 원래 숫자가 큰 숫자를 답으로 한다.
 *          만약 235와 1234가 동시에 답이 될 수 있다면, 1234를 답으로 출력한다.
 * Input Condition: 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 *                  각 자연수의 크기는 10,000,000을 넘지 않는다.
 * Output Condition: 자릿수의 합이 최대인 자연수를 출력한다.
 * Input Example: 7
 *                128 460 603 40 521 137 123
 * Output Example: 137
 */
// *각 자리수의 합을 구하는 식은 해답의 것을 사용하자.

 {
    /*
    function getMaxDigit(number) {
        const maxDigit = Math.log10(number) + 1;
        return Math.trunc(maxDigit);
    }

    function getSumOfEachDigit(number) {
        let sum = 0; 
        let beforeValue = 0;
        const digitArr = [];
        const maxDigit = getMaxDigit(number);
        for(let i=1; i<=maxDigit; i++) {
            const value = number % (10**i) - beforeValue; 
            const digit = Math.trunc(value / (10**(i-1)));
            digitArr.push(digit);
            beforeValue = value;
        }
        
        sum = digitArr.reduce((acc, val)=> acc + val, 0);

        return sum;
    }
    */

    function getSumOfEachDigit(number) {
        const digitNumers = number.toString().split('');
        const sum = digitNumers.reduce((acc, val) => acc+ Number(val), 0);

        return sum;
    }

    function getSumsOfEachDigit(numbers) {
        return numbers.map(number => {
            return getSumOfEachDigit(number);
        });
    }

    function getNumbersOfTopSum(numbers) {
        const selectedNumbers= [];
        
        const sums = getSumsOfEachDigit(numbers);
        const topSum = Math.max(...sums);

        for(let i=0;i<sums.length;i++) {
            const idx = sums.indexOf(topSum, i);
            if (idx !== -1) {
                selectedNumbers.push(numbers[idx]);
            }
        }

        return selectedNumbers;
    }

    function getTopNumberAboutSumOfEachDigit(numbers) {
        const selectedNumbers= getNumbersOfTopSum(numbers);
        const topNumber = Math.max(...selectedNumbers);

        return topNumber;
    }
    
    function solution (numbers) {
        let answer = getTopNumberAboutSumOfEachDigit(numbers);
        return answer;
    }

    function testToDiffSumNumbers () {
        const testNum = 1;
        const input = [1, 20, 303, 4004, 50505];  
        const expectResult = 50505;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToSameSumNumbers () {
        const testNum = 2;
        const input = [7, 205, 30004, 40003, 11500];   
        const expectResult = 40003;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxCount () {
        const testNum = 3;
        const MAX_COUNT = 100;
        const input = [];
        for(let i=0; i<MAX_COUNT; i++) {
            input.push(i);
        }   
        const expectResult = 99;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinCount () {
        const testNum = 4;
        const input = [4000, 3, 1000000];   
        const expectResult = 4000;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }


    function main () {
        const input = [128, 460, 603, 40, 521, 137, 123];
        const output = this.solution(input);
        
        console.log("S4P1\n");
        // test();
        console.log(`Input: ${input.join(' ')} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToDiffSumNumbers();
        testToSameSumNumbers();
        testToMaxCount();
        testToMinCount();
    }
    
    main();
}
