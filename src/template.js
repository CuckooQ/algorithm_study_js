/**
 * Problem file template
 *  */
/**
 * Title:
 * Content:
 * Input Condition:
 * Output Condition:
 * Input Example:
 * Output Example:
 */

{
  function solution(param) {
    let answer;
    return answer;
  }

  function test() {
    const testNum = 1;
    const input = 0;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = 0;
    const output = this.solution(input);

    console.log("SnPn\n");
    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {}

  main();
}
