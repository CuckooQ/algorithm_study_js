/**
 * Title: 예산
 * Content: S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다.
 *          그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다.
 *          그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
 *          물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
 *          예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
 *          부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때,
 *          최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
 *                  d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
 *                  budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
 * Output Condition: None
 * Input Example: d = [1,3,2,5,4]
 *                budget = 9
 * Output Example: 3
 */
// Expected: 17:25 - 18:05
// Actual: 17:25 - 17:42
// *역시 합이 제한 값을 넘지 않는 개수를 구하는 경우, 오름차순으로 나열하고 최소값부터 고르는 것이 맞다.

{
  function getMaxCntOfSupportableDepartment(d, budget) {
    let maxCnt = 0;

    let sum = 0;
    const sortedD = [...d].sort((a, b) => a - b);
    for (const dMoney of sortedD) {
      sum += dMoney;
      if (sum > budget) {
        break;
      }
      maxCnt++;
    }

    return maxCnt;
  }
  /*
  // dfs 시간 초과
  function getMaxCntOfSupportableDepartment(d, budget) {
    let maxCnt = 0;
    dfs();
    return maxCnt;

    function dfs(department = [], remainedD = [...d]) {
      const sum = department.reduce((acc, val) => acc + val, 0);
      if (sum > budget) {
        return;
      } else {
        if (department.length > maxCnt) {
          maxCnt = department.length;
        }
      }

      if (remainedD.length === 0) {
        return;
      }

      const selD = remainedD.shift();
      dfs([...department, selD], [...remainedD]);
      dfs([...department], [...remainedD]);
    }
  }
  */

  function solution(d, budget) {
    const answer = getMaxCntOfSupportableDepartment(d, budget);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputD = [2, 2, 3, 3];
    const inputBudget = 10;
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(inputD, inputBudget) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P35\n");

    const inputD = [1, 3, 2, 5, 4];
    const inputBudget = 9;
    const output = this.solution(inputD, inputBudget);

    // test();
    console.log(`Input: ${inputD.join(" ")}\n${inputBudget} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
