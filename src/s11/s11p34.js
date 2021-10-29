/**
 * Title: 3진법 뒤집기
 * Content: 자연수 n이 매개변수로 주어집니다.
 *          n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: n은 1 이상 100,000,000 이하인 자연수입니다.
 * Output Condition: None
 * Input Example: 45
 * Output Example: 7
 */
// Expected: 09:55 - 10:35
// Actual: 09:55 -10:47
// *다시 풀기
// 큰 숫자의 표현 제한때문에, 진법 변환시 숫자로 저장하기보다 문자열로 저장해야 한다.
// toString(radix)과 parseInt(n, radix) 쉽게 진수 변환이 가능하다.

{
  const TERNARY = 3;

  function getDecimalAfterReverse(ternaryNumStr) {
    let decimalNum = 0;

    const reversedTernaryStr = ternaryNumStr.split("").reverse().join("");
    decimalNum = parseInt(reversedTernaryStr, TERNARY);

    return decimalNum;
  }

  function changeToTernary(n) {
    const ternaryNumStr = n.toString(TERNARY);
    return ternaryNumStr;
  }

  /*
  function getDecimalAfterReverse(ternaryNumStr) {
    let decimalNum = 0;

    [...ternaryNumStr].forEach((numChar, idx) => {
      decimalNum += 3 ** idx * Number(numChar);
    });

    return decimalNum;
  }

  function changeToTernary(n) {
    let ternaryNumStr = "";

    let tmpStr = "";
    let i = 0;
    do {
      const remain = n % 3;
      tmpStr += remain;
      n = Math.floor(n / 3);
      i++;
    } while (n / 3 !== 0);

    ternaryNumStr = tmpStr.split("").reverse().join("");

    return ternaryNumStr;
  }
  */

  function solution(n) {
    let answer;

    const ternaryNumStr = changeToTernary(n);
    answer = getDecimalAfterReverse(ternaryNumStr);

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = 125;
    const expectResult = 229;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 1;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = 2;
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = 100_000_000;
    const expectResult = 56480240;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P34\n");

    const input = 45;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
  }

  main();
}
