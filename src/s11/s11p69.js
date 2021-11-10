/**
 * Title: 삼각 달팽이
 * Content: 정수 n이 매개변수로 주어집니다.
 *          다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
 *          첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.
 *               1                        1                            1
 *             2   9                    2   12                       2   15
 *           3   10   8               3   13   11                  3   16   14
 *         4   5    6    7          4   14   15   10             4   17   21   13
 *              n = 4             5   6    7    8     9        5   18   19   20   21
 *                                       n = 5               6   7    8    9    10   11
 *                                                                     n = 6
 * Input Condition: n은 1 이상 1,000 이하입니다.
 * Output Condition: None
 * Input Example: 4
 * Output Example: [1,2,9,3,10,8,4,5,6,7]
 */
// Expected: 09:57 - 10:37
// Actual: 09:57 - 10:59
// *다시 풀기
// *천천히 생각하니 구현할 수 있었다.

{
  function solution(n) {
    let answer;

    const arr = Array.from({ length: n }, (_, idx) =>
      Array.from({ length: idx + 1 }, () => 0)
    );

    let row = -1;
    let col = 0;
    let val = 1;
    while (arr.filter((numArr) => numArr.includes(0)).length !== 0) {
      fillNumToLeftDown();
      fillNumToRight();
      fillNumToRightUp();
    }

    answer = arr.flat();

    return answer;

    function fillNumToLeftDown() {
      row++;
      while (arr[row] && arr[row][col] === 0) {
        arr[row][col] = val;
        row++;
        val++;
      }
      row--;
    }

    function fillNumToRight() {
      col++;
      while (arr[row] && arr[row][col] === 0) {
        arr[row][col] = val;
        col++;
        val++;
      }
      col--;
    }

    function fillNumToRightUp() {
      row--;
      col--;
      while (arr[row] && arr[row][col] === 0) {
        arr[row][col] = val;
        row--;
        col--;
        val++;
      }
      row++;
      col++;
    }
  }

  function testToExample1() {
    const testNum = 1;
    const input = 5;
    const expectResult = [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 6;
    const expectResult = [
      1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11,
    ];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = 1;
    const expectResult = [1];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P69\n");

    const input = 4;
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
