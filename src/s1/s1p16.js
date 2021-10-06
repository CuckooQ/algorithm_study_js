/**
 * Title: 중복 문자 제거
 * Content: 소문자로 된 한 개의 문자열이 입력되면, 중복된 문자를 제거하고 출력하기. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지한다.
 * Input Condition: 첫 줄에 문자열이 입력된다.
 * Output Condition: 첫 줄에 중복문자가 제거된 문자열을 출력한다.
 * Input Example: ksekkset
 * Output Example: kset
 */

{
  function removeSameCharIn(text) {
    const uniqueCharArr = removeSameValIn(Array.from(text));
    return uniqueCharArr.join("");
  }

  function solution(text) {
    let answer = removeSameCharIn(text);
    return answer;
  }

  function testToMinValue() {
    const testNum = 1;
    const input = "";
    const expectResult = "";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllSameChar() {
    const testNum = 2;
    const input = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk";
    const expectResult = "k";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToNoSameChar() {
    const testNum = 3;
    const input = "abcdefghij";
    const expectResult = "abcdefghij";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToSpecialChar() {
    const testNum = 4;
    const input = "a#b#c!d!e@f@g%h%i^j^";
    const expectResult = "a#bc!de@fg%hi^j";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToNumber() {
    const testNum = 5;
    const input = "11223344556677889900";
    const expectResult = "1234567890";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "ksekkset";
    const output = this.solution(input);

    console.log("S1P16\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMinValue();
    testToAllSameChar();
    testToNoSameChar();
    testToSpecialChar();
    testToNumber();
  }

  main();
}
