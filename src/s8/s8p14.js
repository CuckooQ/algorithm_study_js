/**
 * Title: 조합 구하기
 * Content: 1부터 N까지의 번호가 적힌 구슬이 있다.
 *          이 중 M개를 뽑는 방법의 수를 출력하라.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N)이 주어진다.
 * Output Condition: 첫 번째 줄에 결과를 출력한다.
 *                   맨 마지막 줄에 총 경우의 수를 출력한다.
 *                   출력 순서는 사전 순으로 오름차 순으로 출력한다.
 * Input Example: 4 2
 * Output Example: 1 2
 *                 1 3
 *                 1 4
 *                 2 3
 *                 2 4
 *                 3 4
 *                 6
 */
// *다시 풀기
// *중복을 허용하지 않는 경우이다.

{
  const MAX_NUM = 10;
  const MIN_NUM = 3;
  const MIN_CNT = 2;

  function getCombinations(n, r) {
    const result = [];
    dfs();
    return result;

    function dfs(els = []) {
      if (els.length === r) {
        result.push(els.join(" "));
        return;
      }

      const initVal = els[els.length - 1] ? els[els.length - 1] + 1 : 1;
      for (let i = initVal; i <= n; i++) {
        dfs([...els, i]);
      }
    }
  }

  function solution(num, cnt) {
    const answer = getCombinations(num, cnt);
    return answer;
  }

  function testToMaxNumMaxCnt() {
    const testNum = 1;
    const inputNum = MAX_NUM;
    const inputCnt = inputNum;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputNum, inputCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxNumMinCnt() {
    const testNum = 2;
    const inputNum = MAX_NUM;
    const inputCnt = MIN_CNT;
    const expectResult = 45;
    const testFunction = solution;
    const condition = testFunction(inputNum, inputCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumMaxCnt() {
    const testNum = 3;
    const inputNum = MIN_NUM;
    const inputCnt = inputNum;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputNum, inputCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNumMinCnt() {
    const testNum = 4;
    const inputNum = MIN_NUM;
    const inputCnt = MIN_CNT;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputNum, inputCnt).length === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P14\n");

    const inputNum = 4;
    const inputCnt = 2;
    const output = this.solution(inputNum, inputCnt);

    // test();
    console.log(`Input: ${inputNum} ${inputCnt}`);
    console.log(`Output: ${output.join("\n")}\n${output.length}`);
  }

  function test() {
    testToMaxNumMaxCnt();
    testToMaxNumMinCnt();
    testToMinNumMaxCnt();
    testToMinNumMinCnt();
  }

  main();
}
