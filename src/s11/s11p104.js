/**
 * Title: 최대공약수와 최소공배수
 * Content: 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
 *          배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
 *          예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 * Input Condition: 두 수는 1이상 1000000이하의 자연수입니다.
 * Output Condition: None
 * Input Example: n = 3
 *                m = 12
 * Output Example: [3, 12]
 */
// Expected: 13:02 - 13:42
// Actual: 13:02 - 13:12
// *유클리드 호제법 복습을 위해 다시 풀기

{
  function solution(n, m) {
    const gcd = getGcd(n, m);
    const lcm = (n * m) / gcd;
    return [gcd, lcm];

    function getGcd(a, b) {
      if (a % b === 0) {
        return b;
      } else {
        return getGcd(b, a % b);
      }
    }
  }

  function testToExample() {
    const testNum = 1;
    const inputN = 2;
    const inputM = 5;
    const expectResult = [1, 10];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(inputN, inputM), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P104\n");

    const inputN = 3;
    const inputM = 12;
    const output = this.solution(inputN, inputM);

    // test();
    console.log(`Input: ${inputN} ${inputM} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
