/**
 * Title: 회문 문자열
 * Content: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
 *          문자열이 입력되면, 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니라면 "NO"를 출력하기.
 * Input Condition: 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어진다.
 * Output Condition: 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력한다.
 * Input Example: gooG
 * Output Example: YES
 */

{
  const YES = "YES";
  const NO = "NO";

  function isEmptyWord(word) {
    return word.length === 0;
  }

  function isPalindrome(word) {
    if (isEmptyWord(word)) {
      return false;
    }

    let isPalindrome = true;
    for (let i = 0; i < word.length; i++) {
      const beforeChar = word[i].toUpperCase();
      const afterCharIdx = word.length - 1 - i;
      const afterChar = word[afterCharIdx].toUpperCase();
      if (beforeChar !== afterChar) {
        isPalindrome = false;
      }
    }

    return isPalindrome;
  }

  function solution(word) {
    const answer = isPalindrome(word) ? YES : NO;
    return answer;
  }

  function testToPalindrome() {
    const testNum = 1;
    const input = "cuc";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToNotPalindrome() {
    const testNum = 2;
    const input = "cdab";
    const expectResult = NO;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxLenWord() {
    const testNum = 3;
    const input =
      "abcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcbaabcdeedcba";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinLenWord() {
    const testNum = 4;
    const input = "";
    const expectResult = NO;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllSameChar() {
    const testNum = 5;
    const input = "aaaaaaaaaa";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToUppernLower() {
    const testNum = 6;
    const input = "aBdACcaDbA";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToOddLenWord() {
    const testNum = 7;
    const input = "abcba";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToEvenLenWord() {
    const testNum = 8;
    const input = "abccba";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "gooG";
    const output = this.solution(input);

    console.log("S3P1\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToPalindrome();
    testToNotPalindrome();
    testToMaxLenWord();
    testToMinLenWord();
    testToAllSameChar();
    testToUppernLower();
    testToOddLenWord();
    testToEvenLenWord();
  }

  main();
}
