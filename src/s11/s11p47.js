/**
 * Title: 나머지가 1이 되는 수 찾기
 * Content: 자연수 n이 매개변수로 주어집니다.
 *          n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
 *          답이 항상 존재함은 증명될 수 있습니다.
 * Input Condition: 3 ≤ n ≤ 1,000,000
 * Output Condition: None
 * Input Example: 10
 * Output Example: 3
 */
// Expected: 09:19 - 09:59
// Actual: 09:19 - 09:30

{
  const MIN_N = 3;
  const REMAIN = 1;

  function solution(n) {
    let answer = 0;

    for (let i = MIN_N - 1; i < n; i++) {
      if ((n - REMAIN) % i === 0) {
        answer = i;
        break;
      }
    }

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = 12;
    const expectResult = 11;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P47\n");

    const input = 10;
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
