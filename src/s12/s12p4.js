/**
 * Title: 4. Median of Two Sorted Arrays
 * Content: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *          The overall run time complexity should be O(log (m+n)).
 * Input Condition: nums1.length == m
 *                  nums2.length == n
 *                  0 <= m <= 1000
 *                  0 <= n <= 1000
 *                  1 <= m + n <= 2000
 *                  -106 <= nums1[i], nums2[i] <= 106
 * Output Condition: None
 * Input Example: nums1 = [1,3], nums2 = [2]
 * Output Example: 2.00000
 */
// Expected: 16:47 - 17:27
// Actual: 16:47 -17:15
// *난이도는 Hard인데, 시간 내에 해결은 가능했다. (그러나 구현 과정에서 시간 복잡도를 고려하지 않았다...)
// *풀이가 없어서 다른 풀이 확인이 불가능하다.

{
  function combineToSortedNums(nums1, nums2) {
    return [...nums1, ...nums2].sort((a, b) => a - b);
  }

  function getMedian(nums) {
    let median = 0;

    if (nums.length % 2 === 0) {
      const midIdx1 = nums.length / 2;
      const midIdx2 = nums.length / 2 - 1;
      median = (nums[midIdx1] + nums[midIdx2]) / 2;
    } else {
      const midIdx = Math.floor(nums.length / 2);
      median = nums[midIdx];
    }

    return median;
  }

  function solution(nums1, nums2) {
    let answer;

    const arr = combineToSortedNums(nums1, nums2);
    answer = getMedian(arr);

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputNums1 = [1, 2];
    const inputNums2 = [3, 4];
    const expectResult = 2.5;
    const testFunction = solution;
    const condition = testFunction(inputNums1, inputNums2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputNums1 = [0, 0];
    const inputNums2 = [0, 0];
    const expectResult = 0.0;
    const testFunction = solution;
    const condition = testFunction(inputNums1, inputNums2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputNums1 = [];
    const inputNums2 = [1];
    const expectResult = 1.0;
    const testFunction = solution;
    const condition = testFunction(inputNums1, inputNums2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputNums1 = [2];
    const inputNums2 = [];
    const expectResult = 2.0;
    const testFunction = solution;
    const condition = testFunction(inputNums1, inputNums2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputNums1 = [1, 3];
    const inputNums2 = [2, 7];
    const expectResult = 2.5;
    const testFunction = solution;
    const condition = testFunction(inputNums1, inputNums2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P4\n");

    const inputNums1 = [1, 3];
    const inputNums2 = [2];
    const output = this.solution(inputNums1, inputNums2);

    // test();
    console.log(`Input: ${inputNums1.join(" ")}\n${inputNums2.join(" ")}`);
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
