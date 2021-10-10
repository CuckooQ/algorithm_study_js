/**
 * Title: 동전 교환
 * Content: 다음과 같이 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
 *          각 단위의 동전은 무한정 쓸 수 있다.
 * Input Condition: 첫 번째 줄에는 동전의 종류 개수 N(1<=N<=12)이 주어진다.
 *                  두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
 *                  각 동전의 종류는 100원을 넘지 않는다.
 * Output Condition: 첫 번째 줄에 거슬러 줄 동전의 최소 개수를 출력한다.
 * Input Example: 3
 *                1 2 5
 *                15
 * Output Example: 3 (15/5)
 */

{
  const MAX_COIN_TYPE = 100;
  const MIN_COIN_TYPE = 1;
  const MAX_TOTAL_MONEY = 500;
  const MIN_TOTAL_MONEY = 1;

  function getMinCntOfCoins(coinTypes, totalMoney) {
    let minCnt = Number.MAX_SAFE_INTEGER;
    dfs();
    return minCnt === Number.MAX_SAFE_INTEGER ? 0 : minCnt;

    function dfs(
      coinCounts = Array.from({ length: coinTypes.length }, () => 0)
    ) {
      const sum = getSum();
      if (sum > totalMoney) {
        return;
      }

      if (sum === totalMoney) {
        const totalCnt = coinCounts.reduce((calc, init) => calc + init);
        if (totalCnt < minCnt) {
          minCnt = totalCnt;
        }
        return;
      }

      for (let i = 0; i < coinTypes.length; i++) {
        const newCoinCounts = [...coinCounts];
        newCoinCounts[i] = newCoinCounts[i] + 1;
        dfs(newCoinCounts);
      }

      function getSum() {
        let sum = 0;
        coinCounts.forEach((cnt, idx) => {
          sum += cnt * coinTypes[idx];
        });

        return sum;
      }
    }
  }

  function solution(coinTypes, totalMoney) {
    const answer = getMinCntOfCoins(coinTypes, totalMoney);
    return answer;
  }

  function testToMaxCoinTypeMaxTotalMoney() {
    const testNum = 1;
    const inputCoinTypes = [MAX_COIN_TYPE];
    const inputTotalMoney = MAX_TOTAL_MONEY;
    const expectResult = MAX_TOTAL_MONEY / MAX_COIN_TYPE;
    const testFunction = solution;
    const condition =
      testFunction(inputCoinTypes, inputTotalMoney) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxCoinTypeMinTotalMoney() {
    const testNum = 2;
    const inputCoinTypes = [MAX_COIN_TYPE];
    const inputTotalMoney = MIN_TOTAL_MONEY;
    const expectResult = 0;
    const testFunction = solution;
    const condition =
      testFunction(inputCoinTypes, inputTotalMoney) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinCoinTypeMaxTotalMoney() {
    const testNum = 3;
    const inputCoinTypes = [MIN_COIN_TYPE];
    const inputTotalMoney = MAX_TOTAL_MONEY;
    const expectResult = MAX_TOTAL_MONEY / MIN_COIN_TYPE;
    const testFunction = solution;
    const condition =
      testFunction(inputCoinTypes, inputTotalMoney) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinCoinTypeMinTotalMoney() {
    const testNum = 4;
    const inputCoinTypes = [MIN_COIN_TYPE];
    const inputTotalMoney = MIN_TOTAL_MONEY;
    const expectResult = MIN_TOTAL_MONEY / MIN_COIN_TYPE;
    const testFunction = solution;
    const condition =
      testFunction(inputCoinTypes, inputTotalMoney) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P9\n");

    const inputCoinTypes = [1, 2, 5];
    const inputTotalMoney = 15;
    const output = this.solution(inputCoinTypes, inputTotalMoney);

    // test();
    console.log(`Input: ${inputCoinTypes.join(" ")}\n ${inputTotalMoney} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxCoinTypeMaxTotalMoney();
    testToMaxCoinTypeMinTotalMoney();
    testToMinCoinTypeMaxTotalMoney();
    testToMinCoinTypeMinTotalMoney();
  }

  main();
}
