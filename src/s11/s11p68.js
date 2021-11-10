/**
 * Title: 두 정수 사이의 합
 * Content: 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 *          예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 * Input Condition: a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
 *                  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
 *                  a와 b의 대소관계는 정해져있지 않습니다.
 * Output Condition: None
 * Input Example: a = 3
 *                b = 5
 * Output Example: 12
 */
// Expected: 09:37 - 10:17
// Actual: 09:37 - 09:45
// *가우스의 법칙으로 두 정수 사이의 합을 구할 수 있다.
// *합 = (맨 끝 숫자 + 처음 숫자) * (전체 정수 개수 / 2)

{
  // 다른 사람 풀이 (가우스의 법칙)
  function solution(a, b) {
    const answer = (a + b) * ((Math.abs(b - a) + 1) / 2);
    return answer;
  }

  /*
  function solution(a, b) {
    let answer = 0;

    const minN = Math.min(a, b);
    const maxN = Math.max(a, b);
    for (let i = minN; i <= maxN; i++) {
      answer += i;
    }
    return answer;
  }
  */
  function testToExample1() {
    const testNum = 1;
    const inputA = 3;
    const inputB = 3;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 1;
    const inputA = 5;
    const inputB = 3;
    const expectResult = 12;
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P68\n");

    const inputA = 3;
    const inputB = 5;
    const output = this.solution(inputA, inputB);

    // test();
    console.log(`Input: ${inputA} ${inputB}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
