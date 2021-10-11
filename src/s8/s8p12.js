/**
 * Title: 조합의 경우수(+메모이제이션)
 * Content: nCr = n! / ((n - r)! * r!)로 계산한다.
 *          이 공식을 사용하지 않고 다음 공식을 사용해서 메모이제이션과 재귀를 이용해 조합수를 구하라.
 *          nCr = n-1Cr-1 + n-1Cr
 * Input Condition: 첫 번째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력된다.
 * Output Condition: 첫 번째 줄에 조합수를 출력한다.
 * Input Example: 5 3
 * Output Example: 10
 */
// C = Combination Abbreviation.
// *dfs의 return 조건을 알지 못했다.
// *메모이제이션 기능 구현도 숙지하자.
// *다시 풀기

{
  const MAX_N = 33;
  const MIN_N = 3;
  const MIN_R = 0;

  function combinate(n, r) {
    const cache = [];
    const val = dfs(n, r);
    return val;

    function dfs(n, r) {
      if (cache[n] && cache[n][r]) {
        return cache[n][r];
      }

      if (r === 0 || n === r) {
        return 1;
      }

      !cache[n] && (cache[n] = []);
      cache[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);

      return cache[n][r];
    }
  }

  function solution(n, r) {
    const answer = combinate(n, r);
    return answer;
  }

  function testToMaxNMaxR() {
    const testNum = 1;
    const inputN = MAX_N;
    const inputR = inputN;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputR) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxNMinR() {
    const testNum = 2;
    const inputN = MAX_N;
    const inputR = MIN_R;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputR) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNMaxR() {
    const testNum = 3;
    const inputN = MIN_N;
    const inputR = inputN;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputR) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinNMinR() {
    const testNum = 4;
    const inputN = MIN_N;
    const inputR = MIN_R;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputR) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample() {
    const testNum = 5;
    const inputN = 33;
    const inputR = 19;
    const expectResult = 818809200;
    const testFunction = solution;
    const condition = testFunction(inputN, inputR) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S8P12\n");

    const inputN = 5;
    const inputR = 3;
    const output = this.solution(inputN, inputR);

    // test();
    console.log(`Input: ${inputN} ${inputR} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxNMaxR();
    testToMaxNMinR();
    testToMinNMaxR();
    testToMinNMinR();
    testToExample();
  }

  main();
}
