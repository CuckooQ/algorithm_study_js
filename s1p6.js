/**
 * Problem file template 
 *  */ 
/**
 * Title: 홀수
 * Content: 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값 찾기
 * Input Condition: 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재.
 * Output Condition: 첫 번째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값 출력.
 * Input Example: 12 77 38 41 53 92 85
 * Output Example: 256
 *                 41
 */

// 합 구하기
function sum(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });

    return sum;
}

function testSum() {
    const testNum = 1;
    const input = [1, 3, 5, 7, 8];
    const expectResult = 24;
    const testFunction = sum;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

// 홀수 찾기
function searchOddNumber(arr) {
    let filteredArr = [];
    arr.forEach(num => {
        if (num % 2 !== 0) {
            filteredArr.push(num);
        }
    });

    return filteredArr;
}

function testSearchOddNumber() {
    const testNum = 2;
    const input = [1, 3, 5, 7, 8];
    const expectResult = [1, 3, 5, 7];
    const testFunction = searchOddNumber;
    const result = testFunction(input);
    const condition = (arraysEqual(expectResult, result));    
    validateTestResult(testNum, condition);
}

function solution (num1, num2, num3, num4, num5, num6, num7) {
    let answer = [];
    let arr = [num1, num2, num3, num4, num5, num6, num7];
    arr = searchOddNumber(arr);
    answer[0] = sum(arr);
    answer[1] = getMin(arr);

    return answer;
}

// 최대 최소 조건에 대한 결과 테스트
function testToMaxMinValue () {
    const testNum = 3;
    const input1 = 100; 
    const input2 = 99; 
    const input3 = 55; 
    const input4 = 77;   
    const input5 = 66; 
    const input6 = 2; 
    const input7 = 1; 
    const expectResult = [232, 1];
    const testFunction = solution;
    const result = testFunction(input1, input2, input3, input4, input5, input6, input7)
    const condition = (arraysEqual(expectResult, result));    
    validateTestResult(testNum, condition);
}

function main () {
    const input1 = 12;
    const input2 = 77;
    const input3 = 38;
    const input4 = 41;
    const input5 = 53;
    const input6 = 92;
    const input7 = 85;
    const output = this.solution(input1, input2, input3, input4, input5, input6, input7);
    
    console.log("S1P6\n");
    // test();
    console.log(`Input: ${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7}`);
    console.log(`Output: ${output[0]}\n${output[1]}`);
}

function test() {
    testSum();
    testSearchOddNumber();
    testToMaxMinValue();
}

main();
