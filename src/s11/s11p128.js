/**
 * Title: 행렬의 곱셈
 * Content: 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
 * Input Condition: 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 *                  행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
 *                  곱할 수 있는 배열만 주어집니다.
 * Output Condition: None
 * Input Example: arr1 = [[1, 4], [3, 2], [4, 1]]
 *                arr2 = [[3, 3], [3, 3]]
 * Output Example: [[15, 15], [15, 15], [15, 15]]
 */
// Expected: 15:00 -15:40
// Actual: 15:00 - 15:30
// *2차원 배열 복습을 위해 다시 풀기
// *2차원 배열을 다루는 것은 역시 어렵다.

{
  function solution(arr1, arr2) {
    const answer = Array.from({ length: arr1.length }, () =>
      Array(arr2[0].length).fill(0)
    );

    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < answer[0].length; j++) {
        for (let k = 0; k < arr1[0].length; k++) {
          answer[i][j] += arr1[i][k] * arr2[k][j];
        }
      }
    }

    return answer;
  }

  function main() {
    console.log("S11P128\n");

    const inputArr1 = [
      [1, 4],
      [3, 2],
      [4, 1],
    ];
    const inputArr2 = [
      [3, 3],
      [3, 3],
    ];
    const output = this.solution(inputArr1, inputArr2);

    console.log(`Input: ${inputArr1.join(" ")}\n${inputArr2.join(" ")}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
