/**
 * Title: 경로 탐색 (인접 행렬)
 * Content: 방향 그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하라.
 *
 *          1 <――――> 2 ―――――> 5
 *          | ↘  ↙ ↑      ↗
 *          |   x    |    ↗
 *          ↓ ↙  ↘ |  ↗
 *          3 ―――――> 4
 *
 *          위의 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 다음과 같이 총 6가지이다.
 *          1 2 3 4 5
 *          1 2 5
 *          1 3 4 2 5
 *          1 3 4 5
 *          1 4 2 5
 *          1 4 5
 *
 * Input Condition: 첫 번째 정점의 수 N(1<=N<=20)과 간선의 수 M이 주어진다.
 *                  그 다음부터 M줄에 걸쳐 연결 정보가 주어진다.
 * Output Condition: 총 가지 수를 출력한다.
 * Input Example: 5 9
 *                1 2
 *                1 3
 *                1 4
 *                2 1
 *                2 3
 *                2 5
 *                3 4
 *                4 2
 *                4 5
 * Output Example: 6
 */
// *그래프 복습을 위해 다시 풀기

{
  function getCntOfRoute(graphInfo) {
    let cnt = 0;

    const maxVertexVal = Math.max(...graphInfo.flat());
    const graph = createGraph(graphInfo);
    dfs();

    return cnt;

    function createGraph(graphInfo) {
      const graph = Array.from({ length: maxVertexVal + 1 }, () =>
        Array.from({ length: maxVertexVal + 1 }, () => 0)
      );

      graphInfo.forEach((unit) => {
        const from = unit[0];
        const to = unit[1];
        graph[from][to] = 1;
      });

      return graph;
    }

    function dfs(from = 1, route = []) {
      if (from === maxVertexVal) {
        cnt++;
        return;
      }

      for (let i = 1; i <= maxVertexVal; i++) {
        if (graph[from][i] === 1) {
          const alreadyPassVertex = route.flat().indexOf(i) !== -1;
          !alreadyPassVertex && dfs(i, [...route, [from, i]]);
        }
      }
    }
  }

  function solution(graphInfo) {
    const answer = getCntOfRoute(graphInfo);
    return answer;
  }

  function main() {
    console.log("S9P1\n");

    const input = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5],
    ];
    const output = this.solution(input);

    console.log(`Input: ${input.join("\n")}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
