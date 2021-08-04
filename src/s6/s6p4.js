/**
 * Title: 후위식 Postfix Expresison
 * Content: 후위연산식이 주어지면 연산한 결과를 출력하기.
 * Input Condition: 첫 번째 줄에 후위연산식이 주어진다.
 *                  연산식의 길이는 50을 넘지 않는다.
 *                  식은 1~9의 숫자와 +,-,*,/연산자로만 이루어진다.
 * Output Condition: 연산한 결과를 출력한다.
 * Input Example: 352+*9-   
 * Output Example: 12
 */
// *다시 풀기
// *예제의 후위식을 원래 식으로 되돌리는 방법을 몰랐다.

{
    const PLUS = "+";
    const MINUS = "-";
    const MULTIPLE = "*";
    const DIVISION = "/";

    function calculateToMark(prevNum, postNum, mark) {
        let result = 0;
        switch(mark) {
            case PLUS:
                result = prevNum + postNum;
                break; 
            case MINUS:
                result = prevNum - postNum;
                break; 
            case MULTIPLE:
                result = prevNum * postNum;
                break; 
            case DIVISION:
                result = prevNum / postNum;
                break; 
        }

        return result;
    }

    function calculatePostfixExpression(postfixExpression) {
        const stack = new Array();
        postfixExpression.split("").forEach((char) => {
            if (!Number.isNaN(Number(char))) {
                const num = Number(char);
                stack.push(num);
            } else {
                const postNum = stack.pop();
                const prevNum = stack.pop();
                const calcVal = calculateToMark(prevNum, postNum, char);
                stack.push(calcVal);
            }
        });
        return stack.pop();
    }

    function solution(postfixExpression) {
        const answer = calculatePostfixExpression(postfixExpression);
        return answer;
    }

    function testFromExample() {
        const testNum = 1;
        const input = "123*+42+2/+";   
        const expectResult = 10;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = "352+*9-";
        const output = this.solution(input);
        
        console.log("S6P4\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testFromExample();
    }
    
    main();
}
