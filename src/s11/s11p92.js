/**
 * Title: 약수의 합
 * Content: 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * Input Condition: n은 0 이상 3000이하인 정수입니다.
 * Output Condition: None
 * Input Example: 12
 * Output Example: 28
 */
// Expected: 10:05 - 10:45
// Actual: 10:05 - 10:!2

{
  function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        answer += i;
      }
    }

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = 5;
    const expectResult = 6;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P92\n");

    const input = 12;
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
