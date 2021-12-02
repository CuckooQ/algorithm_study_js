/**
 * Title: 올바른 괄호
 * Content: 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
 *          예를 들어,
 *          "()()" 또는 "(())()" 는 올바른 괄호입니다.
 *          ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 *          '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 * Input Condition: 문자열 s의 길이 : 100,000 이하의 자연수
 *                  문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
 * Output Condition: None
 * Input Example: "()()"
 * Output Example: true
 */
// Expected: 10:47 - 11:27
// Actual: 10:47 - 10:59

{
  const PARENTHESIS = {
    LEFT: "(",
    RIGHT: ")",
  };

  function solution(s) {
    let answer = true;

    if (s[0] !== PARENTHESIS.LEFT || s[s.length - 1] !== PARENTHESIS.RIGHT) {
      return false;
    }

    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === PARENTHESIS.LEFT) {
        stack.push(1);
      }
      if (s[i] === PARENTHESIS.RIGHT) {
        if (!stack.length) {
          answer = false;
          break;
        }
        stack.pop();
      }
    }

    if (stack.length) {
      answer = false;
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "(())()";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = ")()(";
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "(()(";
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P120\n");

    const input = "()()";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
