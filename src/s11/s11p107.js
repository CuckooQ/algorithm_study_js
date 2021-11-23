/**
 * Title: 하샤드 수
 * Content: 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 *          예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 *          자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 * Input Condition: x는 1 이상, 10000 이하인 정수입니다.
 * Output Condition: None
 * Input Example: 10
 * Output Example: true
 */
// Expected: 13:23 - 14:03
// Actual: 13:23 - 13:28s

{
  function solution(n) {
    const digitSum = [...n.toString()].reduce(
      (acc, val) => acc + Number(val),
      0
    );
    return n % digitSum === 0;
  }

  function testToExample1() {
    const testNum = 1;
    const input = 12;
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 11;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = 13;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P107\n");

    const input = 10;
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
