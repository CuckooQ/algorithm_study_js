/**
 * Title: 문자 찾기
 * Content: 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력 받은 문자열에 몇 개 존재하는 지 알아내기.
 *          문자열의 길이는 100자를 넘지 않는다.
 * Input Condition: 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
 * Output Condition: 첫 줄에 해당 문자의 개수를 출력한다.
 * Input Example: COMPUTERPROGRAMMING
 *                R
 * Output Example: 3
 */

// 문자열에서 특정 문자 개수 출력
function getCountOfSelectedCharInText(text, selectedChar) {
    let count = 0;
    for(char of text) {
        if (char === selectedChar) {
            count ++;
        }
    }

    return count;
}

function solution (text, selectedChar) {
    const answer = getCountOfSelectedCharInText(text, selectedChar);
    return answer;
}

// 최대 길이 문자열에 대한 테스트
function testToMaxMinLength () {
    const testNum = 1;
    const input1 = "ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ";
    const input2 = "A";   
    const expectResult = 10;
    const testFunction = solution;
    const condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

// 대소문자 혼합 문자열에 대한 테스트
function testToLowerCase () {
    const testNum = 2;
    const input1 = "abcdeAa";
    const input2 = "A";   
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

// 선택한 문자가 문자열에 존재하지 않을 경우 테스트
function testToNoSelectedChar () {
    const testNum = 3;
    const input1 = "BCD";
    const input2 = "A";   
    const expectResult = 0;
    const testFunction = solution;
    const condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

// 선택한 문자가 문자열에 전부 존재할 경우 테스트
function testToAllsSelectedChar () {
    const testNum = 4;
    const input1 = "AAAAAAAAAA";
    const input2 = "A";   
    const expectResult = 10;
    const testFunction = solution;
    const condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

// 특수문자가 존재할 경우 테스트
function testToSpecialChar () {
    const testNum = 5;
    const input1 = "!@#$%^&*()_+{}\"':?><'";
    const input2 = "'";   
    const expectResult = 2;
    const testFunction = solution;
    const condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}


function main () {
    const input1 = "COMPUTERPROGRAMMING";
    const input2 = "R";
    const output = this.solution(input1, input2);
    
    console.log("S1P10n\n");
    // test();
    console.log(`Input: ${input1}\n ${input2} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxMinLength();
    testToLowerCase();
    testToNoSelectedChar();
    testToAllsSelectedChar();
    testToSpecialChar();
}

main();
