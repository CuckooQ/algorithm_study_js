/**
 * Title: 올바른 괄호
 * Content: 괄호가 입력되었을 때 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력한다.
 * Input Condition: 첫 번째 줄에 괄호 문자열이 입력된다.
 *                  문자열의 최대 길이는 30이다.
 * Output Condition:첫 번쨰 줄에 YES나 NO를 출력한다.
 * Input Example: (()(()))(()
 * Output Example: NO
 */
// *다시 풀기.
// *Stack을 이용한 방법을 생각 못했다.

{
  const MAX_LENGTH = 30;
  const YES = "YES";
  const NO = "NO";
  const LEFT_PARENTHESIS = "(";
  const RIGHT_PARENTHESIS = ")";

  function isValidParenthesis(parenthesis) {
    let isValid = true;
    const stack = new Array();
    for (char of parenthesis.split("")) {
      if (char === LEFT_PARENTHESIS) {
        stack.push(1);
      } else {
        if (stack.length === 0) {
          isValid = false;
          break;
        }
        stack.pop();
      }
    }

    if (stack.length !== 0) {
      isValid = false;
    }

    return isValid;
  }

  function solution(parenthesis) {
    const isParenthesis = isValidParenthesis(parenthesis);
    const answer = isParenthesis ? YES : NO;
    return answer;
  }

  function testToRightParenthesis() {
    const testNum = 1;
    const input = "(()()(((()))))";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToWorngParenthesis() {
    const testNum = 2;
    const input = "(()()))))((())";
    const expectResult = NO;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxLen() {
    const testNum = 3;
    const input = Array.from({ length: MAX_LENGTH }, (_, idx) => {
      if (idx % 2 === 0) {
        return LEFT_PARENTHESIS;
      } else {
        return RIGHT_PARENTHESIS;
      }
    }).join("");
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "(()(()))(()";
    const output = this.solution(input);

    console.log("S6P1\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToRightParenthesis();
    testToWorngParenthesis();
    testToMaxLen();
  }

  main();
}
