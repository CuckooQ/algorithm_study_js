/**
 * Title: 최댓값과 최솟값
 * Content: 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
 *          str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
 *          예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
 * Input Condition: s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
 * Output Condition: None
 * Input Example: "1 2 3 4"
 * Output Example: 	"1 4"
 */
// Expected: 13:43 - 14:23
// Actual: 13:43 - 13:47

{
  function solution(s) {
    const nums = s.split(" ").map((c) => Number(c));
    return `${Math.min(...nums)} ${Math.max(...nums)}`;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "-1 -2 -3 -4";
    const expectResult = "-4 -1";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "-1 -1";
    const expectResult = "-1 -1";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P125\n");

    const input = "1 2 3 4";
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
