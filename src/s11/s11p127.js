/**
 * Title: 피보나치 수
 * Content: 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
 *          예를들어
 *          F(2) = F(0) + F(1) = 0 + 1 = 1
 *          F(3) = F(1) + F(2) = 1 + 1 = 2
 *          F(4) = F(2) + F(3) = 1 + 2 = 3
 *          F(5) = F(3) + F(4) = 2 + 3 = 5
 *          와 같이 이어집니다.
 *          2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
 * Input Condition: n은 2 이상 100,000 이하인 자연수입니다.
 * Output Condition: None
 * Input Example: 3
 * Output Example: 2
 */
// Expected: 14:18 - 14:58
// Actual: 14:18 - 14:54
// *다시 풀기
// 재귀함수를 사용할 때는 최대 입력값에 따른 콜 스택 초과를 주의하자.

{
  const DIVISOR = 1234567;

  function solution(n) {
    let answer;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = ((dp[i - 1] % DIVISOR) + (dp[i - 2] % DIVISOR)) % DIVISOR;
    }
    answer = dp[n];

    return answer;
  }

  /*
  // 재귀함수 콜스택 초과 
  function solution(n) {
    const dp = [0, 1];
    
    return rf(n);

    function rf(num) {
      if (dp[num] !== undefined) {
        return dp[num];
      }

      if (num === 0 || num === 1) {
        return dp[num];
      }
      dp[num] = ((rf(num - 1) % DIVISOR) + (rf(num - 2) % DIVISOR)) % DIVISOR;
      return dp[num];
    }
  }
  */

  function testToExample() {
    const testNum = 1;
    const input = 5;
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P127\n");

    const input = 100000;
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
