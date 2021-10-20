/**
 * Title: 8. String to Integer (atoi)
 * Content: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 *          The algorithm for myAtoi(string s) is as follows:
 *          1. Read in and ignore any leading whitespace.
 *          2. Check if the next character (if not already at the end of the string) is '-' or '+'.
 *             Read this character in if it is either.
 *             This determines if the final result is negative or positive respectively.
 *             Assume the result is positive if neither is present.
 *          3. Read in next the characters until the next non-digit character or the end of the input is reached.
 *             The rest of the string is ignored.
 *          4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
 *             If no digits were read, then the integer is 0.
 *             Change the sign as necessary (from step 2).
 *          5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range.
 *             Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 *             Return the integer as the final result.
 *          Only the space character ' ' is considered a whitespace character.
 *          Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 * Input Condition: 0 <= s.length <= 200
 *                  s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 * Output Condition: None
 * Input Example: s = "42"
 * Output Example: 42
 */
// Expected: 15:40 - 16:20
// Actual: 15:40 - 16:30

{
  const MIN_NUM = -1 * 2 ** 31;
  const MAX_NUM = 2 ** 31 - 1;
  const MINUS = "-";
  const PLUS = "+";

  function isInteger(char) {
    const regex = /[0-9]/;
    return regex.test(char);
  }

  function isSign(char) {
    return char === MINUS || char === PLUS;
  }

  function filterToRange(num) {
    if (num > MAX_NUM) {
      return MAX_NUM;
    }
    if (num < MIN_NUM) {
      return MIN_NUM;
    }

    return num;
  }

  function getNum(numStr, sign) {
    let num = numStr ? Number(numStr) : 0;
    setSign(sign);

    return num;

    function setSign() {
      if (sign === MINUS) {
        num = num * -1;
      }
    }
  }

  function solution(text) {
    let answer;

    const filteredText = text.trim();

    let numStr = "";
    let sign = "";
    for (const char of filteredText) {
      if (isInteger(char)) {
        sign = !sign ? PLUS : sign;
        numStr += char;
      } else {
        if (sign === "" && isSign(char)) {
          sign = char;
        } else {
          break;
        }
      }
    }

    let num = getNum(numStr, sign);
    num = filterToRange(num);

    answer = num;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "   -42";
    const expectResult = -42;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "4193 with words";
    const expectResult = 4193;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "words and 987";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "-91283472332";
    const expectResult = -2147483648;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = "+-12";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const input = "00000-42a1234";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  function testToExample7() {
    const testNum = 7;
    const input = "   +0 123";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P11\n");

    const input = "42";
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
    testToExample6();
    testToExample7();
  }

  main();
}
