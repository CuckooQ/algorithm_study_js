/**
 * Problem file template 
 *  */ 
/**
 * Title: 1부터 N까지 합 출력하기
 * Content: 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램 작성.
 * Input Condition: 첫 번째 줄에 20이하의 자연수 N 입력 
 * Output Condition: 첫 번째 줄에 1부터 N까지의 합 출력
 * Input Example: 6
 * Output Example: 21 
 */

// 1~num까지의 합 구하기
function sum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

function solution (num) {
    let answer;
    answer = sum(num);
    return answer;
}

// 최대 최소 조건에 대한 결과 테스트
function testForMaxMinValue () {
    const testNum = 1;
    let input = 20;   
    let expectResult = 210;
    let testFunction = solution;
    let condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);

    input = 1;   
    expectResult = 1;
    testFunction = solution;
    condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input = 6;
    const output = this.solution(input);
    
    console.log("S1P4\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    this.testForMaxMinValue();
}

main();
