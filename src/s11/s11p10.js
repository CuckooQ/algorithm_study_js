/**
 * 프로그래머스 완전 탐색 Level 2
 * Title: 카펫
 * Content: Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 *          Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
 *          Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 *                  노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 *                  카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 * Output Condition: None
 * Input Example: brown 10
 *                yellow 2
 * Output Example: [4, 3]
 */
// Expected: 11:36 - 12:16
// Actual: 11:36 -12:00
// *노란색 개수와 갈색 개수의 관계를 찾는 것이 중요했다.

{
  function solution(brown, yellow) {
    let answer = [];

    for (let i = 1; i <= yellow; i++) {
      if (yellow % i === 0) {
        const yVerticalLen = yellow / i;
        const yHorizontalLen = i;

        if (yVerticalLen * 2 + yHorizontalLen * 2 + 4 === brown) {
          answer.push(yVerticalLen + 2);
          answer.push(yHorizontalLen + 2);
          break;
        }
      }
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputBrown = 8;
    const inputYellow = 1;
    const expectResult = [3, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputBrown, inputYellow),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputBrown = 24;
    const inputYellow = 24;
    const expectResult = [8, 6];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputBrown, inputYellow),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P10\n");

    const inputBrown = 10;
    const inputYellow = 2;
    const output = this.solution(inputBrown, inputYellow);

    // test();
    console.log(`Input: ${inputBrown}\n ${inputYellow} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
