/**
 * Title: 가운데 문자 출력
 * Content: 소문자로 된 단어가 입력되면, 그 단어의 가운데 문자를 출력하기.
 * Input Condition: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 가운데 문자를 출력합니다.
 * Input Example: study
 * Output Example: u
 */

{
  // 짝수의 문자열일 경우, 가운데 두 문자 중 첫 번재 문자를 출력하는 사양으로 결정
  function getMiddleChar(text) {
    const charArr = Array.from(text);
    const selectedIdx = Math.round(charArr.length / 2) - 1;
    const selectedChar = selectedIdx !== -1 ? charArr[selectedIdx] : "";

    return selectedChar;
  }

  function solution(text) {
    let answer = getMiddleChar(text);
    return answer;
  }

  function testToMaxValue() {
    const testNum = 1;
    const input =
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij";
    const expectResult = "j";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinValue() {
    const testNum = 2;
    const input = "";
    const expectResult = "";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToOddLenValue() {
    const testNum = 3;
    const input = "abc";
    const expectResult = "b";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToEvenLenValue() {
    const testNum = 4;
    const input = "abcd";
    const expectResult = "b";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "study";
    const output = this.solution(input);

    console.log("S1P15\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxValue();
    testToMinValue();
    testToOddLenValue();
    testToEvenLenValue();
  }

  main();
}
