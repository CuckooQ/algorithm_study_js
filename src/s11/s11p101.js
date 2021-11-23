/**
 * Title: 정수 제곱근 판별
 * Content: 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 *          n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 * Input Condition: n은 1이상, 50000000000000 이하인 양의 정수입니다.
 * Output Condition: None
 * Input Example: 121
 * Output Example: 144
 */
// Expected: 12:49 - 13:29
// Actual: 12:49 - 12:54

{
  function solution(n) {
    const sqrtN = Math.sqrt(n);
    return Number.isInteger(sqrtN) ? (sqrtN + 1) ** 2 : -1;
  }

  function testToExample() {
    const testNum = 1;
    const input = 3;
    const expectResult = -1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P101\n");

    const input = 121;
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
