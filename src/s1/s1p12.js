/**
 * Title: 대문자로 통일
 * Content: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력.
 * Input Condition: 첫 줄에 문자열이 입력된다. 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 대문자로 통일된 문자열이 출력된다.
 * Input Example: ItisTimeToStudy
 * Output Example: ITISTIMETOSTUDY
 */

{
  function replaceToUppercase(text) {
    return text.toString().toUpperCase();
  }

  function solution(text) {
    let answer;
    answer = replaceToUppercase(text);
    return answer;
  }

  function testToMaxMinValue() {
    const testNum = 1;
    const testFunction = solution;
    let input =
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij";
    let expectResult =
      "ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ";
    let condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);

    input = "";
    expectResult = "";
    condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testWithSpecialChar() {
    const testNum = 2;
    const input = "a!b#c$d%e^f&g*h(i)j_-=[];';:{}?<>',./";
    const expectResult = "A!B#C$D%E^F&G*H(I)J_-=[];';:{}?<>',./";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testWithNumber() {
    const testNum = 3;
    const input = "a1b2c3d4e5f6g7h8i9j0";
    const expectResult = "A1B2C3D4E5F6G7H8I9J0";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "ItisTimeToStudy";
    const output = this.solution(input);

    console.log("S1P12\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxMinValue();
    testWithSpecialChar();
    testWithNumber();
  }

  main();
}
