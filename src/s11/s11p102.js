/**
 * Title: 제일 작은 수 제거하기
 * Content: 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
 *          단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
 *          예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
 * Input Condition: arr은 길이 1 이상인 배열입니다.
 *                  인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
 * Output Condition: None
 * Input Example: [4,3,2,1]
 * Output Example: [4,3,2]
 */
// Expected: 12:54 - 13:34
// Actual: 12:54 - 12:58

{
  function solution(arr) {
    const answer = [...arr];
    const minN = Math.min(...arr);
    const minNIdx = arr.indexOf(minN);
    answer.splice(minNIdx, 1);
    answer.length === 0 && answer.push(-1);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [10];
    const expectResult = [-1];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P102\n");

    const input = [4, 3, 2, 1];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
