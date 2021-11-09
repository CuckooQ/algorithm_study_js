/**
 * Title: 2개 이하로 다른 비트
 * Content: 양의 정수 x에 대한 함수 f(x)를 다음과 같이 정의합니다.
 *          *x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
 *          예를 들어, f(2) = 3 입니다.
 *          다음 표와 같이 2보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 3이기 때문입니다.
 *          수	비트	      다른 비트의 개수
 *          2	  000...0010
 *          3	  000...0011	1
 *          f(7) = 11 입니다. 다음 표와 같이 7보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 11이기 때문입니다.
 *          수	비트	      다른 비트의 개수
 *           7	000...0111
 *           8	000...1000	4
 *           9	000...1001	3
 *           10	000...1010	3
 *           11	000...1011	2
 *           정수들이 담긴 배열 numbers가 매개변수로 주어집니다.
 *           numbers의 모든 수들에 대하여 각 수의 f 값을 배열에 차례대로 담아 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 1 ≤ numbers의 길이 ≤ 100,000
 *                  0 ≤ numbers의 모든 수 ≤ 1015
 * Output Condition: None
 * Input Example: [2,7]
 * Output Example: [3,11]
 */
// Expected: 10:25 - 11:05
// Actual: 10:25 - 11:08

{
  const ZERO = "0";
  const ONE = "1";

  function getBiggerMinBinNumStr(binNumStr) {
    let biggerBinNumStr = binNumStr;

    const idx = binNumStr.lastIndexOf(ZERO);
    if (idx === -1) {
      biggerBinNumStr = ONE + ZERO + ONE.repeat(binNumStr.length - 1);
    } else {
      biggerBinNumStr = replaceAt(idx, biggerBinNumStr, ONE);

      for (let i = idx + 1; i < biggerBinNumStr.length; i++) {
        if (biggerBinNumStr[i] === ONE) {
          biggerBinNumStr = replaceAt(i, biggerBinNumStr, ZERO);
          break;
        }
      }
    }

    return biggerBinNumStr;

    function replaceAt(idx, str, char) {
      return str.substring(0, idx) + char + str.substring(idx + 1, str.length);
    }
  }

  function getNum(binNumStr) {
    let num = 0;

    const arr = [...binNumStr].reverse();
    for (let i = 0; i < arr.length; i++) {
      num += Number(arr[i]) * 2 ** i;
    }

    return num;
  }

  function getBinNumStr(num) {
    let binNumStr = "";

    let val = num;
    do {
      const remained = val % 2;
      binNumStr = remained + binNumStr;
      val = Math.floor(val / 2);
    } while (val !== 0);

    return binNumStr;
  }

  function solution(numbers) {
    const answer = [];

    numbers.forEach((num) => {
      const binNumStr = getBinNumStr(num);
      const biggerBinNumStr = getBiggerMinBinNumStr(binNumStr);
      const biggerNum = getNum(biggerBinNumStr);
      answer.push(biggerNum);
    });

    return answer;
  }

  function main() {
    console.log("S11P66\n");

    const input = [2, 7];
    const output = this.solution(input);

    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  main();
}
