/**
 * Title: 중복 단어 제거
 * Content: N개의 문자열이 입력되면, 중복된 문자열은 제거하고 출력하기. 출력하는 문자열은 원래의 입력 순서를 유지한다.
 * Input Condition: 첫 줄에 자연수 N이 주어진다. (3<=N<=30)
 *                  두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 * Input Example: 5
 *                good
 *                time
 *                good
 *                time
 *                student
 * Output Example: good
 *                 time
 *                 student
 */

{
  function removeSameTextIn(textArr) {
    const uniqueTextArr = removeSameValIn(Array.from(textArr));
    return uniqueTextArr;
  }

  function solution(textArr) {
    let answer = removeSameTextIn(textArr);
    return answer;
  }

  function testToMinCount() {
    const testNum = 1;
    const input = [];
    const expectResult = [];
    const testFunction = solution;
    const result = testFunction(input);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function testToAllSameText() {
    const testNum = 2;
    const input = ["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"];
    const expectResult = ["abcdefghij"];
    const testFunction = solution;
    const result = testFunction(input);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function testToNoSameText() {
    const testNum = 3;
    const input = ["abcde", "fghij", "klm"];
    const expectResult = ["abcde", "fghij", "klm"];
    const testFunction = solution;
    const result = testFunction(input);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function testToSpecialChar() {
    const testNum = 4;
    const input = ["a#", "#b", "a#", "!b", "!c"];
    const expectResult = ["a#", "#b", "!b", "!c"];
    const testFunction = solution;
    const result = testFunction(input);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function testToNumber() {
    const testNum = 5;
    const input = ["11", "11", "111", "22", "33", "4444", "33", "4444"];
    const expectResult = ["11", "111", "22", "33", "4444"];
    const testFunction = solution;
    const result = testFunction(input);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = ["good", "time", "good", "time", "student"];
    const output = this.solution(input);

    console.log("S1P17\n");
    // test();
    console.log(
      `Input: ${input.length}\n ${input[0]}\n ${input[1]}\n ${input[2]}\n ${input[3]}\n ${input[4]}`
    );
    console.log(`Output: `);
    output.forEach((val) => {
      console.log(`${val}\n`);
    });
  }

  function test() {
    testToMinCount();
    testToAllSameText();
    testToNoSameText();
    testToSpecialChar();
    testToNumber();
  }

  main();
}
