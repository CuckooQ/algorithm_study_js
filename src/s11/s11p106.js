/**
 * Title: 평균 구하기
 * Content: 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * Input Condition: arr은 길이 1 이상, 100 이하인 배열입니다.
 *                  arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
 * Output Condition: None
 * Input Example: [1,2,3,4]
 * Output Example: 2.5
 */
// Expected: 13:21 - 14:01
// Actual: 13:21 - 13:23

{
  function solution(arr) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
  }

  function testToExample() {
    const testNum = 1;
    const input = [5, 5];
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P106\n");

    const input = [1, 2, 3, 4];
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
