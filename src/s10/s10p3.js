/**
 * Title: 최장 증가 부분수열 (LIS)
 * Content: N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는(작은 수에서 큰 수로) 원소들의 집합을 출력하라.
 *          예를 들어, 2, 7, 5, 8, 6, 4, 7, 12, 3이면, 가장 길게 증가하도록 원소들을 차례대로 뽑아내면,
 *          2, 5, 6, 7, 12를 뽑아내어 길이가 5인 최장 증가 부분수열을 만들 수 있다.
 * Input Condition: 첫 번째 줄은 입력되는 데이터의 수 N(1<=N<1,000, 자연수)가 주어진다.
 *                  두 번째 줄은 N개의 입력 데이터들이 주어진다.
 * Output Condition: 첫 번째 줄에 증가 부분수열의 최대 길이를 출력한다.
 * Input Example: 8
 *                5 3 7 8 6 2 9 4
 * Output Example: 4
 */
// *다시 풀기
// *순서를 바꾸면 안된다.
// *d의 값의 의미를 알아야 한다.

{
  function getMaxLen(arr) {
    let maxLen = 0;
    const d = Array.from({ length: arr.length }, () => 1);

    for (let i = 1; i < arr.length; i++) {
      let maxVal = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (arr[i] > arr[j] && d[j] > maxVal) {
          maxVal = d[j];
        }
      }
      d[i] = maxVal + 1;
    }

    maxLen = Math.max(...d);
    return maxLen;
  }

  function solution(arr) {
    const answer = getMaxLen(arr);
    return answer;
  }

  function testToSample() {
    const testNum = 1;
    const input = [2, 7, 5, 8, 6, 4, 7, 12, 3];
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S10P3\n");

    const input = [5, 3, 7, 8, 6, 2, 9, 4];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToSample();
  }

  main();
}
