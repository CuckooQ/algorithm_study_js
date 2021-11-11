/**
 * Title: 문자열 내 마음대로 정렬하기
 * Content: 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
 *          각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 *          예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 * Input Condition: strings는 길이 1 이상, 50이하인 배열입니다.
 *                  strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
 *                  strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
 *                  모든 strings의 원소의 길이는 n보다 큽니다.
 *                  인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
 * Output Condition: None
 * Input Example: strings = ["sun", "bed", "car"];
 *                n = 1
 * Output Example: ["car", "bed", "sun"]
 */
// Expected: 09:13 - 09:53
// Actual: 09:13 - 09:26

{
  function solution(strings, n) {
    const answer = [...strings].sort((a, b) => {
      if (a[n].charCodeAt(0) !== b[n].charCodeAt(0)) {
        return a[n].charCodeAt(0) - b[n].charCodeAt(0);
      } else {
        return a < b ? -1 : 1;
      }
    });
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputStrings = ["abce", "abcd", "cdx"];
    const inputN = 2;
    const expectResult = ["abcd", "abce", "cdx"];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputStrings, inputN),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P71\n");

    const inputStrings = ["sun", "bed", "car"];
    const inputN = 1;
    const output = this.solution(inputStrings, inputN);

    // test();
    console.log(`Input: ${inputStrings.join(" ")}\n${inputN} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
