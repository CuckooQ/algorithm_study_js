/**
 * Title: 순열 구하기
 * Content: 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N)이 주어진다.
 *                  두 번째 줄에 N개의 자연수가 오름차순으로 주어진다.
 * Output Condition: 첫 번째 줄에 결과를 출력한다. 맨 마지막 총 경우의 수를 출력한다.
 *                   출력 순서는 사전순으로 오름차순으로 출력한다.
 * Input Example: 3 2
 *                3 6 9
 * Output Example: 3 6
 *                 3 9
 *                 6 3
 *                 6 9
 *                 9 3
 *                 9 6
 *                 6
 */
// 순열 공식: nPr = n! / (n-r)!

{
  const MAX_NUM_CNT = 10;
  const MIN_NUM_CNT = 3;
  const MIN_SELECTABLE_CNT = 2;

  function getPermutation(nums, selectableCnt) {
    const permutation = [];
    dfs();
    return permutation;

    function dfs(el = []) {
      if (el.length === selectableCnt) {
        permutation.push(el.join(" "));
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        const selectedNum = nums[i];
        !el.includes(selectedNum) && dfs([...el, nums[i]]);
      }
    }
  }

  function solution(nums, selectableCnt) {
    const answer = getPermutation(nums, selectableCnt);
    return answer;
  }

  function testToMaxNumCntMaxSelect() {
    const testNum = 1;
    const inputNums = Array.from({ length: MAX_NUM_CNT }, (_, idx) => idx + 1);
    const inputSelectableCnt = inputNums.length;
    const expectResult = 3628800; // 10P10 = 10! / (10-10)!
    const testFunction = solution;
    const condition =
      testFunction(inputNums, inputSelectableCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxNumCntMinSelect() {
    const testNum = 2;
    const inputNums = Array.from({ length: MAX_NUM_CNT }, (_, idx) => idx + 1);
    const inputSelectableCnt = MIN_SELECTABLE_CNT;
    const expectResult = 90; // 10P2 = 10! / 8!
    const testFunction = solution;
    const condition =
      testFunction(inputNums, inputSelectableCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumCntMaxSelect() {
    const testNum = 3;
    const inputNums = Array.from({ length: MIN_NUM_CNT }, (_, idx) => idx + 1);
    const inputSelectableCnt = inputNums.length;
    const expectResult = 6; // 3P3 = 3! / (3-3)!
    const testFunction = solution;
    const condition =
      testFunction(inputNums, inputSelectableCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumCntMinSelect() {
    const testNum = 4;
    const inputNums = Array.from({ length: MIN_NUM_CNT }, (_, idx) => idx + 1);
    const inputSelectableCnt = MIN_SELECTABLE_CNT;
    const expectResult = 6; // 3P2 = 3! / (3-2)!
    const testFunction = solution;
    const condition =
      testFunction(inputNums, inputSelectableCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P10\n");

    const inputNums = [3, 6, 9];
    const inputSelectableCnt = 2;
    const output = this.solution(inputNums, inputSelectableCnt);

    // test();
    console.log(`Input: ${inputNums.join(" ")}\n${inputSelectableCnt}`);
    console.log(`Output: ${output.join("\n")}\n${output.length}\n`);
  }

  function test() {
    testToMaxNumCntMaxSelect();
    testToMaxNumCntMinSelect();
    testToMinNumCntMaxSelect();
    testToMinNumCntMinSelect();
  }

  main();
}
