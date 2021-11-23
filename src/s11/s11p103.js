/**
 * Title: 짝수와 홀수
 * Content: 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 * Input Condition: num은 int 범위의 정수입니다.
 *                  0은 짝수입니다.
 * Output Condition: None
 * Input Example: 3
 * Output Example: "Odd"
 */
// Expected: 12:59 - 13:39
// Actual: 12:59 - 13:01

{
  function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }

  function testToExample() {
    const testNum = 1;
    const input = 4;
    const expectResult = "Even";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P103\n");

    const input = 3;
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
