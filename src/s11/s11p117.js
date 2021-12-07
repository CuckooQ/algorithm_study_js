/**
 * Title: 가장 큰 정사각형 찾기
 * Content: 1와 0로 채워진 표(board)가 있습니다.
 *          표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요.
 *          (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
 *          예를 들어
 *          0 1 1 1
 *          1 1 1 1
 *          1 1 1 1
 *          0 0 1 0
 *          가 있다면 가장 큰 정사각형의 넓이가 9가 되므로 9를 반환해 주면 됩니다.
 * Input Condition: 표(board)는 2차원 배열로 주어집니다.
 *                  표(board)의 행(row)의 크기 : 1,000 이하의 자연수
 *                  표(board)의 열(column)의 크기 : 1,000 이하의 자연수
 *                  표(board)의 값은 1또는 0으로만 이루어져 있습니다.
 * Output Condition: None
 * Input Example: [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]
 * Output Example: 9
 */
// *다시 풀기
// *2차원 배열을 다루는 것이 제일 어렵다..

{
  function solution(board) {
    let answer = board[0][0];

    const rowLen = board.length;
    const colLen = board[0].length;

    for (let i = 1; i < rowLen; i++) {
      for (let j = 1; j < colLen; j++) {
        if (board[i][j] !== 0) {
          board[i][j] =
            Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
          answer = board[i][j] ** 2 > answer ? board[i][j] ** 2 : answer;
        }
      }
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 1;
    const input = [
      [1, 0],
      [0, 0],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P117\n");

    const input = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
