/**
 * Problem file template 
 *  */ 
/**
 * Title: 연필 개수
 * Content: 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, n명의 학생 수를 입력하면 필요한 연필의 다스 수 계산.
 * Input Condition: 첫 번째 줄에 1000이하의 자연수 n 입력
 * Output Condition: 첫 번째 줄에 필요한 다스 수 출력
 * Input Example: 25
 * Output Example: 3
 */

const DOZEN = 12;

// 학생 수에 따라 필요한 다스 단위의 연필 수 구하기
function getPencilDozen(studentCount) {
    return Math.ceil((studentCount / DOZEN));
}

function solution (studentCount) {
    return getPencilDozen(studentCount);
}

// 최대 값과 최소 값에 따른 결과 테스트
function testToMaxMinInput () {
    const testNum = 1; 
    let input = 1000;
    let expectResult = 84;
    let output = this.solution(input);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);

    input = 1;
    expectResult = 1;
    output = this.solution(input);
    condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

// 다스 단위의 학생 수에 따른 결과 테스트
function testToTwelveStudents() {
    const testNum = 2; 
    let input = 24;
    let expectResult = 2;
    let output = this.solution(input);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

// 다스 단위 외의 학생 수에 따른 결과 테스트
function testToNotTwelveStudents() {
    const testNum = 3; 
    let input = 13;
    let expectResult = 2;
    let output = this.solution(input);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

// 한 다스 이하의 학생 수에 따른 결과 테스트
function testToLessThanTwelveStudents() {
    const testNum = 4; 
    let input = 1;
    let expectResult = 1;
    let output = this.solution(input);
    let condition = (output === expectResult);
    
    validateTestResult(testNum, condition);
}

function main() {
    const input = 25;
    const output = this.solution(input);
    
    console.log("S1P3\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxMinInput();
    testToTwelveStudents();
    testToNotTwelveStudents();
    testToLessThanTwelveStudents();
}

main();
