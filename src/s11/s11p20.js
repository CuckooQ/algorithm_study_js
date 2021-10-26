/**
 * Title: 없는 숫자 더하기
 * Content: 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다.
 *          numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 1 ≤ numbers의 길이 ≤ 9
 *                  0 ≤ numbers의 모든 수 ≤ 9
 *                  numbers의 모든 수는 서로 다릅니다.
 * Output Condition: None
 * Input Example: [1,2,3,4,6,7,8,0]
 * Output Example: 14
 */
// Expected: 12:36 - 13:16
// Actual: 12:36 - 12:44

{
  const ALL_SUM = 45;

  function solution(numbers) {
    let answer = 0;

    const sum = numbers.reduce((acc, val) => acc + val, 0);
    answer = ALL_SUM - sum;

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [5, 8, 4, 0, 6, 7, 9];
    const expectResult = 6;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P20\n");

    const input = [1, 2, 3, 4, 6, 7, 8, 0];
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
