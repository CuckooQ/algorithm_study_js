/**
 * Title: 소수 만들기
 * Content: 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
 *          숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
 *          nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
 *                  nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
 * Output Condition: None
 * Input Example: [1,2,3,4]
 * Output Example: 1
 */
// Expected: 14:35 - 15:15
// Actual: 14:35 - 14:52

{
  const SELECT_CNT = 3;

  function isPrimeNum(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function getCntOfSumIsPrimeNum(nums) {
    let primeNumCnt = 0;
    dfs();
    return primeNumCnt;

    function dfs(sum = 0, cnt = 0, remainedNums = [...nums]) {
      if (cnt === SELECT_CNT) {
        isPrimeNum(sum) && primeNumCnt++;
        return;
      }

      if (remainedNums.length === 0) {
        return;
      }

      const selNum = remainedNums.shift();
      dfs(sum + selNum, cnt + 1, [...remainedNums]);
      dfs(sum, cnt, [...remainedNums]);
    }
  }

  function solution(nums) {
    const answer = getCntOfSumIsPrimeNum(nums);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [1, 2, 7, 6, 4];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P24\n");

    const input = [1, 2, 3, 4];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
