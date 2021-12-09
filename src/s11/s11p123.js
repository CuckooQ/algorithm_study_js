/**
 * Title: 땅따먹기
 * Content: 땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
 *          1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
 *          단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
 *          예를 들면,
 *          | 1 | 2 | 3 | 5 |
 *          | 5 | 6 | 7 | 8 |
 *          | 4 | 3 | 2 | 1 |
 *          로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.
 *          마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요.
 *          위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 16점이 최고점이 되므로 16을 return 하면 됩니다.
 * Input Condition: 행의 개수 N : 100,000 이하의 자연수
 *                  열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
 *                  점수 : 100 이하의 자연수
 * Output Condition: None
 * Input Example: [[1,2,3,5],[5,6,7,8],[4,3,2,1]]
 * Output Example: 16
 */
// *다시 풀기

{
  // 다른 사람 풀이
  // 신박한대 이렇게는 못 풀 것 같다.
  function solution(land) {
    let answer = 0;

    answer = Math.max(
      ...land.reduce(
        (acc, val) => [
          val[0] + Math.max(acc[1], acc[2], acc[3]),
          val[1] + Math.max(acc[0], acc[2], acc[3]),
          val[2] + Math.max(acc[0], acc[1], acc[3]),
          val[3] + Math.max(acc[0], acc[1], acc[2]),
        ],
        Array(4).fill(0)
      )
    );

    return answer;
  }

  /*
  // 반복문
  function solution(land) {
    let answer = 0;

    const rowLen = land.length;
    const colLen = land[0].length;
    const calcArr = Array.from({ length: rowLen }, () => Array(colLen));
    for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < colLen; j++) {
        calcArr[i][j] = land[i][j];
        if (i !== 0) {
          const arr = [...calcArr[i - 1]];
          arr.splice(j, 1);
          calcArr[i][j] += Math.max(...arr);
        }
      }
    }

    answer = Math.max(...calcArr[rowLen - 1]);

    return answer;
  }
  */

  // DFS 시간 초과
  /*
  function solution(land) {
    let answer = 0;
    dfs();
    return answer;

    function dfs(cols = []) {
      if (cols.length === land.length) {
        const sum = cols.reduce((acc, col, idx) => acc + land[idx][col], 0);
        answer = sum > answer ? sum : answer;
        return;
      }

      for (let i = 0; i < COL_LEN; i++) {
        cols[cols.length - 1] !== i && dfs([...cols, i]);
      }
    }
  }
  */

  function main() {
    console.log("S11P123\n");

    const input = [
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ];
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
