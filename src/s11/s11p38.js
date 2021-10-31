/**
 * Title: 두 개 뽑아서 더하기
 * Content: 정수 배열 numbers가 주어집니다.
 *          numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
 *          더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: numbers의 길이는 2 이상 100 이하입니다.
 *                  numbers의 모든 수는 0 이상 100 이하입니다.
 * Output Condition: None
 * Input Example: [2,1,3,4,1]
 * Output Example: [2,3,4,5,6,7]
 */
// Expected: 11:00 - 11:40
// Actual: 11:00 - 11:18

{
  function getAllSumOfPair(numbers) {
    let sums = [];

    const sumsSet = new Set();
    let firstIdx = 0;
    let secondIdx = 1;
    while (firstIdx < numbers.length && secondIdx < numbers.length) {
      sumsSet.add(numbers[firstIdx] + numbers[secondIdx]);
      secondIdx++;

      if (secondIdx === numbers.length) {
        firstIdx++;
        secondIdx = firstIdx + 1;
      }
    }

    sums = [...sumsSet].sort((a, b) => a - b);

    return sums;
  }

  function solution(numbers) {
    const answer = getAllSumOfPair(numbers);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [5, 0, 2, 7];
    const expectResult = [2, 5, 7, 9, 12];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P38\n");

    const input = [2, 1, 3, 4, 1];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
