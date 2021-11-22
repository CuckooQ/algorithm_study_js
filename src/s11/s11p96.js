/**
 * Title: 자릿수 더하기
 * Content: 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 *          예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 * Input Condition: N의 범위 : 100,000,000 이하의 자연수
 * Output Condition: None
 * Input Example: 123
 * Output Example: 6
 */
// Expected: 09:52 - 10:32
// Actual: 09:52 - 09:57

{
  function solution(n) {
    let answer;

    const digits = [...n.toString()];
    const sum = digits.reduce((acc, val) => acc + Number(val), 0);
    answer = sum;

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = 987;
    const expectResult = 24;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P96\n");

    const input = 123;
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
