/**
 * Title: 짝지어 제거하기
 * Content: 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
 *          먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
 *          그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
 *          이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
 *          문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요.
 *          성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.
 *          예를 들어, 문자열 S = baabaa 라면
 *          b aa baa → bb aa → aa →
 *          의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
 * Input Condition: 문자열의 길이 : 1,000,000이하의 자연수
 *                  문자열은 모두 소문자로 이루어져 있습니다.
 * Output Condition: None
 * Input Example: baabaa
 * Output Example: 1
 */
// *다시 풀기
// *효율성 테스트가 모두 시간초과로 실패했다.
// *매우 긴 배열은 시간초과를 야기한다.
// *어이가 없네.

{
  // 문자열을 배열로 저장하는 처리 제거
  function isPairStr(s) {
    const storeStack = [];

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const storedChar = storeStack.pop();

      if (char !== storedChar) {
        storedChar && storeStack.push(storedChar);
        storeStack.push(char);
      }
    }

    return storeStack.length === 0 ? 1 : 0;
  }

  /*
  // 시간 초과 (60점)
  function isPairStr(s) {
    const charQueue = [...s];
    const storeStack = [charQueue.shift()];

    while (charQueue.length !== 0) {
      const char = charQueue.shift();
      const storedChar = storeStack.length !== 0 ? storeStack.pop() : "";

      if (char !== storedChar) {
        storedChar && storeStack.push(storedChar);
        storeStack.push(char);
      }
    }

    return storeStack.length === 0 ? 1 : 0;
  }
  */

  function solution(s) {
    const answer = isPairStr(s);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "cdcd";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P29\n");

    const input = "baabaa";
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
