/**
 * Title: 이진 변환 반복하기
 * Content: 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
 *          1. x의 모든 0을 제거합니다.
 *          2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 *          예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
 *          0과 1로 이루어진 문자열 s가 매개변수로 주어집니다.
 *          s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
 *          이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: s의 길이는 1 이상 150,000 이하입니다.
 *                  s에는 '1'이 최소 하나 이상 포함되어 있습니다.
 * Output Condition: None
 * Input Example: "110010101001"
 * Output Example:  	[3,8]
 */
// Expected: 09:59 - 10:39
// Actual: 09:59 - 10:20

{
  function solution(s) {
    const answer = [];

    let step = 0;
    let removedCnt = 0;
    while (s !== "1") {
      step++;
      const befLen = s.length;
      s = s.replace(/0/g, "");
      const aftLen = s.length;
      s = aftLen.toString(2);
      removedCnt += befLen - aftLen;
    }

    answer.push(step, removedCnt);

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "01110";
    const expectResult = [3, 3];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "1111111";
    const expectResult = [4, 1];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P97\n");

    const input = "110010101001";
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
