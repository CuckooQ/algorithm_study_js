/**
 * Title: 10. Regular Expression Matching
 * Content: Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 *          '.' Matches any single character.​​​​
 *          '*' Matches zero or more of the preceding element.
 *          The matching should cover the entire input string (not partial).
 * Input Condition: 1 <= s.length <= 20
 *                  1 <= p.length <= 30
 *                  s contains only lowercase English letters.
 *                  p contains only lowercase English letters, '.', and '*'.
 *                  It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
 * Output Condition: None
 * Input Example: s = "aa", p = "a"
 * Output Example: false
 */
// *다시 풀기
// *풀지 못했다.

{
  const ASTERISK = "*";
  const COMMA = ".";

  function solution(s, p) {
    let answer;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputS = "aa";
    const inputP = "a*";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputS = "ab";
    const inputP = ".*";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputS = "aab";
    const inputP = "c*a*b";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputS = "mississippi";
    const inputP = "mis*is*p*.";
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P15\n");

    const inputS = "aa";
    const inputP = "a";
    const output = this.solution(inputS, inputP);

    // test();
    console.log(`Input: ${inputS}\n ${inputP} `);
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
