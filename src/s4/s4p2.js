/**
 * Title: 뒤집은 소수 
 * Content: N개의 자연수가 입력되면 각 자연수를 뒤집은 후, 그 뒤집은 수가 소수이면 그 소수를 출력하기.
 *          예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 *          단, 910을 뒤집으면 19로 숫자화해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 * Input Condition: 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 *                  각 자연수의 크기는 100,000을 넘지 않는다.
 * Output Condition: 첫 줄에 뒤집은 소수를 출력한다. 출력 순서는 입력된 순서대로 출력한다.
 * Input Example: 9
 *                32 55 62 20 250 370 200 30 100
 * Output Example: 23 2 73 2 3
 */
// 소수 판별 함수 구현만 할 수 있게 하자.

{ 
    function isPrimeNum(num) {
        if (num === 1) {
            return false;
        } 

        let isPrimeNum = true;
        for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
            if(num % i === 0) {
                isPrimeNum = false;
            }
        }
        
        return isPrimeNum;
    }

    function reverseNum(num) {
        const numArr = num.toString().split('');
        const reversedNum = Number(numArr.reverse().join(''));
        return reversedNum;
    }

    function solution (numbers) {
        let answer;
        const primeNums = [];
        numbers.forEach((num)=> {
            const reversedNum = reverseNum(num);
            if (isPrimeNum(reversedNum)) {
                primeNums.push(reversedNum);
            }
        });
        answer = primeNums.join(' ');
        return answer;
    }

    function testToAllPrimeNum () {
        const testNum = 1;
        const input = [2, 3, 5, 7, 11, 13, 17, 29, 31, 37, 41, 43, 101];
        const expectResult = "2 3 5 7 11 31 71 13 73 101";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToNoPrimeNum () {
        const testNum = 2;
        const input = [4, 6, 9, 14, 20, 55, 100, 1000];
        const expectResult = "41 2";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxCount () {
        const testNum = 3;
        const MAX_COUNT = 100;
        const input = [];
        const result = [];
        for (let i=0; i<MAX_COUNT; i++) {
            input.push(2);
            result.push(2);
        }   
        const expectResult = result.join(' ');
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinCount () {
        const testNum = 4;
        const MIN_COUNT = 3;
        const input = [];
        const result = [];
        for (let i=0; i<MIN_COUNT; i++) {
            input.push(2);
            result.push(2);
        }   
        const expectResult = result.join(' ');
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToHavingPostfixZero () {
        const testNum = 5;
        const input = [1300, 130, 13000, 170000, 7300000];
        const expectResult = "31 31 31 71 37";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }


    function main () {
        const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
        const output = this.solution(input);
        
        console.log("S4P2\n");
        // test();
        console.log(`Input: ${input.join(' ')} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToAllPrimeNum();
        testToNoPrimeNum();
        testToMaxCount();
        testToMinCount();
        testToHavingPostfixZero();
    }
    
    main();
}
