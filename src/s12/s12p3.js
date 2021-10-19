/**
 * Title: 3. Longest Substring Without Repeating Characters
 * Content: Given a string s, find the length of the longest substring without repeating characters.
 * Input Condition: 0 <= s.length <= 5 * 10^4
 *                  s consists of English letters, digits, symbols and spaces.
 * Output Condition: None
 * Input Example: "abcabcbb"
 * Output Example: 3
 */
// Expected: 14:03-14:43
// Actual: 14:03-14:33

{
  function getMaxLenOfSubStr(text) {
    let maxLen = 0;

    let startIdx = 0;
    let endIdx = startIdx + 1;
    let subText = text[startIdx];

    while (startIdx < text.length) {
      const char = text[endIdx] ? text[endIdx] : "";

      if (endIdx === text.length || subText.includes(char)) {
        maxLen = subText.length > maxLen ? subText.length : maxLen;
        startIdx++;
        endIdx = startIdx + 1;
        subText = text[startIdx];
      } else {
        endIdx++;
        subText += char;
      }
    }

    return maxLen;
  }

  function solution(text) {
    const answer = getMaxLenOfSubStr(text);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "bbbbb";
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "pwwkew";
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "123456789000abcdefghijklmnopqrstuvwxyz zzzz   ";
    const expectResult = 1 + 26 + 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "au";
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = "dvdf";
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P3\n");

    const input = "abcabcbb";
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
