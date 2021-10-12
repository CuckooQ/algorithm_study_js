/**
 * Title: 이진트리 넓이우선탐색(BFS)
 * Content: 아래 그림과 같은 이진트리를 넓이우선탐색하라.
 *                1
 *            2       3
 *          4   5   6   7
 *          넓이우선탐색: 1 2 3 4 5 6 7
 * Input Condition: None
 * Output Condition: None
 * Input Example: None
 * Output Example: None
 */
// *BFS 복습을 위해 다시 풀기
// *BFS에서는 Queue를 사용한다.

{
  function searchBinaryTreeUsingBfs(endNum) {
    const nums = [];
    bfs();
    return nums;

    function bfs() {
      const queue = [];
      queue.push(1);

      while (queue.length) {
        const val = queue.shift();

        if (val > endNum) {
          continue;
        }

        nums.push(val);
        queue.push(2 * val);
        queue.push(2 * val + 1);
      }
    }
  }

  function solution(endNum) {
    const nums = searchBinaryTreeUsingBfs(endNum);
    answer = nums.join(" ");
    return answer;
  }

  function testToOne() {
    const testNum = 1;
    const input = 1;
    const expectResult = Array.from(
      { length: input },
      (_, idx) => idx + 1
    ).join(" ");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToHundred() {
    const testNum = 2;
    const input = 100;
    const expectResult = Array.from(
      { length: input },
      (_, idx) => idx + 1
    ).join(" ");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S9P4\n");

    const input = 7;
    const output = this.solution(input);

    // test();
    console.log(`Input: Binary Tree BFS `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToOne();
    testToHundred();
  }

  main();
}
