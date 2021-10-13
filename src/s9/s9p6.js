/**
 * Title: 섬나라 아일랜드 (DFS)
 * Content: N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어진다.
 *          각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다이다.
 *          섬나라 아일랜드에 몇 개의 섬이 있는지 구하라.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=20)이 주어진다.
 *                  두 번째 줄부터 격자판 정보가 주어진다.
 * Output Condition: 첫 번째 줄에 격자판 정보가 주어진다.
 * Input Example: 7
 *                1 1 0 0 0 1 0
 *                0 1 1 0 1 1 0
 *                0 1 0 0 0 0 0
 *                0 0 0 1 0 1 1
 *                1 1 0 1 1 0 0
 *                1 0 0 0 1 0 0
 *                1 0 1 0 1 0 0
 * Output Example: 5
 */
// 다시 풀기.

{
  const SEA = 0;
  const GROUND = 1;

  function getCntOfIsland(mapMatrix) {
    let cnt = 0;
    const endPosition = [mapMatrix.length, mapMatrix.length];

    dfs();

    return cnt;

    function isEnd(x, y) {
      return x > endPosition[0] + 1 || y > endPosition[1] + 1;
    }

    function isUndefined(x, y) {
      return mapMatrix[x] === undefined || mapMatrix[x][y] === undefined;
    }

    function isSea(x, y) {
      return isUndefined(x, y) || mapMatrix[x][y] === SEA;
    }

    function isGround(x, y) {
      return !isUndefined(x, y) && mapMatrix[x][y] === GROUND;
    }

    function isAlreadyPass(x, y, route) {
      let alreadyPassX = false;
      let alreadyPassY = false;

      for (pos of route) {
        alreadyPassX = pos[0] === x;
        alreadyPassY = pos[1] === y;

        if (alreadyPassX && alreadyPassY) {
          return true;
        }
      }

      return false;
    }

    function isPassable(x, y, route) {
      return isGround(x, y) && !isAlreadyPass(x, y, route);
    }

    function passToNext(x, y, route) {
      const newRoute = [...route, [x, y]];

      if (isPassable(x - 1, y - 1, route)) {
        dfs(x - 1, y - 1, newRoute);
      } else if (isPassable(x - 1, y, route)) {
        dfs(x - 1, y, newRoute);
      } else if (isPassable(x - 1, y + 1, route)) {
        dfs(x - 1, y + 1, newRoute);
      } else if (isPassable(x, y - 1, route)) {
        dfs(x, y - 1, newRoute);
      } else if (isPassable(x, y + 1, route)) {
        dfs(x, y + 1, newRoute);
      } else if (isPassable(x + 1, y - 1, route)) {
        dfs(x + 1, y - 1, newRoute);
      } else if (isPassable(x + 1, y, route)) {
        dfs(x + 1, y, newRoute);
      } else if (isPassable(x + 1, y + 1, route)) {
        dfs(x + 1, y + 1, newRoute);
      } else {
        !isSea(x, y) && cnt++;
        isUndefined(x, y + 1)
          ? dfs(x + 1, 0, [...newRoute])
          : dfs(x, y + 1, [...newRoute]);
      }
    }

    function dfs(x = 0, y = 0, route = []) {
      if (isEnd(x, y)) {
        return;
      }

      passToNext(x, y, route);
    }
  }

  function solution(mapMatrix) {
    const answer = getCntOfIsland(mapMatrix);
    return answer;
  }

  function main() {
    console.log("S9P6\n");

    const inputMapMatrix = [
      [1, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0],
    ];
    const output = this.solution(inputMapMatrix);

    console.log(`Input: ${inputMapMatrix.join("\n")}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
