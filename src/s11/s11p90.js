/**
 * Title: 시저 암호
 * Content: 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 *          예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
 *          "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 * Input Condition: 공백은 아무리 밀어도 공백입니다.
 *                  s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 *                  s의 길이는 8000이하입니다.
 *                  n은 1 이상, 25이하인 자연수입니다.
 * Output Condition: None
 * Input Example: s = "AB"
 *                n = 1
 * Output Example: "BC"
 */
// Expected: 09:37 - 10:17
// Actual: 09:37 - 10:03

{
  const UPPERCASE_START = 65;
  const UPPERCASE_END = 90;
  const LOWERCASE_END = 122;
  const ALPHABET_CNT = 26;

  function solution(s, n) {
    const answer = [...s]
      .map((c) => {
        if (c === " ") {
          return c;
        }

        const code = c.charCodeAt(0);
        const compareVal =
          code >= UPPERCASE_START && code <= UPPERCASE_END
            ? UPPERCASE_END
            : LOWERCASE_END;
        const minusVal = code + n > compareVal ? ALPHABET_CNT : 0;
        return String.fromCharCode(code + n - minusVal);
      })
      .join("");

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputS = "z";
    const inputN = 1;
    const expectResult = "a";
    const testFunction = solution;
    const condition = testFunction(inputS, inputN) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputS = "a B z";
    const inputN = 4;
    const expectResult = "e F d";
    const testFunction = solution;
    const condition = testFunction(inputS, inputN) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputS = "abcdefghijklmnopqrstuvwxyz";
    const inputN = 1;
    const expectResult = "bcdefghijklmnopqrstuvwxyza";
    const testFunction = solution;
    const condition = testFunction(inputS, inputN) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const inputN = 1;
    const expectResult = "BCDEFGHIJKLMNOPQRSTUVWXYZA";
    const testFunction = solution;
    const condition = testFunction(inputS, inputN) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P90\n");

    const inputS = "AB";
    const inputN = 1;
    const output = this.solution(inputS, inputN);

    // test();
    console.log(`Input: ${inputS} ${inputN}`);
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
