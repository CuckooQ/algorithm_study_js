/**
 * Title: 돌다리 건너기
 * Content: 철수는 학교를 가는데 개울을 만났다.
 *          개울은 N개의 돌로 다리를 만들어 놓았다.
 *          철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있다.
 *          철수가 개울을 건너는 방법은 몇 가지인지 구하라.
 * Input Condition: 첫 번째 줄은 돌의 개수인 자연수 N(3<=N<=45)가 주어진다.
 * Output Condition: 첫 번째 줄에 개울을 건너는 방법 수를 출력한다.
 * Input Example: 7
 * Output Example: 34
 */
/**
 * 1: 1+1, 2 -> 2개
 * 2: 1+1+1, 1+2, 2+1 -> 3개
 * 3: d[1]+d[2]
 * 4: d[2]+d[3]
 * ...
 */

{
  // const MAX_STEPS_CNT = 45;
  const MIN_STEPS_CNT = 3;

  function getCntOfWayToPass(stepsCnt) {
    let cnt = 0;
    const d = Array.from({ length: stepsCnt + 1 }, () => 0);
    d[1] = 2;
    d[2] = 3;

    for (let i = 3; i <= stepsCnt; i++) {
      d[i] = d[i - 2] + d[i - 1];
    }

    cnt = d[stepsCnt];

    return cnt;
  }

  function solution(stepsCnt) {
    const answer = getCntOfWayToPass(stepsCnt);
    return answer;
  }

  function testToMinSteps() {
    const testNum = 1;
    const input = MIN_STEPS_CNT;
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  /*
  function testToMaxSteps() {
    const testNum = 2;
    const input = MAX_STEPS_CNT;
    const expectResult = ???;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  */
  function main() {
    console.log("S10P2\n");

    const input = 7;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMinSteps();
    // testToMaxSteps();
  }

  main();
}
