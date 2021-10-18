/**
 * Title: Reverse Integer
 * Content: Given a signed 32-bit integer x, return x with its digits reversed.
 *          If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *          Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * Input Condition: -231 <= x <= 231 - 1
 * Output Condition: None
 * Input Example: x = 123
 * Output Example: 321
 */
// Expected: 14:52 - 15:32
// Actual: 14:52 - 15:18

{
  const MAX_RANGE = 2 ** 31 - 1;
  const MIN_RANGE = -1 * 2 ** 31;

  function isInValidRange(num) {
    return num <= MAX_RANGE && num >= MIN_RANGE;
  }

  function reverseNum(num) {
    const sign = Math.sign(num);

    if (sign === 0) {
      return 0;
    } else {
      const absNum = Math.abs(num);
      const reversedAbsNum = Number(
        absNum.toString().split("").reverse().join("")
      );

      return sign * reversedAbsNum;
    }
  }

  function solution(x) {
    let answer;

    const reversedNum = reverseNum(x);
    answer = isInValidRange(reversedNum) ? reversedNum : 0;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = -123;
    const expectResult = -321;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 120;
    const expectResult = 21;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = 0;
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = 1534236469;
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = -1534236469;
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P7\n");

    const input = 123;
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
    testToExample5();
  }

  main();
}
