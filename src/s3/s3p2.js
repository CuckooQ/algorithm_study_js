/**
 * Title: 유효한 팰린드롬
 * Content: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라 한다.
 *          문자열이 입력되면, 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하기.
 *          단, 회문을 검사할 때, 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않는다.
 *          알파벳 이외의 문자들은 무시한다.
 * Input Condition: 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어진다.
 * Output Condition: 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력한다.
 * Input Example: found7, time: study; Yduts; emit, 7Dnuof
 * Output Example: YES
 */
// *다시 풀기.

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

    word = word.toUpperCase();
    const reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
  }

  function filterToOnlyStr(text) {
    return text.toLowerCase().replace(/[^a-z]/g, "");
  }

  function solution(text) {
    let answer;
    const filteredText = filterToOnlyStr(text);
    answer = isPalindrome(filteredText) ? YES : NO;
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

  function testToOnlyStrWord() {
    const testNum = 9;
    const input = "abcdcba";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToNotOnlyStrWord() {
    const testNum = 10;
    const input = "!@#$$%^&^*&(*()_+_}{<>?',.[]ab,cc!b!a";
    const expectResult = YES;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "found7, time: study; Yduts; emit, 7Dnuof";
    const output = this.solution(input);

    console.log("S3P2\n");
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
    testToOnlyStrWord();
    testToNotOnlyStrWord();
  }

  main();
}
