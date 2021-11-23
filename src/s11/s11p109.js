/**
 * Title: 행렬의 덧셈
 * Content: 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
 *          2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 * Input Condition: 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
 * Output Condition: None
 * Input Example: arr = [[1,2],[2,3]]
 *                arr2 = [[3,4],[5,6]]
 * Output Example: [[4,6],[7,9]]
 */
// Expected: 13:36 - 14:16
// Actual: 13:36 - 13:46

{
  function solution(arr, arr2) {
    return Array.from({ length: arr.length }, (_, i) =>
      Array.from({ length: arr[0].length }, (_, j) => arr[i][j] + arr2[i][j])
    );
  }

  function main() {
    console.log("S11P109\n");

    const inputArr = [
      [1, 2],
      [2, 3],
    ];
    const inputArr2 = [
      [3, 4],
      [5, 6],
    ];
    const output = this.solution(inputArr, inputArr2);

    console.log(`Input: ${inputArr.join(" ")}\n${inputArr2.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
