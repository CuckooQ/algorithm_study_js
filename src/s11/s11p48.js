/**
 * Title: 게임 맵 최단거리
 * Content: ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다.
 *          따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
 *          지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다.
 *          다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고,
 *          상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.
 *           _ _ _ _ _
 *          |S|x| | | |
 *          | |x| |x| |
 *          | |x| | | |
 *          | | | |x| |
 *          |x|x|x|x|G|
 *           - - - - -
 *          위 그림에서 X 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다.
 *          캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
 *          아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.
 *          첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
 *           _ _ _ _ _
 *          |S|x| | | |
 *          |o|x| |x| |
 *          |o|x|o|o|o|
 *          |o|o|o|x|o|
 *          |x|x|x|x|G|
 *           - - - - -
 *          두 번째 방법은 15개의 칸을 지나서 상대팀 진영에 도착했습니다.
 *           _ _ _ _ _
 *          |S|x|o|o|o|
 *          |o|x|o|x|o|
 *          |o|x|o| |o|
 *          |o|o|o|x|o|
 *          |x|x|x|x|G|
 *           - - - - -
 *          위 예시에서는 첫 번째 방법보다 더 빠르게 상대팀 진영에 도착하는 방법은 없으므로,
 *          이 방법이 상대 팀 진영으로 가는 가장 빠른 방법입니다.
 *          만약, 상대 팀이 자신의 팀 진영 주위에 벽을 세워두었다면 상대 팀 진영에 도착하지 못할 수도 있습니다.
 *          예를 들어, 다음과 같은 경우에 당신의 캐릭터는 상대 팀 진영에 도착할 수 없습니다.
 *           _ _ _ _ _
 *          |S|x| | | |
 *          | |x| |x| |
 *          | |x| | | |
 *          | | | |x|X|
 *          |x|x|x|x|G|
 *           - - - - -
 *          게임 맵의 상태 maps가 매개변수로 주어질 때,
 *          캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요.
 *          단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.
 * Input Condition: maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
 *                  n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
 *                  maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
 *                  처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
 * Output Condition: None
 * Input Example: [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
 * Output Example: 11
 */
// Expected: 09:33 - 10:13
// Actual: 09:33 - 11:00
// *다시 풀기
// *드디어 BFS를 활용해서 풀 수 있었다.

{
  const BLOCKED = 0;
  const PASSABLE = 1;

  function getMinCntOfBlock(maps) {
    let minCnt = -1;
    const tmpMaps = [];
    maps.forEach((row) => {
      tmpMaps.push([...row]);
    });
    const queue = [];

    bfs();

    return minCnt;

    function bfs() {
      queue.push(["0 0", 1]);

      while (queue.length) {
        let [nowIdx, cnt] = queue.shift();
        nowIdx = nowIdx.split(" ");
        nowIdx[0] = Number(nowIdx[0]);
        nowIdx[1] = Number(nowIdx[1]);

        if (
          nowIdx[0] === tmpMaps.length - 1 &&
          nowIdx[1] === tmpMaps[0].length - 1
        ) {
          if (minCnt === -1 || cnt < minCnt) {
            minCnt = cnt;
          }
        }

        const leftIdx = [nowIdx[0], nowIdx[1] - 1];
        const rightIdx = [nowIdx[0], nowIdx[1] + 1];
        const topIdx = [nowIdx[0] - 1, nowIdx[1]];
        const bottomIdx = [nowIdx[0] + 1, nowIdx[1]];
        const targetIdxes = [topIdx, bottomIdx, leftIdx, rightIdx];

        const leftBlock = tmpMaps[leftIdx[0]]
          ? tmpMaps[leftIdx[0]][leftIdx[1]]
          : null;
        const rightBlock = tmpMaps[rightIdx[0]]
          ? tmpMaps[rightIdx[0]][rightIdx[1]]
          : null;
        const topBlock = tmpMaps[topIdx[0]]
          ? tmpMaps[topIdx[0]][topIdx[1]]
          : null;
        const bottomBlock = tmpMaps[bottomIdx[0]]
          ? tmpMaps[bottomIdx[0]][bottomIdx[1]]
          : null;
        const targetBlocks = [topBlock, bottomBlock, leftBlock, rightBlock];

        for (let i = 0; i < targetIdxes.length; i++) {
          if (targetBlocks[i] === PASSABLE) {
            tmpMaps[targetIdxes[i][0]][targetIdxes[i][1]] = BLOCKED;
            queue.push([targetIdxes[i].join(" "), cnt + 1]);
          }
        }
      }
    }
  }

  /*
  // dfs 70점 효율성 테스트 실패 
  function getMinCntOfBlock(maps) {
    let minCnt = -1;
    dfs();
    return minCnt;

    function dfs(route = ["0 0"]) {
      const nowIdx = route[route.length - 1].split(" ");
      nowIdx[0] = Number(nowIdx[0]);
      nowIdx[1] = Number(nowIdx[1]);
      if (nowIdx[0] === maps.length - 1 && nowIdx[1] === maps[0].length - 1) {
        const cnt = route.length;
        if (minCnt === -1 || cnt < minCnt) {
          minCnt = cnt;
        }
        return;
      }

      const leftIdx = [nowIdx[0], nowIdx[1] - 1];
      const rightIdx = [nowIdx[0], nowIdx[1] + 1];
      const topIdx = [nowIdx[0] - 1, nowIdx[1]];
      const bottomIdx = [nowIdx[0] + 1, nowIdx[1]];
      const targetIdxes = [topIdx, bottomIdx, leftIdx, rightIdx];

      const leftBlock = maps[leftIdx[0]] ? maps[leftIdx[0]][leftIdx[1]] : null;
      const rightBlock = maps[rightIdx[0]]
        ? maps[rightIdx[0]][rightIdx[1]]
        : null;
      const topBlock = maps[topIdx[0]] ? maps[topIdx[0]][topIdx[1]] : null;
      const bottomBlock = maps[bottomIdx[0]]
        ? maps[bottomIdx[0]][bottomIdx[1]]
        : null;
      const targetBlocks = [topBlock, bottomBlock, leftBlock, rightBlock];

      for (let i = 0; i < targetIdxes.length; i++) {
        !route.includes(targetIdxes[i].join(" ")) &&
          targetBlocks[i] === PASSABLE &&
          dfs([...route, targetIdxes[i].join(" ")]);
      }
    }
  }
  */

  function solution(maps) {
    const answer = getMinCntOfBlock(maps);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ];
    const expectResult = -1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P48\n");

    const input = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
