/**
 * Title: 가장 먼 노드
 * Content: n개의 노드가 있는 그래프가 있습니다.
 *          각 노드는 1부터 n까지 번호가 적혀있습니다.
 *          1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다.
 *          가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
 *          노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때,
 *          1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 노드의 개수 n은 2 이상 20,000 이하입니다.
 *                  간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
 *                  vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
 * Output Condition: None
 * Input Example: n = 6
 *                vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
 * Output Example: 3
 */
// *다시 풀기
// *BFS로 풀어야 한다.

{
  function getCntOfFarNode(n, vertex) {
    let cnt = n;

    return cnt;
  }

  function solution(n, vertex) {
    const answer = getCntOfFarNode(n, vertex);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 6;
    const inputVertex = [
      [4, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 5;
    const inputVertex = [
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 6;
    const inputVertex = [[2, 3]];
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputN = 4;
    const inputVertex = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputN = 11;
    const inputVertex = [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 5],
      [3, 6],
      [4, 8],
      [4, 9],
      [5, 9],
      [5, 10],
      [6, 10],
      [6, 11],
    ];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const inputN = 5;
    const inputVertex = [
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const inputN = 4;
    const inputVertex = [
      [1, 4],
      [1, 3],
      [2, 3],
      [2, 1],
    ];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample8() {
    const testNum = 8;
    const inputN = 4;
    const inputVertex = [
      [4, 3],
      [1, 3],
      [2, 3],
    ];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(inputN, inputVertex) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P37\n");

    const inputN = 6;
    const inputVertex = [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ];
    const output = this.solution(inputN, inputVertex);
    // test();
    console.log(`Input: ${inputN}\n${inputVertex.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
    testToExample6();
    testToExample7();
    testToExample8();
  }

  main();
}
