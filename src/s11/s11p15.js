/**
 * Title: 문자열 압축
 * Content: 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다.
 *          최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
 *          간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다.
 *          예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다.
 *          "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.
 *          예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
 *          다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다.
 *          이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.
 *          압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: s의 길이는 1 이상 1,000 이하입니다.
 *                  s는 알파벳 소문자로만 이루어져 있습니다.
 * Output Condition: None
 * Input Example: "aabbaccc"
 * Output Example: 7
 */
// Expected: 18:02 -18:42
// Actual: 18:02 - 18:44

{
  function getMinLenOfCompressed(s) {
    let minLen = s.length;

    for (let i = 1; i < s.length; i++) {
      let convertedStr = "";
      let befChar = "";
      let cnt = 1;
      let idx = 0;
      let isEnd = false;

      while (!isEnd) {
        const slicedStr = s.substr(idx, i);

        if (befChar) {
          if (befChar === slicedStr) {
            cnt++;
          } else {
            convertedStr += (cnt !== 1 ? cnt : "") + befChar;
            cnt = 1;
          }
        }

        befChar = slicedStr;
        idx += i;

        if (idx >= s.length) {
          convertedStr += (cnt !== 1 ? cnt : "") + befChar;
          break;
        }
      }

      if (convertedStr.length < minLen) {
        minLen = convertedStr.length;
      }
    }

    return minLen;
  }

  function solution(s) {
    const answer = getMinLenOfCompressed(s);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "ababcdcdababcdcd";
    const expectResult = 9;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "abcabcdede";
    const expectResult = 8;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "abcabcabcabcdededededede";
    const expectResult = 14;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "xababcdcdababcdcd";
    const expectResult = 17;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = "a";
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P15\n");

    const input = "aabbaccc";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}
