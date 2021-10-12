/**
 * Title: 송아지 찾기 (BFS: 상태트리탐색)
 * Content: 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치 추적기가 달려 있다.
 *          현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면, 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
 *          송아지는 움직이지 않고 제자리에 있다.
 *          현수는 스카이 콩콩을 타고 가는데, 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 *          최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하라.
 * Input Condition: 첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다.
 *                  직선의 좌표 점은 1부터 10,000까지이다.
 * Output Condition: 점프의 최소 횟수를 구한다. 답은 1이상이다.
 * Input Example: 5 14
 * Output Example: 3
 * Input Example2: 8 3
 * Output Example2: 5
 */
// *다시 풀기

{
  const GO_FORWARD = 1;
  const GO_FORWARD_MORE_STEP = 5;
  const GO_BACK = -1;

  function getMinCntOfJump(myPosition, calfPosition) {
    let cnt;
    const route = [];
    bfs();

    return cnt;

    function bfs() {
      let level = 0;
      const queue = [];
      queue.push([myPosition, level]);

      while (queue.length) {
        const [position, level] = queue.shift();
        if (route.includes(position)) {
          continue;
        }

        if (position === calfPosition) {
          cnt = level;
          break;
        }

        route.push(position);
        queue.push([position + GO_FORWARD, level + 1]);
        queue.push([position + GO_BACK, level + 1]);
        queue.push([position + GO_FORWARD_MORE_STEP, level + 1]);
      }
    }
  }

  function solution(myPosition, calfPosition) {
    const answer = getMinCntOfJump(myPosition, calfPosition);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputMyPosition = 8;
    const inputCalfPosition = 3;
    const expectResult = 5;
    const testFunction = solution;
    const condition =
      testFunction(inputMyPosition, inputCalfPosition) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S9P5\n");

    const inputMyPosition = 5;
    const inputCalfPosition = 14;
    const output = this.solution(inputMyPosition, inputCalfPosition);

    // test();
    console.log(`Input: ${inputMyPosition} ${inputCalfPosition}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
