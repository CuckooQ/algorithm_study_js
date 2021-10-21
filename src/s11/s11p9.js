/**
 * 프로그래머스 완전 탐색 Level 2
 * Title: 소수 찾기
 * Content: 한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
 *          흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 *          각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: numbers는 길이 1 이상 7 이하인 문자열입니다.
 *                  numbers는 0~9까지 숫자만으로 이루어져 있습니다.
 *                  "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
 * Output Condition:
 * Input Example: "17"
 * Output Example: 3
 */
// Expected: 10:00 - 10:40
// Actual: 10:00 - 11:03

{
  function isPrimeNum(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function solution(numsStr) {
    let answer = 0;

    const numsStrArr = numsStr.split("");
    const combNumSet = new Set();

    dfs(0);

    const numValues = combNumSet.values();
    let nextNum = numValues.next();
    do {
      isPrimeNum(nextNum.value) && answer++;
      nextNum = numValues.next();
    } while (!nextNum.done);

    return answer;

    function dfs(cycle, selNums = [], remainedNums = [...numsStrArr]) {
      const combNumStr = selNums.join("");
      combNumStr !== "" && combNumSet.add(Number(combNumStr));

      if (remainedNums.length === 0 || cycle > numsStrArr.length) {
        return;
      }

      const selNum = remainedNums.shift();
      dfs(0, [...selNums, selNum], [...remainedNums]);
      dfs(cycle + 1, [...selNums], [...remainedNums, selNum]);
    }
  }

  function testToExample1() {
    const testNum = 1;
    const input = "011";
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "7777777";
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P9\n");

    const input = "17";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
