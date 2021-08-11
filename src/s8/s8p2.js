/**
 * Title: 재귀함수를 이용한 이진수 출력
 * Content: 10진수 N이 입력되면, 2진수로 변환하여 출력하기.
 *          단, 재귀함수를 이용해서 출력해야 한다.
 * Input Condition: 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어진다.
 * Output Condition: 첫 번째 줄에 이진수를 출력한다.
 * Input Example: 11 
 * Output Example: 1011
 */
// *다시 풀기
// *2진수로 변환하는 방법을 몰랐다.

 {
    const MAX_NUM = 1000;
    const MIN_NUM = 1; 
    const BINNUM_IDX = 0;
    const CNT_IDX = 1;

    function convertToBinaryNum(num, ...args) {
        const count = args[CNT_IDX] !== undefined ? ++args[CNT_IDX] : 0;
        let binNum = args[BINNUM_IDX] !== undefined ? args[BINNUM_IDX] : 0;
        binNum += (num % 2) * (10**count);
        num = Math.trunc(num / 2);
        
        if (num === 0) {
            return binNum;
        } else { 
            return convertToBinaryNum(num, binNum, count);
        }
    }

    function solution(num) {
        const answer = convertToBinaryNum(num);
        return answer;
    }

    function testToMaxNum() {
        const testNum = 1;
        const input = MAX_NUM;   
        const expectResult = 1111101000;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinNum() {
        const testNum = 2;
        const input = MIN_NUM;   
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = 11;
        const output = this.solution(input);
        
        console.log("S8P2\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxNum();
        testToMinNum();
    }
    
    main();
}
