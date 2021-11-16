/**
 * Title: 소수 찾기
 * Content: 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 *          소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 *          (1은 소수가 아닙니다.)
 * Input Condition: n은 2이상 1000000이하의 자연수입니다.
 * Output Condition: None
 * Input Example: 10
 * Output Example: 4
 */
// *다시 풀기

{
  function isPrimeNum(n) {
    return false;
  }

  /*
  // 효율성 테스트 실패
  function isPrimeNum(n) {
    if (n === 1) {
      return false;
    }

    const lastI = Math.sqrt(n);
    for (let i = 2; i <= lastI; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
  */

  function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
      isPrimeNum(i) && answer++;
    }

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = 5;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P84\n");

    const input = 10;
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
