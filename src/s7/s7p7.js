/**
 * Title: 좌표 정렬
 * Content: N개의 평면상의 좌표(x, y)가 주어지면, 모든 좌표를 오름차순으로 정렬하기.
 *          정렬 기준은 먼저 x값에 의해서 정렬하고, x값이 같은 경우 y값에 의해 정렬한다.
 * Input Condition: 첫 번째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어진다.
 *                  두 번째 줄부터 N개의 좌표가 x,y순으로 주어진다. x, y값은 양수만 입력된다.
 * Output Condition: N개의 좌표를 정렬하여 출력한다.
 * Input Example: 5
 *                2 7
 *                1 3
 *                1 2
 *                2 5
 *                3 6
 * Output Example: 1 2
 *                 1 3
 *                 2 5
 *                 2 7
 *                 3 6
 */

{
  const MAX_COORDINATE_CNT = 100_000;
  const MIN_COORDINATE_CNT = 3;

  function getSortedCoordinatesAsc(coordinates) {
    const X_IDX = 0;
    const Y_IDX = 1;
    const sortedCoordinates = Array.from(coordinates).sort((prev, post) => {
      if (prev[X_IDX] !== post[X_IDX]) {
        return prev[X_IDX] - post[X_IDX];
      } else {
        return prev[Y_IDX] - post[Y_IDX];
      }
    });

    return sortedCoordinates;
  }

  function solution(coordinates) {
    const sortedCoordinates = getSortedCoordinatesAsc(coordinates);
    const answer = sortedCoordinates.join("\n");
    return answer;
  }

  function testToMaxCoordinateCnt() {
    const testNum = 1;
    const input = Array.from({ length: MAX_COORDINATE_CNT }, (_, idx) => [
      idx + 1,
      idx + 1,
    ]).reverse();
    const expectResult = input.reverse().join("\n");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinCoordinateCnt() {
    const testNum = 2;
    const input = Array.from({ length: MIN_COORDINATE_CNT }, (_, idx) => [
      idx + 1,
      idx + 1,
    ]).reverse();
    const expectResult = input.reverse().join("\n");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = [
      [2, 7],
      [1, 3],
      [1, 2],
      [2, 5],
      [3, 6],
    ];
    const output = this.solution(input);

    console.log("S7P7\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxCoordinateCnt();
    testToMinCoordinateCnt();
  }

  main();
}
