/**
 * Title: 모든 아나그램 찾기
 * Content: S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수 구하기.
 * Input Condition: 첫 번째 줄에 첫 번째 문자열S가 입력된다.
 *                  S문자열의 길이는 10,000을 넘지 않는다.
 *                  두 번째 줄에 두 번째 문자열T가 입력된다.
 *                  T문자열의 길이는 S문자열보다 작거나 같다.
 * Output Condition: S문자열에 T문자열과 아나그램이 되는 부분 문자열의 개수를 출력한다.
 * Input Example: bacaAacba
 *                abc
 * Output Example: 3
 */
// *다시 풀기.
// *예제 이해도 못했다.

{
  const MAX_TEXT_LENGTH = 10_000;

  function getAnagramCount(firstText, secondText) {
    let count = 0;

    const secondCharSet = new Set(secondText);
    const anagramLength = secondText.length;
    for (let i = 0; i <= firstText.length - anagramLength; i++) {
      const slicedText = firstText.substr(i, anagramLength);
      const firstCharSet = new Set(slicedText);
      const isAnagram = [...secondCharSet].every((char) =>
        firstCharSet.has(char)
      );
      isAnagram && count++;
    }

    return count;
  }

  function solution(firstText, secondText) {
    let answer = getAnagramCount(firstText, secondText);
    return answer;
  }

  function testToMaxFirstTextLenMaxScondeTextLen() {
    const testNum = 1;
    let inputFirstText = "";
    let inputFirstTextUnit = "";
    for (let i = 0; i < 10; i++) {
      inputFirstTextUnit += String.fromCharCode(97 + i);
    }
    while (inputFirstText.length !== MAX_TEXT_LENGTH) {
      inputFirstText += inputFirstTextUnit;
    }
    const inputSecondText = inputFirstText;
    const expectResult = 1;
    const testFunction = solution;
    const condition =
      testFunction(inputFirstText, inputSecondText) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxFirstTextLenMinScondeTextLen() {
    const testNum = 2;
    let inputFirstText = "";
    let inputFirstTextUnit = "";
    for (let i = 0; i < 10; i++) {
      inputFirstTextUnit += String.fromCharCode(97 + i);
    }
    while (inputFirstText.length !== MAX_TEXT_LENGTH) {
      inputFirstText += inputFirstTextUnit;
    }
    const inputSecondText = String.fromCharCode(97);
    const expectResult = 1000;
    const testFunction = solution;
    const condition =
      testFunction(inputFirstText, inputSecondText) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinFirstTextLen() {
    const testNum = 3;
    const inputFirstText = String.fromCharCode(97);
    const inputSecondText = String.fromCharCode(98);
    const expectResult = 0;
    const testFunction = solution;
    const condition =
      testFunction(inputFirstText, inputSecondText) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToUpperAndLowerCase() {
    const testNum = 4;
    const inputFirstWord = "abcdefghij";
    const inputSecondWord = "ABCDEFGHIJ";
    const expectResult = 0;
    const testFunction = solution;
    const condition =
      testFunction(inputFirstWord, inputSecondWord) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputFirstText = "bacaAacba";
    const inputSecondText = "abc";
    const output = this.solution(inputFirstText, inputSecondText);

    console.log("S5P8\n");
    // test();
    console.log(`Input: ${inputFirstText}\n ${inputSecondText}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxFirstTextLenMaxScondeTextLen();
    testToMaxFirstTextLenMinScondeTextLen();
    testToMinFirstTextLen();
    testToUpperAndLowerCase();
  }

  main();
}
