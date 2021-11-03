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
// *regex '*'의 지식이 중요했다.
// *문자와 패턴에 대한 각각의 인덱스, 그리고 다음 패턴이 *인 경우의 처리가 중요했다.

{
  const ASTERISK = "*";
  const COMMA = ".";

  function isMatch(s, p) {
    let isMatch = false;
    const sLen = s.length;
    const pLen = p.length;

    isMatch = dfs();

    return isMatch;

    function dfs(sIdx = 0, pIdx = 0) {
      if (pIdx === pLen) {
        // 모든 문자 일치 여부
        return sIdx === sLen;
      }

      // 패턴의 다음 문자가 *인 경우
      if (p[pIdx + 1] === ASTERISK) {
        if (dfs(sIdx, pIdx + 2)) {
          // 패턴 문자 + *를 공백 문자로 가정하고, 현재 문자와 패턴의 다다음 문자를 판별
          return true;
        } else {
          // 패턴 문자 + *가 현재 문자로 가정하고, 문자열에서의 현재 문자 패턴의 문자가 일치하거나 패턴의 문자가 .인 경우
          while (s[sIdx] && (p[pIdx] === COMMA || s[sIdx] === p[pIdx])) {
            // 문자열의 다음 문자들과 패턴의 다다음 문자를 판별
            sIdx++;
            if (dfs(sIdx, pIdx + 2)) {
              return true;
            }
          }
        }
      }
      // 패턴의 다음 문자가 *가 아니고, 문자열에서의 문자가 패턴의 문자가 일치하거나 패턴의 문자가 .인 경우
      else if (s[sIdx] && (p[pIdx] === COMMA || s[sIdx] === p[pIdx])) {
        // 문자열과 패턴의 다음 문자를 판별
        return dfs(sIdx + 1, pIdx + 1);
      }

      return false;
    }
  }

  function solution(s, p) {
    const answer = isMatch(s, p);
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

  function testToExample5() {
    const testNum = 5;
    const inputS = "aaa";
    const inputP = "ab*ac*a";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const inputS = "aaa";
    const inputP = "ab*a*c*a";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const inputS = "a";
    const inputP = "ab*";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample8() {
    const testNum = 8;
    const inputS = "ab";
    const inputP = ".*..";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputS, inputP) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample9() {
    const testNum = 9;
    const inputS = "abcdede";
    const inputP = "ab.*de";
    const expectResult = true;
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
    testToExample5();
    testToExample6();
    testToExample7();
    testToExample8();
    testToExample9();
  }

  main();
}
