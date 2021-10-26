/**
 * Title: 내적
 * Content: 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
 *          a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
 *          이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다.
 *          (n은 a, b의 길이)
 * Input Condition: a, b의 길이는 1 이상 1,000 이하입니다.
 *                  a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
 * Output Condition: None
 * Input Example: a = [1,2,3,4]
 *                b = [-3,-1,0,2]
 * Output Example: 3
 */
// Expected: 12:57 - 13:37
// Actual: 12:57 -

{
  function solution(a, b) {
    const answer = a.reduce((acc, aVal, idx) => {
      const bVal = b[idx];
      const num = aVal * bVal;
      return acc + num;
    }, 0);

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputA = [-1, 0, 1];
    const inputB = [1, 0, -1];
    const expectResult = -2;
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P22\n");

    const inputA = [1, 2, 3, 4];
    const inputB = [-3, -1, 0, 2];
    const output = this.solution(inputA, inputB);

    // test();
    console.log(`Input: ${inputA.join(" ")}\n${inputB.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
