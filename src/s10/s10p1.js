/**
 * Title: 계단 오르기
 * Content: 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
 *          만약 총 4계단을 오른다면, 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2로 총 5가지이다.
 *          총 N계단일 때 철수가 올라갈 수 있는 방법의 수를 구하라.
 * Input Condition: 첫 번째 줄은 계단의 개수인 자연수 N(3<=N<=45)가 주어진다.
 * Output Condition: 첫 번째 줄에 올라가는 방법의 수를 출력한다.
 * Input Example: 7
 * Output Example: 21
 */
// *다이나믹 프로그래밍 복습을 위해 다시 풀기

{
  const GO_UP_DEFAULT = 1;
  const GO_UP_HIGHER = 2;

  const MAX_STEP = 45;
  const MIN_STEP = 3;

  function getCntOfWayToGoUp(stepsCnt) {
    let cnt = 0;
    const d = Array.from({ length: stepsCnt + 1 }, () => 0);
    d[1] = 1;
    d[2] = 2;

    for (let i = 3; i <= stepsCnt; i++) {
      d[i] = d[i - 2] + d[i - 1];
    }

    cnt = d[stepsCnt];

    return cnt;
  }

  function solution(stepsCnt) {
    const answer = getCntOfWayToGoUp(stepsCnt);
    return answer;
  }

  function testToMinStep() {
    const testNum = 1;
    const input = MIN_STEP;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  /*
  function testToMaxStep() {
    const testNum = 2;
    const input = MAX_STEP;
    const expectResult = ???;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  */

  function main() {
    console.log("S10P1\n");

    const input = 7;
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMinStep();
    // testToMaxStep();
  }

  main();
}
