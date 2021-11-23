/**
 * Title: x만큼 간격이 있는 n개의 숫자
 * Content: 함수 solution은 정수 x와 자연수 n을 입력 받아,
 *          x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
 *          다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 * Input Condition: x는 -10000000 이상, 10000000 이하인 정수입니다.
 *                  n은 1000 이하인 자연수입니다.
 * Output Condition: None
 * Input Example: x = 2
 *                n = 5
 * Output Example: 	[2,4,6,8,10]
 */
// Expected: 13:48 - 14:28
// Actual: 13:48 -13:52

{
  function solution(x, n) {
    return Array.from({ length: n }, (_, idx) => x * (idx + 1));
  }

  function testToExample1() {
    const testNum = 1;
    const inputX = 4;
    const inputN = 3;
    const expectResult = [4, 8, 12];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(inputX, inputN), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputX = -4;
    const inputN = 2;
    const expectResult = [-4, -8];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(inputX, inputN), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P110\n");

    const inputX = 2;
    const inputN = 5;
    const output = this.solution(inputX, inputN);

    // test();
    console.log(`Input: ${inputX} ${inputN}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
