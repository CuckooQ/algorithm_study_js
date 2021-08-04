/**
 * Title: 괄호 문자 제거
 * Content: 입력된 문자열에서 소괄호 ()사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하기.
 * Input Condition: 첫 줄에 문자열이 주어진다. 
 *                  문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 남은 문자만 출력한다. 
 * Input Example: (A(BC)D)EF(G(H)(IJ)K)LM(N)
 * Output Example: EFLM
 */

{
    const MAX_LENGTH = 100;
    const LEFT_PARENTHESIS = "(";
    const RIGHT_PARENTHESIS = ")";

    function getOnlyTextOutofParenthesis(text) {
        let filteredText = "";
        let stack = new Array();
        Array.from(text).forEach((char) => {
            if (char === LEFT_PARENTHESIS) {
                stack.push(1);
            } else if (char === RIGHT_PARENTHESIS) {
                stack.pop();
            } else {
                if (stack.length === 0) {
                    filteredText += char;
                }
            }            
        });
        
        return filteredText;
    }

    function solution(text) {
        const answer = getOnlyTextOutofParenthesis(text);
        return answer;
    }

    function testToMaxLen() {
        const testNum = 1;
        const inputArr = Array.from({length: MAX_LENGTH-2}, (_, idx) => {
            if (idx % 2 === 0) {
                return LEFT_PARENTHESIS;
            } else {
                return RIGHT_PARENTHESIS;
            }
        });
        inputArr.unshift("A");
        inputArr.push("Z");
        const input = inputArr.join("");
        const expectResult = "AZ";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToNoCharInParenthesis() {
        const testNum = 2;
        const input = "ABCDE()FGHIJ";   
        const expectResult = "ABCDEFGHIJ";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToAllCharInParenthesis() {
        const testNum = 3;
        const input = "(ABCDEFGHIJ)";   
        const expectResult = "";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
        const output = this.solution(input);
        
        console.log("S6P2\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLen();
        testToNoCharInParenthesis();
        testToAllCharInParenthesis();
    }
    
    main();
}
