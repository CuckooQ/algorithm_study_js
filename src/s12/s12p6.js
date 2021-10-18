/**
 * Title: ZigZag Conversion
 * Content: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *          P   A   H   N
 *          A P L S I I G
 *          Y   I   R
 *          And then read line by line: "PAHNAPLSIIGYIR"
 *          Write the code that will take a string and make this conversion given a number of rows:
 *          string convert(string s, int numRows);
 * Input Condition: 1 <= s.length <= 1000
 *                  s consists of English letters (lower-case and upper-case), ',' and '.'.
 *                  1 <= numRows <= 1000
 * Output Condition:
 * Input Example: s = "PAYPALISHIRING"
 *                numRows = 3
 * Output Example: "PAHNAPLSIIGYIR"
 */
// Expected: 14:16 - 14:56
// Actual: 14:16 - 14:48
// *다시 풀기
// *지그재그 패턴의 파악이 어려웠다.

{
  const MAX_LEN = 1000;
  const MAX_ROWS = 1000;

  function solution(s, numRows) {
    let answer;

    const zigzagCharArr = Array.from({ length: numRows }, () => []);

    let reverseFlag = false;
    let idx = 0;
    if (numRows === 1) {
      zigzagCharArr[0] = s.split("");
    } else {
      for (const char of s) {
        zigzagCharArr[idx].push(char);

        if (!reverseFlag) {
          idx++;
        } else {
          idx--;
        }

        if (idx === 0) {
          reverseFlag = false;
        }
        if (idx === numRows - 1) {
          reverseFlag = true;
        }
      }
    }

    answer = zigzagCharArr.flat().join("");
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputS = "PAYPALISHIRING";
    const inputNumRows = 4;
    const expectResult = "PINALSIGYAHRPI";
    const testFunction = solution;
    const condition = testFunction(inputS, inputNumRows) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputS = "A";
    const inputNumRows = 1;
    const expectResult = "A";
    const testFunction = solution;
    const condition = testFunction(inputS, inputNumRows) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 2;
    const inputS = Array.from({ length: MAX_LEN }, () => "A");
    const inputNumRows = MAX_ROWS;
    const expectResult = Array.from({ length: MAX_LEN }, () => "A").join("");
    const testFunction = solution;
    const condition = testFunction(inputS, inputNumRows) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 2;
    const inputS = "AB";
    const inputNumRows = 1;
    const expectResult = "AB";
    const testFunction = solution;
    const condition = testFunction(inputS, inputNumRows) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P6\n");

    const inputS = "PAYPALISHIRING";
    const inputNumRows = 3;
    const output = this.solution(inputS, inputNumRows);

    // test();
    console.log(`Input: ${inputS}\n${inputNumRows} `);
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
