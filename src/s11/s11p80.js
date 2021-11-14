/**
 * Title: 문자열 다루기 기본
 * Content: 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
 *          예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 * Input Condition: s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * Output Condition: None
 * Input Example: "a234"
 * Output Example: false
 */
// Expected: 10:15 - 10:55
// Actual: 10:15 - 10:33
// *정규식 복습을 위해 다시 풀기

{
  // 다른 사람 풀이
  function solution(s) {
    let answer;

    const regex = new RegExp(/^\d{6}$|^\d{4}$/);
    answer = regex.test(s);

    return answer;
  }
  /*
  function solution(s) {
    let answer;

    const regex = new RegExp(/[^0-9]/g);
    const hasNotOnlyNum = regex.test(s);
    const isRightLen = s.length === 4 || s.length === 6;
    answer = !hasNotOnlyNum && isRightLen;

    return answer;
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = "1234";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "123456";
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "1234567";
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P80\n");

    const input = "a234";
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
