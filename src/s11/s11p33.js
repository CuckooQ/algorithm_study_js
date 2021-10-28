/**
 * Title: 약수의 개수와 덧셈
 * Content: 두 정수 left와 right가 매개변수로 주어집니다.
 *          left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
 *          약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 1 ≤ left ≤ right ≤ 1,000
 * Output Condition: None
 * Input Example: left = 13
 *                right = 17
 * Output Example: 43
 */
// Expected: 14:32 - 15:12
// Actual: 14:32 - 14:44

{
  function getDivisorCnt(num) {
    let cnt = 0;

    for (let i = 1; i <= num; i++) {
      num % i === 0 && cnt++;
    }

    return cnt;
  }

  function getResult(left, right) {
    let sum = 0;

    for (let i = left; i <= right; i++) {
      sum = getDivisorCnt(i) % 2 === 0 ? sum + i : sum - i;
    }

    return sum;
  }

  function solution(left, right) {
    const answer = getResult(left, right);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputLeft = 24;
    const inputRight = 27;
    const expectResult = 52;
    const testFunction = solution;
    const condition = testFunction(inputLeft, inputRight) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputLeft = 1;
    const inputRight = 1;
    const expectResult = -1;
    const testFunction = solution;
    const condition = testFunction(inputLeft, inputRight) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P33\n");

    const inputLeft = 13;
    const inputRight = 17;
    const output = this.solution(inputLeft, inputRight);

    // test();
    console.log(`Input: ${inputLeft} ${inputRight} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
