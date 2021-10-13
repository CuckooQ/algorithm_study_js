/**
 * Title: 동전 교환 (Knapsack Problem)
 * Content: 다음과 같이 여러 단위의 동전들이 주어져 있을 때, 거슬러줄 수 있는 동전의 최소 개수를 구하라.
 *          각 단위의 동전은 무한정 사용할 수 있다.
 *          동적 프로그래밍으로 구현하기.
 * Input Condition: 첫 번째 줄에는 동전의 종류 개수 N(1<=N<=12)이 주어진다.
 *                  두 번째 줄에는 N개의 동전의 종류가 주어진다.
 *                  세 번째 줄에는 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
 *                  각 동전의 종류는 100원을 넘지 않는다.
 * Output Condition: 첫 번째 줄에 거슬러 줄 동전의 최소 개수를 출력한다.
 * Input Example: 3
 *                1 2 5
 *                15
 * Output Example: 3
 */
// *배낭 문제의 복습을 위해 다시 풀기.
// *Dynamic Programming을 사용해서 풀 수 있다는 것은 깨달았는데, 이 문제가 배낭 문제인지는 모르겠다.
// *d의 키와 값의 의미를 알아야 한다.

{
  // 풀이
  function getMinCntOfCoins(coins, remains) {
    let cnt = 0;
    d = Array.from({ length: remains + 1 }, () => remains);
    d[0] = 0;

    for (let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= remains; j++) {
        d[j] = Math.min(d[j], d[j - coins[i]] + 1);
      }
    }

    cnt = d[remains];
    return cnt;
  }

  /*
  function getSortedCoinsDesc(coins) {
    return [...coins].sort((a, b) => b - a);
  }

  function getMinCntOfCoins(coins, remains) {
    let cnt = 0;
    const sortedCoins = getSortedCoinsDesc(coins);

    sortedCoins.forEach((coin) => {
      cnt += remains / coin;
      remains = remains % coin;
    });

    return cnt;
  }
  */
  function solution(coins, remains) {
    const answer = getMinCntOfCoins(coins, remains);
    return answer;
  }

  function main() {
    console.log("S10P4\n");

    const inputCoins = [1, 2, 5];
    const inputRemains = 15;
    const output = this.solution(inputCoins, inputRemains);

    console.log(`Input: ${inputCoins.join(" ")}\n${inputRemains} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
