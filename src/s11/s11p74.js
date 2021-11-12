/**
 * Title: 문자열 내 p와 y의 개수
 * Content: 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 *          s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 *          'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 *          단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 *          예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 * Input Condition: 문자열 s의 길이 : 50 이하의 자연수
 *                  문자열 s는 알파벳으로만 이루어져 있습니다.
 * Output Condition: None
 * Input Example: "pPoooyY"
 * Output Example: true
 */
// Expected: 09:35 - 10:15
// Actual: 09:35 - 09:46
// *복습을 위해 다시 풀기
// *문자의 개수는 split으로 나눈 개수 - 1

{
  const Y = "y";
  const P = "p";

  // 다른 사람 풀이
  function solution(s) {
    let answer;
    s = s.toLowerCase();
    answer = s.split(P).length === s.split(Y).length;
    return answer;
  }

  /*
  function solution(s) {
    let answer;

    s = s.toLowerCase();
    const [yCnt, pCnt] = [...s].reduce(
      (acc, c) => {
        if (c === Y) {
          acc[0]++;
        }
        if (c === P) {
          acc[1]++;
        }
        return acc;
      },
      [0, 0]
    );
    answer = yCnt === pCnt;

    return answer;
  }
  */

  function testToExample() {
    const testNum = 1;
    const input = "Pyy";
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P74\n");

    const input = "pPoooyY";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
