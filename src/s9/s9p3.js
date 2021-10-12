/**
 * Title: 미로 탐색 (DFS)
 * Content: 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하라.
 *          출발점은 격자의 (1,1)좌표이고, 탈출 도착점은 (7,7)좌표이다.
 *          격자판의 1은 벽이고, 0은 통로이다.
 *          격자판의 움직임은 상하좌우로만 움직인다.
 *
 *          S 0 0 0 0 0 0
 *          0 1 1 1 1 1 0
 *          0 0 0 1 0 0 0
 *          1 1 0 1 0 1 1
 *          1 1 0 0 0 0 1
 *          1 1 0 1 1 0 0
 *          1 0 0 0 0 0 E
 *
 *          위의 미로에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8이다.
 *
 * Input Condition: 7*7 격자판의 정보가 주어진다.
 * Output Condition: 첫 번째 줄에 경로의 가지 수를 출력한다.
 * Input Example: 0 0 0 0 0 0 0
 *                0 1 1 1 1 1 0
 *                0 0 0 1 0 0 0
 *                1 1 0 1 0 1 1
 *                1 1 0 0 0 0 1
 *                1 1 0 1 1 0 0
 *                1 0 0 0 0 0 0
 * Output Example: 8
 */

{
  const PASSABLE = 0;
  // const BLOCK = 1;
  const X_IDX = 0;
  const Y_IDX = 1;

  function getCntOfEscapeWay(mazeGraph) {
    let cnt = 0;

    const endXIdx = mazeGraph.length - 1;
    const endYIdx = mazeGraph[0].length - 1;
    dfs();

    return cnt;

    function isExistPass(x, y) {
      return mazeGraph[x] !== undefined && mazeGraph[x][y] != undefined;
    }

    function isAlreadyPass(x, y, route) {
      let alreadyPass = false;

      for (const unit of route) {
        const alreadyPassX = unit[X_IDX] === x;
        const alreadyPassY = unit[Y_IDX] === y;
        if (alreadyPassX & alreadyPassY) {
          alreadyPass = true;
          break;
        }
      }

      return alreadyPass;
    }

    function isPassable(x, y) {
      return mazeGraph[x][y] === PASSABLE;
    }

    function dfs(x = 0, y = 0, route = []) {
      if (
        !isExistPass(x, y) ||
        isAlreadyPass(x, y, route) ||
        !isPassable(x, y)
      ) {
        return;
      }

      if (x === endXIdx && y === endYIdx) {
        cnt++;
        return;
      }

      route = [...route, [x, y]];
      dfs(x + 1, y, route);
      dfs(x - 1, y, route);
      dfs(x, y + 1, route);
      dfs(x, y - 1, route);
    }
  }

  function solution(mazeInfo) {
    const answer = getCntOfEscapeWay(mazeInfo);
    return answer;
  }

  function main() {
    console.log("S9P3\n");

    const input = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ];
    const output = this.solution(input);

    console.log(`Input: ${input.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
