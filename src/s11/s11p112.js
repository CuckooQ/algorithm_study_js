/**
 * Title: n^2 배열 자르기
 * Content: 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.
 *          1. n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
 *          2. i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
 *             1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
 *          3. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
 *          4. 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
 *          정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 1 ≤ n ≤ 107
 *                  0 ≤ left ≤ right < n2
 *                  right - left < 105
 * Output Condition: None
 * Input Example: n = 3
 *                left = 2
 *                right = 5
 * Output Example: 	[3,2,2,3]
 */
// Expected: 09:23 - 10:03
// Actual: 09:23 - 10:23
// *시간초과를 해결하는 과정의 복습을 위해 다시 풀기

{
  function solution(n, left, right) {
    const answer = [];

    const row = Array.from({ length: n }, (_, idx) => idx + 1);

    for (let i = left; i <= right; i++) {
      const min = Math.floor(i / n) + 1;
      const val = row[i % n];
      answer.push(Math.max(min, val));
    }

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputN = 4;
    const inputLeft = 7;
    const inputRight = 14;
    const expectResult = [4, 3, 3, 3, 4, 4, 4, 4];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputLeft, inputRight),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P112\n");

    const inputN = 3;
    const inputLeft = 2;
    const inputRight = 5;
    const output = this.solution(inputN, inputLeft, inputRight);

    // test();
    console.log(`Input: ${inputN} ${inputLeft} ${inputRight}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
