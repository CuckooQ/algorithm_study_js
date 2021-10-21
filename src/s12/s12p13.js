/**
 * Title: 9. Palindrome Number
 * Content: Given an integer x, return true if x is palindrome integer.
 *          An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 * Input Condition: -231 <= x <= 231 - 1
 * Output Condition: None
 * Input Example: 121
 * Output Example: true
 */
// Expected: 11:46 - 12:26
// Actual: 11:46 - 11:52

{
  function isPalindrome(num) {
    if (num < 0) {
      return false;
    }

    const numStr = num.toString();
    const reversedNumStr = numStr.split("").reverse().join("");

    return numStr === reversedNumStr;
  }

  function solution(num) {
    const answer = isPalindrome(num);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = -121;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 10;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = -101;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P13\n");

    const input = 121;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
