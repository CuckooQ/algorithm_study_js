/**
 * Title: 451. Sort Characters By Frequency
 * Content: Given a string s, sort it in decreasing order based on the frequency of the characters.
 *          The frequency of a character is the number of times it appears in the string.
 *          Return the sorted string.
 *          If there are multiple answers, return any of them.
 * Input Condition: 1 <= s.length <= 5 * 10^5
 *                  s consists of uppercase and lowercase English letters and digits.
 * Output Condition: None
 * Input Example: "tree"
 * Output Example: "eert" or  "eetr"
 */
// Expected: 12:04 - 12:44
// Actual: 12:04 - 12:19
// *String.repeat(freq) 함수를 알게 되었다.

{
  function solution(s) {
    let answer;

    const map = new Map();
    Array.from(s).forEach((c) => {
      const freq = map.get(c);
      freq ? map.set(c, freq + 1) : map.set(c, 1);
    });

    const sortedArr = Array.from(map).sort(
      ([_val1, freq1], [_val2, freq2]) => freq2 - freq1
    );

    answer = sortedArr.map(([val, freq]) => val.repeat(freq)).join("");

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "cccaaa";
    const expectResult = "cccaaa"; // or "aaaccc"
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "Aabb";
    const expectResult = "bbAa"; // or "bbaA"
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P14\n");

    const input = "tree";
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
