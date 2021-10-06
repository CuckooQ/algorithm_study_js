/**
 * Title: A를 #으로
 * Content: 대문자로 이루어진 영어 단어가 입력되면, 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력.
 * Input Condition: 첫 번째 줄에 문자열 입력.
 * Output Condition: 첫 번째 줄에 바뀐 단어 출력.
 * Input Example: BANANA
 * Output Example: B#N#N#
 */

{
  function solution(text) {
    const BEFORE_CHAR = "A";
    const AFTER_CHAR = "#";
    let answer;
    answer = text.toString().replaceAll(BEFORE_CHAR, AFTER_CHAR);
    return answer;
  }

  function testNoStr() {
    const testNum = 1;
    const input = "";
    const expectResult = "";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testhasNotAchar() {
    const testNum = 2;
    const input = "CHOCO";
    const expectResult = "CHOCO";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testHasOneAchar() {
    const testNum = 3;
    const input = "CHOCOLATE";
    const expectResult = "CHOCOL#TE";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testHasAllAchar() {
    const testNum = 4;
    const input = "AAAAAAAAAAAAAAA";
    const expectResult = "###############";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "BANANA";
    const output = this.solution(input);

    console.log("S1P9\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testNoStr();
    testhasNotAchar();
    testHasOneAchar();
    testHasAllAchar();
  }

  main();
}
