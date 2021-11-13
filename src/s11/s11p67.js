/**
 * Title: 2 x n 타일링
 * Content: 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다.
 *          이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다.
 *          타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.
 *          1. 타일을 가로로 배치 하는 경우
 *          2. 타일을 세로로 배치 하는 경우
 *          예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.
 *          ----------------------
 *          |  |_____|  |  |_____|
 *          |  |     |  |  |     |
 *          ----------------------
 *          직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.
 * Input Condition: 가로의 길이 n은 60,000이하의 자연수 입니다.
 * Output Condition: 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.
 * Input Example: 4
 * Output Example: 5
 */
// *다시 풀기
// *규칙을 찾을 때 경우의 수를 잘 못 찾은 것과 1,000,000,007의 의미를 몰랐던 것이 문제였다.

{
  const DIVISOR = 1_000_000_007;

  function getCnt(n) {
    let cnt = 0;
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % DIVISOR;
    }

    cnt = dp[n];
    return cnt;
  }

  function solution(n) {
    let answer;

    const cnt = getCnt(n);
    answer = cnt;

    return answer;
  }

  function main() {
    console.log("S11P67\n");

    const input = 4;
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
