/**
 * Title: 최소값 구하기
 * Content: 7개의 수가 주어지면 그 숫자 중 가장 작은 수 출력
 * Input Condition: 첫 번째 줄에 7개의 수 입력
 * Output Condition: 첫 번째 줄에 가장 작은 값 출력
 * Input Example: 5 3 7 11 2 15 17
 * Output Example: 2
 */
// *apply() 존재를 처음 알았다.
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

{
  // 최소값 구하기
  function getMin(arr) {
    // return Math.min.apply(null, arr);
    return Math.min(...arr);
  }

  // 중복 값이 존재할 경우 결과 테스트
  function testHavingSameValues() {
    const testNum = 1;
    const input = [1, 2, 3, 4, 1, 3, 2];
    const expectResult = 1;
    const testFunction = getMin;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function solution(num1, num2, num3, num4, num5, num6, num7) {
    let answer;
    const arr = [num1, num2, num3, num4, num5, num6, num7];
    answer = getMin(arr);
    return answer;
  }

  function main() {
    const input1 = 5;
    const input2 = 3;
    const input3 = 7;
    const input4 = 11;
    const input5 = 2;
    const input6 = 15;
    const input7 = 17;
    const output = this.solution(
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7
    );

    console.log("S1P5\n");
    // test();
    console.log(
      `Input: ${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} `
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testHavingSameValues();
  }

  main();
}
