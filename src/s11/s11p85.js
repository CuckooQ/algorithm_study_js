/**
 * Title: 모음 사전
 * Content: 사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다.
 *          사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.
 *          단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: word의 길이는 1 이상 5 이하입니다.
 *                  word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.
 * Output Condition: None
 * Input Example: "AAAAE"
 * Output Example: 6
 */
// Expected: 09:58 - 10:38
// Actual: 09:58 - 10:53

{
  const LIMIT = 5;

  function solution(word) {
    let answer;

    const chars = ["A", "E", "I", "O", "U"];
    const comb = [];
    chars.forEach((char) => {
      dfs(char);
    });

    answer = comb.indexOf(word) + 1;

    return answer;

    function dfs(str) {
      if (str.length > LIMIT) {
        return;
      }

      comb.push(str);

      for (let i = 0; i < chars.length; i++) {
        dfs(str + chars[i]);
      }
    }
  }

  function testToExample1() {
    const testNum = 1;
    const input = "AAAE";
    const expectResult = 10;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "I";
    const expectResult = 1563;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "EIO";
    const expectResult = 1189;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P85\n");

    const input = "AAAAE";
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
