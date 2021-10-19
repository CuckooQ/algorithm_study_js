/**
 * Title: 496. Next Greater Element I
 * Content: The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 *          You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 *          For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
 *          If there is no next greater element, then the answer for this query is -1.
 *          Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 * Input Condition: 1 <= nums1.length <= nums2.length <= 1000
 *                  0 <= nums1[i], nums2[i] <= 104
 *                  All integers in nums1 and nums2 are unique.
 *                  All the integers of nums1 also appear in nums2.
 * Output Condition: None
 * Input Example: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output Example: [-1,3,-1]
 */
// Expected: 11:10 - 11:50
// Actual: 11:10 -11:26

{
  function solution(nums1, nums2) {
    let answer = Array.from({ length: nums1.length }, () => -1);

    nums1.forEach((num, idx) => {
      const targetIdx = nums2.indexOf(num);
      const nextNums = nums2.slice(targetIdx, nums2.length);
      for (const nextNum of nextNums) {
        if (nextNum > num) {
          answer[idx] = nextNum;
          break;
        }
      }
    });

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputNums1 = [2, 4];
    const inputNums2 = [1, 2, 3, 4];
    const expectResult = [3, -1];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums1, inputNums2),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputNums1 = [3, 1, 5, 7, 9, 2, 6];
    const inputNums2 = [1, 2, 3, 5, 6, 7, 9, 11];
    const expectResult = [5, 2, 6, 9, 11, 3, 7];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputNums1, inputNums2),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P9\n");

    const inputNums1 = [4, 1, 2];
    const inputNums2 = [1, 3, 4, 2];
    const output = this.solution(inputNums1, inputNums2);

    // test();
    console.log(`Input: ${inputNums1.join(" ")}\n${inputNums2.join(" ")} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
