/**
 * Title: 대소문자 변환
 * Content: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로, 소문자는 대문자로 변환하여 출력하기.
 * Input Condition: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력한다.
 * Input Example: StuDY
 * Output Example: sTUdy
 */

function changeToUppercase(char) {
    return char.toUpperCase();
}

function changeToLowercase(char) {
    return char.toLowerCase();
}

function getCountFromTextMatchingToCondition(text, cond) {
    return (text.match(cond) || []).length;
}

function isUppercase(char) {
    const uppercaseCond = /[A-Z]/g;
    return getCountFromTextMatchingToCondition(char, uppercaseCond) === 1;
}

function isLowercase(char) {
    const lowercaseCond = /[a-z]/g;
    return getCountFromTextMatchingToCondition(char, lowercaseCond) === 1;
}

function solution (text) {
    const convertedCharArr = Array.from(text).map(char => {
        if (isUppercase(char)) {
            return changeToLowercase(char);
        } else if (isLowercase(char)) {
            return changeToUppercase(char);
        } else {
            return char;
        }
    });
    const answer = convertedCharArr.join('');
    return answer;
}

function testToMaxMinValue () {
    const testNum = 1;
    const testFunction = solution;
    let input = "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij";   
    let expectResult = "ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ";
    let condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);

    input = "";   
    expectResult = "";
    condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testWithSpecialChar () {
    const testNum = 2;
    const input = "a!b#c$d%e^f&g*h(i)j_-=[];';:{}?<>',./";   
    const expectResult = "A!B#C$D%E^F&G*H(I)J_-=[];';:{}?<>',./";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testWithNumber () {
    const testNum = 3;
    const input = "a1b2c3d4e5f6g7h8i9j0";   
    const expectResult = "A1B2C3D4E5F6G7H8I9J0";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input = "StuDY";
    const output = this.solution(input);
    
    console.log("S1P13\n");
    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxMinValue();
    testWithSpecialChar();
    testWithNumber();
}

main();
