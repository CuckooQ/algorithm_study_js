/**
 * Title: 11. Container With Most Water
 * Content: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 *          n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 *          Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 *          Notice that you may not slant the container.
 * Input Condition: n == height.length
 *                  2 <= n <= 105
 *                  0 <= height[i] <= 104
 * Output Condition: None
 * Input Example: height = [1,8,6,2,5,4,8,3,7]
 * Output Example: 49
 */
// Expected: 14:10 - 14:50
// Actual: 14:10 - 15:15
// *다시 풀기
// *오래 걸렸다.
// *탈출 조건을 찾는 것이 중요했다.

{
  function getMaxBreadth(heights) {
    let maxBreadth = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < heights.length - 1; i++) {
      const maxWidth = heights.length - 1 - i;
      const expectedMaxHeight = Math.ceil(maxBreadth / maxWidth);
      if (heights.findIndex((height) => height >= expectedMaxHeight) === -1) {
        break;
      }

      for (let j = i + 1; j <= heights.length - 1; j++) {
        const stdHeight = heights[i] < heights[j] ? heights[i] : heights[j];
        const width = Math.abs(i - j);
        const breadth = width * stdHeight;
        maxBreadth = breadth > maxBreadth ? breadth : maxBreadth;
      }
    }

    return maxBreadth;
  }

  function solution(heights) {
    const answer = getMaxBreadth(heights);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [1, 1];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [4, 3, 2, 1, 4];
    const expectResult = 16;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = [1, 2, 1];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P17\n");

    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
