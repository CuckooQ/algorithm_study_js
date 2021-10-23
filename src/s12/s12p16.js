/**
 * Title: 154. Find Minimum in Rotated Sorted Array II
 * Content: Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 *          For example, the array nums = [0,1,4,4,5,6,7] might become:
 *          [4,5,6,7,0,1,4] if it was rotated 4 times.
 *          [0,1,4,4,5,6,7] if it was rotated 7 times.
 *          Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *          Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
 *          You must decrease the overall operation steps as much as possible.
 * Input Condition: n == nums.length
 *                  1 <= n <= 5000
 *                  -5000 <= nums[i] <= 5000
 *                  nums is sorted and rotated between 1 and n times.
 * Output Condition: None
 * Input Example: nums = [1,3,5]
 * Output Example: 1
 */
// Expected: 13:48 - 14:28
// Actual: 13:48 -

{
  const MAX_LEN = 5000;

  function getMinNum(nums) {
    let minNum = Number.MAX_SAFE_INTEGER;

    const rotatingNums = [...nums];
    for (let i = 0; i < rotatingNums.length; i++) {
      const num = rotatingNums.shift();
      minNum = num < minNum ? num : minNum;
      rotatingNums.push(num);
    }

    return minNum;
  }

  function solution(nums) {
    const answer = getMinNum(nums);

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [2, 2, 2, 0, 1];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [3, 1];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxCnt() {
    const testNum = 3;
    const input = Array.from({ length: MAX_LEN }, (_, idx) => idx + 1);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P16\n");

    const input = [1, 3, 5];
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToMaxCnt();
  }

  main();
}
