/**
 * Title: 2016년
 * Content: 2016년 1월 1일은 금요일입니다.
 *          2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
 *          요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
 *          예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
 * Input Condition: 2016년은 윤년입니다.
 *                  2016년 a월 b일은 실제로 있는 날입니다.
 *                  (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 * Output Condition: None
 * Input Example: a = 5
 *                b = 24
 * Output Example: TUE
 */
// Expected: 12:13 - 12:53
// Actual: 12:13 - 13:25
// *다시 풀기
// *로직으로만 풀려고 했는데, 더 빠르고 훨씬 쉬운 방법이 있었다.

{
  const YEAR = 2016;
  const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  function getDayOfDateOf2016(a, b) {
    let day = "";

    const date = new Date();
    date.setFullYear(YEAR);
    date.setMonth(a - 1);
    date.setDate(b);
    const dayIdx = date.getDay();
    day = DAY[dayIdx];

    return day;
  }

  function solution(a, b) {
    const answer = getDayOfDateOf2016(a, b);
    return answer;
  }

  function test() {
    const testNum = 1;
    const input = 0;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample1() {
    const testNum = 1;
    const inputA = 1;
    const inputB = 1;
    const expectResult = "FRI";
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputA = 2;
    const inputB = 29;
    const expectResult = "MON";
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputA = 12;
    const inputB = 31;
    const expectResult = "SAT";
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputA = 2;
    const inputB = 14;
    const expectResult = "SUN";
    const testFunction = solution;
    const condition = testFunction(inputA, inputB) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P41\n");

    const inputA = 5;
    const inputB = 24;
    const output = this.solution(inputA, inputB);

    // test();
    console.log(`Input: ${inputA} ${inputB} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
  }

  main();
}
