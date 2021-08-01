/**
 * Title: 연속 부분 수열 1 
 * Content: N개의 수로 이루어진 수열이 주어진다.
 *          이 수열에서 연속 부분 수열의 합이 특정 숫자 M이 되는 경우가 몇 번 있는지 구하기.
 *          만약 N=8, M=6이고 수열이 1 2 1 3 1 1 1 2라면, 
 *          합이 6이 되는 연속 부분 수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지이다. 
 * Input Condition: 첫 번째 줄에 N(1<=N<=100,000), M(1<=M<=100,000,000)이 주어진다.
 *                  수열의 원소값은 1,000을 넘지 않는 자연수이다.
 * Output Condition: 첫 번째 줄에 경우의 수를 출력한다.
 * Input Example: 8 6
 *                1 2 1 3 1 1 1 2
 * Output Example: 3
 */
// *투 포인터 알고리즘 복습을 위해 다시 풀기.

 {
    const MAX_LENGTH = 100_000;
    const MIN_LENGTH = 1;

    // Two Pointer Algorithm으로 구현한 함수
    function getCountToEqualSerialSum(nums, selectedSum) {
        let count = 0;
        let standardIdx = 0;
        let supportIdx = 0;
        let sum = 0;
        while (standardIdx < nums.length) {
            if (supportIdx >= nums.length) {
                sum = 0;
                standardIdx++;
                supportIdx = standardIdx;
            }

            if (standardIdx === supportIdx) {
                sum += nums[standardIdx];
            } else {
                sum += nums[supportIdx];
            }

            if (sum > selectedSum) {
                sum = 0;
                standardIdx++;
                supportIdx = standardIdx;
            } else if (sum === selectedSum) {
                sum = 0;
                count++;
                standardIdx++;
                supportIdx = standardIdx;
            } else {
                supportIdx++;
            }
        }
        
        return count;
    }

    function solution(nums, selectedSum) {
        const answer = getCountToEqualSerialSum(nums, selectedSum);
        return answer;
    }

    function testToMaxLen() {
        const testNum = 1;
        const inputNums = [];   
        const inputSelectedSum = 10;
        for(let i=1; i<=MAX_LENGTH; i++) {
            inputNums.push(i);
        }
        const expectResult = 2;
        const testFunction = solution;
        const condition = (testFunction(inputNums, inputSelectedSum) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLen() {
        const testNum = 2;
        const inputNums = [];   
        const inputSelectedSum = 1;
        for(let i=1; i<=MIN_LENGTH; i++) {
            inputNums.push(i);
        }
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(inputNums, inputSelectedSum) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToNoSum() {
        const testNum = 3;
        const inputNums = [3, 5, 6, 8];   
        const inputSelectedSum = 100;
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(inputNums, inputSelectedSum) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputSelectedSum = 6;
        const inputNumbers = [1, 2, 1, 3, 1, 1, 1, 2];
        const output = this.solution(inputNumbers, inputSelectedSum);
        
        console.log("S5P3\n");
        // test();
        console.log(`Input: ${inputSelectedSum}\n ${inputNumbers.join(" ")} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLen();
        testToMinLen();
        testToNoSum();
    }
    
    main();
}
