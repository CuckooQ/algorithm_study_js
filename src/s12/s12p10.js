/**
 * Title: 151. Reverse Words in a String
 * Content: Given an input string s, reverse the order of the words.
 *          A word is defined as a sequence of non-space characters.
 *          The words in s will be separated by at least one space.
 *          Return a string of the words in reverse order concatenated by a single space.
 *          Note that s may contain leading or trailing spaces or multiple spaces between two words.
 *          The returned string should only have a single space separating the words.
 *          Do not include any extra spaces.
 * Input Condition: 1 <= s.length <= 104
 *                  s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 *                  There is at least one word in s.
 * Output Condition: None
 * Input Example: s = "the sky is blue"
 * Output Example: "blue is sky the"
 */
// Expected: 15:12 - 15:52
// Actual: 15:12 -

{
  const SPACE = " ";

  function solution(s) {
    let answer;

    const words = [];
    const sentence = s.trim();
    let beforeChar = sentence[0];
    let idx = 0;
    sentence.split("").forEach((char) => {
      if (char === SPACE) {
        beforeChar !== SPACE && idx++;
      } else {
        words[idx] ? (words[idx] += char) : (words[idx] = char);
      }

      beforeChar = char;
    });

    answer = words.reverse().join(SPACE);

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "  hello world  ";
    const expectResult = "world hello";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "a good   example";
    const expectResult = "example good a";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "  Bob    Loves  Alice   ";
    const expectResult = "Alice Loves Bob";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "Alice does not even like bob";
    const expectResult = "bob like even not does Alice";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P10\n");

    const input = "the sky is blue";
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
