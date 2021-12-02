/**
 * Title: JadenCase 문자열 만들기
 * Content: JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
 *          문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
 * Input Condition: s는 길이 1 이상인 문자열입니다.
 *                  s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
 *                  첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
 * Output Condition: None
 * Input Example: "3people unFollowed me"
 * Output Example: "3people Unfollowed Me"
 */
// Expected: 15:36 - 16:16
// Actual: 15:36 - 15:50

{
  function solution(s) {
    let answer;

    let words = s.split(" ");
    words = words.map((word) => {
      const charArr = [...word];
      for (let i = 0; i < charArr.length; i++) {
        if (i === 0) {
          charArr[i] = charArr[i].toUpperCase();
        } else {
          charArr[i] = charArr[i].toLowerCase();
        }
      }
      return charArr.join("");
    });
    answer = words.join(" ");

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "for the last week";
    const expectResult = "For The Last Week";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P129\n");

    const input = "3people unFollowed me";
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
