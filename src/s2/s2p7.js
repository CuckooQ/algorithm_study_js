/**
 * Title: 봉우리
 * Content: 지도 정보가 N*N 격자판에 주어진다. 각 격자에는 그 지역의 높이가 쓰여있다.
 *          각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
 *          격자의 가장자리는 0으로 초기화 되어있다.
 *          봉우리 지역 수 출력하기.
 * Input Condition: 첫 줄에 자연수 N이 입력된다. (1<=N<=50)
 *                  두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
 *                  각 자연수는 100을 넘지 않는다.
 * Output Condition: 봉우리 수 출력.
 * Input Example:  5
 *                 [[5, 3, 7, 2, 3],
 *                  [3, 7, 1, 6, 1],
 *                  [7, 2, 5, 3, 4],
 *                  [4, 3, 6, 4, 1],
 *                  [8, 7, 3, 5, 2]]
 * Output Example: 10 (0/0, 0/2, 0/4, 1/1, 1/3, 2/0, 2/4, 3/2, 4/0)
 */
// *다시 풀기

{
  function isBiggerThanTop(grid, row, col) {
    if (row === 0) {
      return true;
    }

    return grid[row][col] > grid[row - 1][col];
  }

  function isBiggerThanBottom(grid, row, col) {
    if (row === grid.length - 1) {
      return true;
    }

    return grid[row][col] > grid[row + 1][col];
  }

  function isBiggerThanLeft(grid, row, col) {
    if (col === 0) {
      return true;
    }

    return grid[row][col] > grid[row][col - 1];
  }

  function isBiggerThanRight(grid, row, col) {
    if (col === grid.length - 1) {
      return true;
    }

    return grid[row][col] > grid[row][col + 1];
  }

  function isBiggerThanSides(grid, row, col) {
    return (
      isBiggerThanTop(grid, row, col) &&
      isBiggerThanBottom(grid, row, col) &&
      isBiggerThanLeft(grid, row, col) &&
      isBiggerThanRight(grid, row, col)
    );
  }

  function getMountainTopCount(grid) {
    topCount = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (isBiggerThanSides(grid, i, j)) {
          topCount++;
        }
      }
    }

    return topCount;
  }

  function solution(grid) {
    let answer = getMountainTopCount(grid);
    return answer;
  }

  function testToMaxRowColumn() {
    const testNum = 1;
    const MAXLENGTH = 50;
    const input = [];
    const evenRow = Array.from({ length: MAXLENGTH }, (_, i) =>
      i % 2 === 0 ? 10 : 0
    );
    const oddRow = Array.from({ length: MAXLENGTH }, (_, i) =>
      i % 2 !== 0 ? 10 : 0
    );
    for (let i = 0; i < MAXLENGTH; i++) {
      if (i % 2 === 0) {
        input.push(evenRow);
      } else {
        input.push(oddRow);
      }
    }
    const expectResult = 1250;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinRowColumn() {
    const testNum = 2;
    const MINLENGTH = 1;
    const input = Array.from({ length: MINLENGTH }, () => [10]);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxValue() {
    const testNum = 3;
    const MAXLENGTH = 50;
    const input = [];
    const evenRow = Array.from({ length: MAXLENGTH }, (_, i) =>
      i % 2 === 0 ? 100 : 0
    );
    const oddRow = Array.from({ length: MAXLENGTH }, (_, i) =>
      i % 2 !== 0 ? 100 : 0
    );
    for (let i = 0; i < MAXLENGTH; i++) {
      if (i % 2 === 0) {
        input.push(evenRow);
      } else {
        input.push(oddRow);
      }
    }
    const expectResult = 1250;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinValue() {
    const testNum = 4;
    const MINLENGTH = 1;
    const MINVALUE = 1;
    const input = Array.from({ length: MINLENGTH }, () => [MINVALUE]);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllSameValue() {
    const testNum = 5;
    const input = [];
    const row = Array.from({ length: 10 }, () => 10);
    for (let i = 0; i < 10; i++) {
      input.push(row);
    }
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = [
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2],
    ];
    const output = this.solution(input);

    console.log("S2P7\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxRowColumn();
    testToMinRowColumn();
    testToMaxValue();
    testToMinValue();
    testToAllSameValue();
  }

  main();
}
