/**
 * Title: 나누어 떨어지는 숫자 배열
 * Content: array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 *          divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * Input Condition: arr은 자연수를 담은 배열입니다.
 *                  정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 *                  divisor는 자연수입니다.
 *                  array는 길이 1 이상인 배열입니다.
 * Output Condition: None
 * Input Example: arr = [5, 9, 7, 10]
 *                divisor = 5
 * Output Example: [5, 10]
 */
// Expected: 10:15 - 10 -55
// Actual: 10:15 - 10:23

{
  function solution(arr, divisor) {
    let answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
    if (answer.length === 0) answer = [-1];
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputArr = [2, 36, 1, 3];
    const inputDivisor = 1;
    const expectResult = [1, 2, 3, 36];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputArr, inputDivisor),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputArr = [3, 2, 6];
    const inputDivisor = 10;
    const expectResult = [-1];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputArr, inputDivisor),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P65\n");

    const inputArr = [5, 9, 7, 10];
    const inputDivisor = 5;
    const output = this.solution(inputArr, inputDivisor);

    // test();
    console.log(`Input: ${inputArr.join(" ")}\n${inputDivisor} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
