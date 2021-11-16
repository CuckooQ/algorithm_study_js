/**
 * Title: 수박수박수박수박수박수?
 * Content: 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
 *          예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
 * Input Condition: n은 길이 10,000이하인 자연수입니다.
 * Output Condition: None
 * Input Example: 3
 * Output Example: 	"수박수"
 */
// Expected: 07:43 - 08:23
// Actual: 07:43 - 07:50

{
  function solution(n) {
    const answer = Array.from({ length: n }, (_, idx) =>
      idx % 2 === 0 ? "수" : "박"
    ).join("");
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = 4;
    const expectResult = "수박수박";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 10_000;
    const expectResult = "수박".repeat(5000);
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P86\n");

    const input = 3;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
