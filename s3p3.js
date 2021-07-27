/**
 * Title: 숫자만 추출
 * Content: 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.
 *          만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수로 만들면 1205가 된다.
 *          추출하여 만들어지는 자연수는 100,000,000을 넘지 않는다.
 * Input Condition: 첫 줄에 숫자가 섞인 문자열이 주어진다. 문자열의 길이는 50을 넘지 않는다.
 * Output Condition: 첫 줄에 자연수를 출력한다.
 * Input Example: g0en2T0s8eSoft
 * Output Example: 208
 */

{
    function parseToNumber(text) {
         return Number(text);
    }

    function filterToOnlyNumber(text) {
        return text.replace(/[^0-9]/g, '');
    }
    
    function solution (text) {
        let answer = "";
        const filteredText = filterToOnlyNumber(text);
        if (text.length !== 0) {
            answer = parseToNumber(filteredText);
        } 
    
        return answer;
    }

    function testToMaxLenText () {
        const testNum = 1;
        const input = "a1b2c3d4e5f6g7h8ijklabcdefghijabcdefghijabcdefghij";   
        const expectResult = 12345678;
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

    function testToOnlyNumber () {
        const testNum = 3;
        const input = "1234569";   
        const expectResult = 1234569;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToNotOnlyNumber () {
        const testNum = 4;
        const input = "a123b456c9d";   
        const expectResult = 1234569;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToPrefixZeroText () {
        const testNum = 5;
        const input = "0ab0c0de1";   
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main () {
        const input = "g0en2T0s8eSoft";
        const output = this.solution(input);
        
        console.log("S3P3\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }

    function test() {
        testToMaxLenText();
        testToMinLenText();
        testToOnlyNumber();
        testToNotOnlyNumber();
        testToPrefixZeroText();
    }

    main();
}