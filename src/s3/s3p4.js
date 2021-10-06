/**
 * Title: 가장 짧은 문자거리
 * Content: 한 개의 문자열과 그 문자열에 존재하는 특정 문자가 주어진다.
 *          문자열의 각 문자와 지정된 특정 문자의 위치에서의 최소거리를 출력하기.
 * Input Condition: 첫 번째 줄에 문자열과 특정 문자가 주어진다. 문자열과 특정 문자는 소문자로만 주어진다.
 * Output Condition: 첫 번째 줄에 각 문자열의 각 문자가 특정 문자와 떨어진 거리를 순서대로 출력한다.
 * Input Example: teachermode e
 * Output Example: 1 0 1 2 1 0 1 2 2 1 0
 */
// *오래 걸렸다. 다시 풀기.

{
  function getDistancesFromSelectedCharIndexes(text, selectedCharIndexes) {
    const distances = Array.from({ length: text.length }, () => -1);
    let i = 0;
    while (i < distances.length) {
      if (selectedCharIndexes.indexOf(i) !== -1) {
        distances[i] = 0;
      } else {
        const distancesFromSelectedChar = selectedCharIndexes.map((idx) => {
          return Math.abs(idx - i);
        });
        distances[i] = Math.min(...distancesFromSelectedChar);
      }
      i++;
    }

    return distances;
  }

  function getIndexesOfSelectedChar(text, char) {
    const indexes = [];
    let idx = 0;
    while (true) {
      idx = Array.from(text).indexOf(char, idx);
      if (idx === -1) {
        break;
      }

      indexes.push(idx);
      idx++;
    }

    return indexes;
  }

  function getDistancesFromSelectedChar(text, char) {
    const selectedCharIndexes = getIndexesOfSelectedChar(text, char);
    const distances = getDistancesFromSelectedCharIndexes(
      text,
      selectedCharIndexes
    );
    return distances;
  }

  function solution(text, char) {
    let answer;
    const distances = getDistancesFromSelectedChar(text, char);
    answer = distances.join(" ");
    return answer;
  }

  function testToHavingOnlyOneSelectedChar() {
    const testNum = 1;
    const input1 = "abcdefghij";
    const input2 = "c";
    const expectResult = "2 1 0 1 2 3 4 5 6 7";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToHavingAllSelectedChar() {
    const testNum = 2;
    const input1 = "aaaaaaaaaa";
    const input2 = "a";
    const expectResult = "0 0 0 0 0 0 0 0 0 0";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToPlaceSelectedCharToFirstIdx() {
    const testNum = 3;
    const input1 = "abcdefghij";
    const input2 = "a";
    const expectResult = "0 1 2 3 4 5 6 7 8 9";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToPlaceSelectedCharToLastIdx() {
    const testNum = 4;
    const input1 = "abcdefghij";
    const input2 = "j";
    const expectResult = "9 8 7 6 5 4 3 2 1 0";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToPlaceSelectedCharToCenteredIdx() {
    const testNum = 5;
    const input1 = "abcdefghijk";
    const input2 = "f";
    const expectResult = "5 4 3 2 1 0 1 2 3 4 5";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToEmptyText() {
    const testNum = 6;
    const input1 = "";
    const input2 = "a";
    const expectResult = "";
    const testFunction = solution;
    const condition = testFunction(input1, input2) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input1 = "teachermode";
    const input2 = "e";
    const output = this.solution(input1, input2);

    console.log("S3P4\n");
    // test();
    console.log(`Input: ${input1} ${input2}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToHavingOnlyOneSelectedChar();
    testToHavingAllSelectedChar();
    testToPlaceSelectedCharToFirstIdx();
    testToPlaceSelectedCharToLastIdx();
    testToPlaceSelectedCharToCenteredIdx();
    testToEmptyText();
  }

  main();
}
