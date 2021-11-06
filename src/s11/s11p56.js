/**
 * Title: 가운데 글자 가져오기
 * Content: 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
 *          단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * Input Condition: s는 길이가 1 이상, 100이하인 스트링입니다.
 * Output Condition: None
 * Input Example: abcde
 * Output Example: c
 */
// Expected: 09:58 - 10:38
// Actual: 09:58 - 10:08

{
  function solution(s) {
    let answer = "";

    if (s.length % 2 === 1) {
      const midIdx = Math.floor(s.length / 2);
      answer = s[midIdx];
    } else {
      const midIdxes = [];
      midIdxes.push(s.length / 2);
      midIdxes.push(s.length / 2 - 1);
      midIdxes.reverse().forEach((idx) => {
        answer += s[idx];
      });
    }
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "qwer";
    const expectResult = "we";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P56\n");

    const input = "abcde";
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
