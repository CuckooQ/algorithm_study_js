/**
 * Title: 팩토리얼
 * Content: 자연수 N을 입력하면 N!값을 구하라.
 *          N! = n*(n-1)*(n-2)*...2*1이다.
 *          만약 N=5라면 5!=5*4*3*2*1이다.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=10)이 입력된다.
 * Output Condition: 첫 번째 줄에 N팩토리얼 값을 출력한다.
 * Input Example: 5
 * Output Example: 120
 */

{
  const MAX_NUM = 10;
  const MIN_NUM = 3;

  function factorial(num) {
    let factorialVal = 1;
    dfs(num);
    return factorialVal;

    function dfs(num) {
      if (num === 1) {
        return;
      }

      factorialVal *= num;
      dfs(num - 1);
    }
  }

  function solution(num) {
    const answer = factorial(num);
    return answer;
  }

  function testToMaxNum() {
    const testNum = 1;
    const input = MAX_NUM;
    const expectResult = 3628800;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNum() {
    const testNum = 2;
    const input = MIN_NUM;
    const expectResult = 6;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P11\n");

    const input = 5;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxNum();
    testToMinNum();
  }

  main();
}
