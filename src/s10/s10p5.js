/**
 * Title: 최대 점수 구하기 (Knapsack Problem)
 * Content: 이번 정보 올림피아드 대회에서 좋은 성적을 내기 위하여, 현수는 선생님이 주신 N개의 문제를 풀려고 한다.
 *          각 문제는 그 것을 풀었을 때 얻는 점수와 걸리는 시간이 주어지게 된다.
 *          제한 시간 M안에 N개의 문제 중 풀어서 얻을 수 있는 최대 점수를 출력하라.
 *          (해당 문제는 해당 시간이 걸리면 푸는 걸로 간주한다. 한 유형당 한 개만 풀 수 있다.)
 * Input Condition: 첫 번째 줄에 문제의 개수 N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어진다.
 *                  두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는 데 걸리는 시간이 주어진다.
 * Output Condition: 첫 번째 줄에 제한 시간 안에 얻을 수 있는 최대 점수를 출력한다.
 * Input Example: 5 20
 *                10 5
 *                25 12
 *                15 8
 *                6  3
 *                7  4
 * Output Example: 41
 */
// *다시 풀기.
// *d의 키와 값의 의미를 알아야 한다.

{
  const SCORE_IDX = 0;
  const TIME_IDX = 1;
  // const SOLVED = 1;
  // const PASS = 0;

  function getMaxScore(limitTime, problemInfo) {
    let maxScore = 0;
    const d = initD();

    for (let i = 0; i < problemInfo.length; i++) {
      const problemScore = problemInfo[i][SCORE_IDX];
      const problemTime = problemInfo[i][TIME_IDX];
      for (let j = limitTime; j >= problemTime; j--) {
        d[j] = Math.max(d[j], d[j - problemTime] + problemScore);
      }
    }

    maxScore = d[limitTime];
    return maxScore;

    function initD() {
      return Array.from({ length: limitTime + 1 }, () => 0);
    }
  }

  /*
  // dfs를 사용한 함수
  function getMaxScore(limitTime, problemInfo) {
    let maxScore = 0;
    dfs();
    return maxScore;

    function dfs(results = []) {
      if (results.length > problemInfo.length) {
        return;
      }

      let timeSum = 0;
      results.forEach((result, idx) => {
        if (result === SOLVED) {
          timeSum += problemInfo[idx][TIME_IDX];
        }
      });

      if (timeSum > limitTime) {
        return;
      }

      if (timeSum === limitTime) {
        let scoreSum = 0;
        results.forEach((result, idx) => {
          if (result === SOLVED) {
            scoreSum += problemInfo[idx][SCORE_IDX];
          }
        });

        if (scoreSum > maxScore) {
          maxScore = scoreSum;
        }

        return;
      }

      dfs([...results, SOLVED]);
      dfs([...results, PASS]);
    }
  }
  */
  function solution(limitTime, problemInfo) {
    const answer = getMaxScore(limitTime, problemInfo);
    return answer;
  }

  function main() {
    console.log("S10P5\n");

    const inputLimitTime = 20;
    const inputProblemInfo = [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ];
    const output = this.solution(inputLimitTime, inputProblemInfo);

    console.log(`Input: ${inputLimitTime}\n${inputProblemInfo.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
