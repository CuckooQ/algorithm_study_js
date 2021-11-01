/**
 * Title: 순위
 * Content: n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다.
 *          권투 경기는 1대1 방식으로 진행이 되고,
 *          만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다.
 *          심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다.
 *          하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
 *          선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때,
 *          정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 선수의 수는 1명 이상 100명 이하입니다.
 *                  경기 결과는 1개 이상 4,500개 이하입니다.
 *                  results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
 *                  모든 경기 결과에는 모순이 없습니다.
 * Output Condition: None
 * Input Example: n = 5
 *                results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
 * Output Example: 2
 */
// Expected: 15:57 - 16:37
// Actual: 15:57 - 16:36

{
  class Player {
    constructor(num) {
      this.num = num;
      this.upperRankers = [];
      this.lowerRankers = [];
    }
  }

  function getCntOfCanSetRank(n, results) {
    let cnt = 0;

    const players = Array.from({ length: n + 1 }, (_, idx) => new Player(idx));
    results.forEach((result) => {
      const winner = result[0];
      const loser = result[1];
      players[winner].lowerRankers.push(loser);
      players[loser].upperRankers.push(winner);
    });

    for (let i = 1; i <= n; i++) {
      const player = players[i];
      const upperSet = new Set();
      const lowerSet = new Set();
      player.upperRankers.forEach((ranker) => {
        dfsToUpper(ranker, upperSet);
      });
      player.lowerRankers.forEach((ranker) => {
        dfsToLower(ranker, lowerSet);
      });
      if (upperSet.size + lowerSet.size === n - 1) {
        cnt++;
      }
    }

    return cnt;

    function dfsToUpper(targetRanker, set) {
      set.add(targetRanker);
      const player = players[targetRanker];
      player.upperRankers.forEach((ranker) => {
        !set.has(ranker) && dfsToUpper(ranker, set);
      });
    }

    function dfsToLower(targetRanker, set) {
      set.add(targetRanker);
      const player = players[targetRanker];
      player.lowerRankers.forEach((ranker) => {
        !set.has(ranker) && dfsToLower(ranker, set);
      });
    }
  }

  function solution(n, results) {
    const answer = getCntOfCanSetRank(n, results);
    return answer;
  }

  function main() {
    console.log("S11P43\n");

    const inputN = 5;
    const inputResults = [
      [4, 3],
      [4, 2],
      [3, 2],
      [1, 2],
      [2, 5],
    ];
    const output = this.solution(inputN, inputResults);

    console.log(`Input: ${inputN}\n${inputResults.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
