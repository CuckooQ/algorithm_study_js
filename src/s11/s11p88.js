/**
 * Title: 문자열을 정수로 바꾸기
 * Content: 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
 * Input Condition: s의 길이는 1 이상 5이하입니다.
 *                  s의 맨앞에는 부호(+, -)가 올 수 있습니다.
 *                  s는 부호와 숫자로만 이루어져있습니다.
 *                  s는 "0"으로 시작하지 않습니다.
 * Output Condition: None
 * Input Example: "1234"
 * Output Example: 1234
 */
// Expected: 09:00 - 09:40
// Actual: 09:00 - 09:04

{
  function solution(s) {
    const answer = Number(s);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "-1234";
    const expectResult = -1234;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P88\n");

    const input = "1234";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
