/**
 * Title: 핸드폰 번호 가리기
 * Content: 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
 *          전화번호가 문자열 phone_number로 주어졌을 때,
 *          전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 * Input Condition: s는 길이 4 이상, 20이하인 문자열입니다.
 * Output Condition: None
 * Input Example: "01033334444"
 * Output Example: "*******4444"
 */
// Expected: 13:29 - 14:09
// Actual: 13:29 - 13:35

{
  function solution(phoneNum) {
    let answer;
    const len = phoneNum.length;
    answer = phoneNum.slice(len - 4);
    answer = answer.padStart(len, "*");
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "027778888";
    const expectResult = "*****8888";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P108\n");

    const input = "01033334444";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
