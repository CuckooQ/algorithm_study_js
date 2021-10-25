/**
 * Title: 숫자 문자열과 영단어
 * Content: 네오와 프로도가 숫자놀이를 하고 있습니다.
 *          네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
 *          다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
 *          1478 → "one4seveneight"
 *          234567 → "23four5six7"
 *          10203 → "1zerotwozero3"
 *          이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
 *          s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
 *          참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
 *          숫자	영단어
 *           0	  zero
 *           1	  one
 *           2	  two
 *           3	  three
 *           4	  four
 *           5	  five
 *           6	  six
 *           7	  seven
 *           8	  eight
 *           9	  nine
 * Input Condition: 1 ≤ s의 길이 ≤ 50
 *                  s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
 *                  return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
 * Output Condition: None
 * Input Example: "one4seveneight"
 * Output Example: 1478
 */
// Expected: 21:25 - 22:05
// Actual: 21:25 - 22:01
// *regex 사용법 + 다른 사람 풀이 복습을 위해 다시 풀기

{
  const NUMBERS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // 다른 사람 풀이
  function changeStrToNum(s) {
    let filteredNumStr = s;

    for (let i = 0; i < NUMBERS.length; i++) {
      const arr = filteredNumStr.split(NUMBERS[i]);
      filteredNumStr = arr.join(i);
    }

    return Number(filteredNumStr);
  }

  /*
  function changeStrToNum(s) {
    let filteredNumStr = s;
    filteredNumStr = filteredNumStr.replace(/zero/g, 0);
    filteredNumStr = filteredNumStr.replace(/one/g, 1);
    filteredNumStr = filteredNumStr.replace(/two/g, 2);
    filteredNumStr = filteredNumStr.replace(/three/g, 3);
    filteredNumStr = filteredNumStr.replace(/four/g, 4);
    filteredNumStr = filteredNumStr.replace(/five/g, 5);
    filteredNumStr = filteredNumStr.replace(/six/g, 6);
    filteredNumStr = filteredNumStr.replace(/seven/g, 7);
    filteredNumStr = filteredNumStr.replace(/eight/g, 8);
    filteredNumStr = filteredNumStr.replace(/nine/g, 9);

    return Number(filteredNumStr);
  }
  */

  function solution(s) {
    const answer = changeStrToNum(s);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "23four5six7";
    const expectResult = 234567;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "2three45sixseven";
    const expectResult = 234567;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "123";
    const expectResult = 123;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "onezerozero";
    const expectResult = 100;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P18\n");

    const input = "one4seveneight";
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
  }

  main();
}
