/**
 * Title: 쿼드압축 후 개수 세기
 * Content: 0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다.
 *          구체적인 방식은 다음과 같습니다.
 *          1. 당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
 *          2. 만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
 *          3. 그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤,
 *             각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
 *          arr이 매개변수로 주어집니다.
 *          위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
 *                  arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
 *                  arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
 * Output Condition: None
 * Input Example: [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]
 * Output Example: [4,9]
 */
// Expected: 09:20 - 10:00
// Actual: 09:20 - 10:50
// *다시 풀기
// *어떻게 할 것인지는 빠르게 생각해냈지만, 그 것을 구현하는 과정에서 2차원 배열을 다루는 것이 아직도 미숙해서 오래 걸렸다.

{
  const [ZERO_IDX, ONE_IDX] = [0, 1];

  function solution(arr) {
    const answer = [0, 0];
    const len = arr.length;
    rf(len);
    return answer;

    function rf(size) {
      let rowStart = 0;
      let colStart = 0;
      while (rowStart < len && colStart < len) {
        let isAllEqual = true;
        let rowEnd = rowStart + size - 1;
        let colEnd = colStart + size - 1;
        let befval = -1;

        for (let i = rowStart; i <= rowEnd; i++) {
          for (let j = colStart; j <= colEnd; j++) {
            if (befval === -1) {
              befval = arr[i][j];
            }
            if (befval !== arr[i][j] || befval === -1) {
              isAllEqual = false;
              break;
            }
          }
          if (!isAllEqual) {
            break;
          }
        }

        if (isAllEqual) {
          befval === 0 && answer[ZERO_IDX]++;
          befval === 1 && answer[ONE_IDX]++;
          for (let i = rowStart; i <= rowEnd; i++) {
            for (let j = colStart; j <= colEnd; j++) {
              arr[i][j] = -1;
            }
          }
        }

        colStart += size;

        if (colStart >= len) {
          colStart = 0;
          rowStart += size;
        }
      }

      size !== 1 && rf(size / 2);
    }
  }

  function testToExample() {
    const testNum = 1;
    const input = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
    ];
    const expectResult = [10, 15];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P113\n");

    const input = [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ];
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
