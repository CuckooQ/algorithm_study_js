/**
 * Title: 두 배열 합치기
 * Content: 오름차순으로 정렬이 된 두 배열이 주어지면, 두 배열을 오름차순으로 합쳐 출력하기.
 * Input Condition: 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어진다.
 *                  두 번째 줄에 N개의 배열 원소가 오름차순으로 주어진다.
 *                  세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어진다.
 *                  네 번째 줄에 M개의 배열 원소가 오름차순으로 주어진다.
 *                  각 리스트의 원소는 int형 변수의 크기를 넘지 않는다.
 * Output Condition: 오름차순으로 졍렬된 배열을 출력한다.
 * Input Example: 3
 *                1 3 5
 *                5
 *                2 3 6 7 9
 * Output Example: 1 2 3 3 5 6 7 9
 */

 {
    const MAX_LENGTH = 100;
    const MIN_LENGTH = 1;

    // Two Pointer Algorithm으로 구현한 함수
    function sortNumArrs(firstNums, secondNums) {
        const sortedNums = [];
        let firstIdx = 0;
        let secondIdx = 0;
        
        while (firstIdx < firstNums.length || secondIdx < secondNums.length) {
            if (firstIdx >= firstNums.length || firstNums[firstIdx] > secondNums[secondIdx]) {
                sortedNums.push(secondNums[secondIdx]);
                secondIdx++;
            } else {
                sortedNums.push(firstNums[firstIdx]);
                firstIdx++;
            }
        }
    
        return sortedNums;
    }
    /*
    function sortToAsc(nums) { 
        return nums.sort((befNum, aftNum) => befNum - aftNum);
    }

    function combineArr(firstArr, secondArr) {
        return firstArr.concat(secondArr);
    }

    function sortNumArrs(firstNums, secondNums) {
        const combinedArr = combineArr(firstNums, secondNums);
        const sortedNums =  sortToAsc(combinedArr);

        return sortedNums;
    }
    */
    function solution(firstNums, secondNums) {
        let answer;
        const sortedNums = sortNumArrs(firstNums, secondNums);
        answer = sortedNums.join(" ");
        
        return answer;
    }

    function testToMaxLen() {
        const testNum = 1;
        const inputFirstNums = [];   
        const inputSecondNums = [];   
        for(let i=1; i<=MAX_LENGTH; i++) {
            inputFirstNums.push(2*i);
            inputSecondNums.push(2*i-1);
        }
        const result = [];
        for(let i=1; i<=MAX_LENGTH; i++) {
            result.push(2*i-1);
            result.push(2*i);
        }
        const expectResult = result.join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputFirstNums, inputSecondNums) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLen() {
        const testNum = 2;
        const inputFirstNums = [];   
        const inputSecondNums = [];   
        for(let i=1; i<=MIN_LENGTH; i++) {
            inputFirstNums.push(2*i);
            inputSecondNums.push(2*i-1);
        }
        const result = [1, 2];
        const expectResult = result.join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputFirstNums, inputSecondNums) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToAllEqualNumbers() {
        const testNum = 3;
        const inputFirstNums = [5, 10, 15, 20, 25, 30];   
        const inputSecondNums = [5, 10, 15, 20, 25, 30];   
        const result = [5, 5, 10, 10, 15, 15, 20, 20, 25, 25, 30, 30];
        const expectResult = result.join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputFirstNums, inputSecondNums) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputFirstNumbers = [1, 3, 5];
        const inputSecondNumbers = [2, 3, 6, 7 ,9];
        const output = this.solution(inputFirstNumbers, inputSecondNumbers);
        
        console.log("S5P1\n");
        // test();
        console.log(`Input: ${inputFirstNumbers.join(" ")}\n ${inputSecondNumbers.join(" ")}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLen();
        testToMinLen();
        testToAllEqualNumbers();
    }
    
    main();
}
