/**
 * Title: 세 수 중 최소값 구하기
 * Content: 100 이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램 작성
 * Input Condition: 첫 번째 줄에 100이하의 세 자연수 입력
 * Output Condition: 첫 번째 줄에 가장 작은 수 출력
 * Input Example: 6 5 11
 * Output Example: 5 
 */

function compare (num1, num2) {
    let answer;
    if (num1 >= num2 ){
        answer = num2;
    } else{
        answer = num1;
    }

    return answer;
}

function solution (num1, num2, num3) {
    let answer;
    answer = this.compare(num1, num2);
    answer = this.compare(answer, num3);

    return answer;
}

// 입력값의 최대, 최소값에 따른 결과 테스트
function testToMaxMinInput () {
    const testNum = 1; 
    let num1 = 100;
    let num2 = 99;
    let num3 = 98;
    let expectResult = num3;
    let output = this.solution(num1, num2, num3);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);

    num1 = 1;
    num2 = 2;
    num3 = 3;
    expectResult = num1;
    output = this.solution(num1, num2, num3);
    condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}


// 입력값의 순서에 따른 결과 테스트
function testToInputValuesOrder () {
    const testNum = 2; 
    let num1 = 10;
    let num2 = 20;
    let num3 = 30;
    let expectResult = num1;
    let output = this.solution(num1, num2, num3);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);

    num1 = 3;
    num2 = 2;
    num3 = 1;
    expectResult = num3;
    output = this.solution(num1, num2, num3);
    condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
    num1 = 50;
    num2 = 40;
    num3 = 70;
    expectResult = num2;
    output = this.solution(num1, num2, num3);
    condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

// 입력값의 동일 여부에 따른 결과 테스트
function testToEqualValue () {
    const testNum = 3; 
    let num1 = 1;
    let num2 = 1;
    let num3 = 2;
    let expectResult = num1;
    let output = this.solution(num1, num2, num3);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);

    num1 = 2;
    num2 = 2;
    num3 = 2;
    expectResult = num1;
    output = this.solution(num1, num2, num3);
    condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

function test() {
    this.testToMaxMinInput();
    this.testToInputValuesOrder();
    this.testToEqualValue();
}

function main () {
    const num1 = 6;
    const num2 = 5;
    const num3 = 11;
    const output = this.solution(num1, num2, num3);
    
    console.log("S1P1\n");
    // test();
    console.log(`Input: ${num1} ${num2} ${num3}`);
    console.log(`Output: ${output}\n`);
}

main();
