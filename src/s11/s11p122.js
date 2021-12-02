/**
 * Title: 다음 큰 숫자
 * Content: 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
 *          조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
 *          조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
 *          조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
 *          예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
 *          자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
 * Input Condition: n은 1,000,000 이하의 자연수 입니다.
 * Output Condition: None
 * Input Example: 78
 * Output Example: 83
 */
// Expected: 11:24 - 12:04
// Actual: 11:24 - 11:34
// *복습을 위해 다시 풀기
// *다른 사람 풀이가 더 간결했다.

{
  // 다른 사람 풀이
  function solution(n) {
    return getNextNum();

    function getNextNum(tmpNextNum = n + 1) {
      return n.toString(2).match(/1/g).length ===
        tmpNextNum.toString(2).match(/1/g).length
        ? tmpNextNum
        : getNextNum(tmpNextNum + 1);
    }
  }

  /*
  function solution(n) {
    let answer = 0;

    const binNumOneCnt = n.toString(2).match(/1/g).length;
    let nextNum = n + 1;
    while (!answer) {
      const nextBinNumOneCnt = nextNum.toString(2).match(/1/g).length;

      if (binNumOneCnt === nextBinNumOneCnt) {
        answer = nextNum;
      }

      nextNum++;
    }

    return answer;
  }
  */

  function testToExample() {
    const testNum = 1;
    const input = 15;
    const expectResult = 23;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P122\n");

    const input = 78;
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
