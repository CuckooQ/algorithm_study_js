/**
 * Title: 대문자 찾기
 * Content: 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내기.
 * Input Condition: 첫 줄에 문자열이 입력된다. 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 대문자의 개수를 출력한다.
 * Input Example: KoreaTimeGood
 * Output Example: 3
 */

{
  // 입력 값의 대문자 수 출력
  function getCountOfUpperCase(text) {
    return (text.match(/[A-Z]/g) || []).length;
  }

  function solution(text) {
    let answer;
    answer = getCountOfUpperCase(text);
    return answer;
  }

  function testToMaxMinVal() {
    const testNum = 1;
    const testFunction = solution;
    let input =
      "ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ";
    let expectResult = 100;
    let condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);

    input = "";
    expectResult = 0;
    condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "KoreaTimeGood";
    const output = this.solution(input);

    console.log("S1P11\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxMinVal();
  }

  main();
}
