/**
 * Title: Two Sum
 * Content: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *          You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *          You can return the answer in any order.
 * Input Condition: 2 <= nums.length <= 104
 *                  -109 <= nums[i] <= 109
 *                  -109 <= target <= 109
 * Output Condition: Only one valid answer exists.
 * Input Example: [2,7,11,15]
 *                9
 * Output Example: [0,1]
 */

{
  function solution(nums, target) {
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[j];
        if (nums[i] + nums[j] === target) {
          answer = [i, j];
          break;
        }
      }
    }

    return answer;
  }
  /*
  // 통과 조건 만족하지 못한 처리 (시간 초과)
  function solution(nums, target, cnt = 2) {
    let answer = [];

    dfs();

    return answer;

    function dfs(indexes = [], selNums = [], remains = [...nums]) {
      const sum =
        selNums.length !== 0
          ? selNums.reduce((acc, val) => acc + val)
          : Number.MIN_SAFE_INTEGER;

      if (sum === target && cnt === selNums.length) {
        answer = indexes;
        return;
      }

      if (remains.length === 0) {
        return;
      }

      const num = remains.shift();

      let numIdx = nums.indexOf(num);
      const tmpSelNums = [...selNums];
      while (tmpSelNums.includes(num)) {
        tmpSelNums.splice(tmpSelNums.indexOf(num), 1);
        numIdx = nums.indexOf(num, numIdx + 1);
      }

      dfs([...indexes, numIdx], [...selNums, num], [...remains]);
      dfs([...indexes], [...selNums], [...remains]);
    }
  }
  */
  function testToExample1() {
    const testNum = 1;
    const inputNums = [3, 2, 4];
    const inputTarget = 6;
    const inputCnt = 2;
    const expectResult = [1, 2];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums, inputTarget, inputCnt),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputNums = [3, 3];
    const inputTarget = 6;
    const inputCnt = 2;
    const expectResult = [0, 1];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums, inputTarget, inputCnt),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputNums = [3, 2, 3];
    const inputTarget = 6;
    const inputCnt = 2;
    const expectResult = [0, 2];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums, inputTarget, inputCnt),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputNums = [0, 4, 3, 0];
    const inputTarget = 0;
    const inputCnt = 2;
    const expectResult = [0, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums, inputTarget, inputCnt),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 4;
    const inputNums = [-1, -2, -3, -4, -5];
    const inputTarget = -8;
    const inputCnt = 2;
    const expectResult = [2, 4];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums, inputTarget, inputCnt),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P1\n");

    const inputNums = [2, 7, 11, 15];
    const inputTarget = 9;
    const inputCnt = 2;
    const output = this.solution(inputNums, inputTarget, inputCnt);

    // test();
    console.log(`Input: ${inputNums}\n ${inputTarget}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}
