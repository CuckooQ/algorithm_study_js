/**
 * Title: 중복순열 구하기
 * Content: 1부터 N까지 번호가 적힌 구슬이 있다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N)이 주어진다.
 * Output Condition: 첫 번째 줄에 결과를 출력한다. 맨 마지막 줄에 총 경우의 수를 출력한다.
 * Input Example: 3 2
 * Output Example: 1 1
 *                 1 2
 *                 1 3
 *                 2 1
 *                 2 2
 *                 2 3
 *                 3 1
 *                 3 2
 *                 3 3
 *                 9
 */
/**
 * N 다중 for문을 재귀함수로 구현이 가능하다.
 *                                 0
 * 1번째 for        1              2             3
 * 2번째 for    1   2  3        1  2  3      1   2  3
 */
// *다시 풀기

{
  const MAX_NUM = 10;
  const MIN_NUM = 3;
  const MIN_CNT = 2;
  const INIT_NUM = 1;

  function getRepeatedPermutation(selectedNum, selectableCnt) {
    const repeatedPermutation = [];
    dfs();
    return repeatedPermutation;

    function dfs(num = INIT_NUM, arr = []) {
      if (arr.length >= selectableCnt) {
        repeatedPermutation.push(arr.join(" "));
        return;
      }

      for (let i = INIT_NUM; i <= selectedNum; i++) {
        dfs(num + 1, [...arr, i]);
      }
    }
  }

  function solution(selectedNum, selectableCnt) {
    let answer = getRepeatedPermutation(selectedNum, selectableCnt);
    return answer;
  }

  // 현재 풀이 방법으로는 소요 시간이 너무 오래 걸린다
  function testToMaxNumMaxCnt() {
    const testNum = 1;
    const inputSelectedNum = MAX_NUM;
    const inputSelectableCnt = inputSelectedNum;
    const expectResult = inputSelectedNum ** inputSelectableCnt;
    const testFunction = solution;
    const condition =
      testFunction(inputSelectedNum, inputSelectableCnt) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxNumMinCnt() {
    const testNum = 2;
    const inputSelectedNum = MAX_NUM;
    const inputSelectableCnt = MIN_CNT;
    const expectResult = inputSelectedNum ** inputSelectableCnt;
    const testFunction = solution;
    const condition =
      testFunction(inputSelectedNum, inputSelectableCnt) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumMaxCnt() {
    const testNum = 3;
    const inputSelectedNum = MIN_NUM;
    const inputSelectableCnt = inputSelectedNum;
    const expectResult = inputSelectedNum ** inputSelectableCnt;
    const testFunction = solution;
    const condition =
      testFunction(inputSelectedNum, inputSelectableCnt) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumMinCnt() {
    const testNum = 4;
    const inputSelectedNum = MIN_NUM;
    const inputSelectableCnt = MIN_CNT;
    const expectResult = inputSelectedNum ** inputSelectableCnt;
    const testFunction = solution;
    const condition =
      testFunction(inputSelectedNum, inputSelectableCnt) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P8\n");

    const inputSelectedNum = 3;
    const inputSelectableCnt = 2;
    const output = this.solution(inputSelectedNum, inputSelectableCnt);
    // test();

    console.log(`Input: ${inputSelectedNum} ${inputSelectableCnt}`);
    console.log(`Output: ${output.join("\n")}\n${output.length}\n`);
  }

  function test() {
    // testToMaxNumMaxCnt();
    testToMaxNumMinCnt();
    testToMinNumMaxCnt();
    testToMinNumMinCnt();
  }

  main();
}
