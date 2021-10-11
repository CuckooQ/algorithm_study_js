/**
 * Title: 수열 추측하기
 * Content: 가장 윗 줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
 *          그리고 두 번째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두 개를 더한 값이 저장된다.
 *          예를 들어 N이 4이고 가장 윗 줄에 3 1 2 4가 있다면, 다음과 같은 삼각형이 그려진다.
 *          3 1 2 4
 *           4 3 6
 *            7 9
 *             16
 *          N과 가장 밑에 있는 숫자가 주어질 때 가장 윗 줄에 있는 숫자를 구하라.
 *          단, 답이 여러가지가 나오는 경우, 사전 순으로 가장 앞에 오는 답을 출력한다.
 * Input Condition: 첫 번째 줄에 두 개의 정수 N(1<=N<=10)과 F가 주어진다.
 *                  N은 가장 윗 줄에 있는 숫자의 개수를 의미하고, F는 가장 밑 줄에 있는 수로 1,000,000이하이다.
 * Output Condition: 첫 번째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다.
 *                   답이 존재하지 않는 경우는 입력으로 주어지지 않는다.
 * Input Example: 4 16
 * Output Example: 3 1 2 4  (3*(4-1)C0 + 1*(4-1)C1 + 2*(4-1)C2 + 4*(4-1)C3)
 */
// *다시 풀기
// *파스칼 삼각형 이용해야 한다.

{
  function getFigures(cnt) {
    const figures = [];
    for (let i = 0; i < cnt; i++) {
      figures.push(combinate(cnt - 1, i));
    }
    return figures;

    function combinate(n, r) {
      const cache = [];
      const val = dfs(n, r);
      return val;

      function dfs(n, r) {
        if (cache[n] && cache[n][r]) {
          return cache[n][r];
        }

        if (r === 0 || n === r) {
          return 1;
        }

        !cache[n] && (cache[n] = []);
        cache[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);

        return cache[n][r];
      }
    }
  }

  function getSeries(cnt, sum) {
    let result = [];
    const figures = getFigures(cnt);
    dfs();
    return result;

    function dfs(series = []) {
      if (result.length !== 0) {
        return;
      }

      if (series.length === 4) {
        let tmpSum = 0;
        series.forEach((num, idx) => {
          tmpSum += num * figures[idx];
        });

        if (tmpSum === sum) {
          result = series;
        }

        return;
      }

      for (let i = 1; i < sum; i++) {
        !series.includes(i) && dfs([...series, i]);
      }
    }
  }

  function solution(cnt, sum) {
    const series = getSeries(cnt, sum);
    const answer = series.join(" ");
    return answer;
  }

  function main() {
    console.log("S8P13\n");

    const inputCnt = 4;
    const inputSum = 16;
    const output = this.solution(inputCnt, inputSum);

    console.log(`Input: ${inputCnt} ${inputSum}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
