/**
 * Title: 문자열 압축
 * Content: 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우, 
 *          반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하기.
 * Input Condition: 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 압축된 문자열을 출력한다.
 * Input Example: KKHSSSSSSSE
 * Output Example: K2HS7E
 */

 {
    function compressText (text) {
        let compressedText = "";
        let prevChar = '';
        let sameCount = 1;
        Array.from(text).forEach((char) => {
            if (char === prevChar) {
                sameCount++;
            } else {
                if (sameCount > 1) {
                    compressedText = compressedText.concat(sameCount);
                }
                compressedText = compressedText.concat(char);
                prevChar = char;
                sameCount = 1;
            }
        });

        return compressedText;
    }

    function solution (text) {
        const answer = compressText(text);
        return answer;
    }

    function testToMaxLenText () {
        const testNum = 1;
        const input = "AACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJAACDDFGGIJ";   
        const expectResult = "A2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJA2CD2FG2IJ";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLenText () {
        const testNum = 2;
        const input = "";   
        const expectResult = "";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToHavingNotSameChar () {
        const testNum = 3;
        const input = "ABCDEFGHIJ";   
        const expectResult = "ABCDEFGHIJ";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToHavingOnlySameChar () {
        const testNum = 4;
        const input = "AAAAAAAAAA";   
        const expectResult = "A10";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main () {
        const input = "KKHSSSSSSSE";
        const output = this.solution(input);
        
        console.log("S3P5\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLenText();
        testToMinLenText();
        testToHavingNotSameChar();
        testToHavingOnlySameChar();
    }
    
    main();
}
