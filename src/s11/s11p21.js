/**
 * Title: 음양 더하기
 * Content: 어떤 정수들이 있습니다.
 *          이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
 *          실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: absolutes의 길이는 1 이상 1,000 이하입니다.
 *                  absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
 *                  signs의 길이는 absolutes의 길이와 같습니다.
 *                  signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
 * Output Condition: None
 * Input Example: absolutes = [4,7,12]
 *                sign = [true,false,true]
 * Output Example: 9
 */
// Expected: 12:45 - 13:15
// Actual: 12:45 - 12:55

{
  function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, val, idx) => {
      const num = signs[idx] ? val : -1 * val;
      return acc + num;
    }, 0);

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputAbsolutes = [1, 2, 3];
    const inputSigns = [false, false, true];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputAbsolutes, inputSigns) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P21\n");

    const inputAbsolutes = [4, 7, 12];
    const inputSigns = [true, false, true];
    const output = this.solution(inputAbsolutes, inputSigns);

    // test();
    console.log(`Input: ${inputAbsolutes.join(" ")}\n${inputSigns.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
