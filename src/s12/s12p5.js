/**
 * Title: Longest Palindromic Substring
 * Content: Given a string s, return the longest palindromic substring in s.
 * Input Condition: 1 <= s.length <= 1000
 *                  s consist of only digits and English letters.
 * Output Condition: None
 * Input Example: "babad"
 * Output Example: "bab"
 */
// *다시 풀기.
// *매우 오래 걸렸고 통과하지 못했다.
// *모두 통과하는 해답을 찾아야 한다.

{
  const MAX_LEN = 1000;

  function compareToPalindrome(text) {
    const reversedText = text.split("").reverse().join("");
    return text === reversedText;
  }

  function solution(text) {
    let answer = "";

    return answer;
  }

  /*
  // 시간 초과된 처리
  function solution(text) {
    let answer = "";

    let startIdx = 0;
    let subText = text;
    let windowSize = subText.length;

    while (windowSize !== 0) {
      if (answer.length > windowSize) {
        break;
      }

      if (compareToPalindrome(subText)) {
        answer = subText;
        break;
      } else {
        startIdx++;
        const newSubText = text.substr(startIdx, windowSize);
        if (subText.length !== newSubText.length) {
          startIdx = 0;
          windowSize--;
          subText = text.substr(startIdx, windowSize);
        } else {
          subText = newSubText;
        }
      }
    }

    return answer;
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = "cbbd";
    const expectResult = "bb";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "a";
    const expectResult = "a";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "ac";
    const expectResult = "a";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "1abcdefghijk123";
    const expectResult = "1";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = Array.from({ length: MAX_LEN }, () => "a").join("");
    const expectResult = Array.from({ length: MAX_LEN }, () => "a").join("");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const input = "eabcb";
    const expectResult = "bcb";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  /*
  function testToExample7() {
    const testNum = 7;
    const input =
      "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv";
    const expectResult = ??;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  */

  function main() {
    console.log("S12P5\n");

    const input = "babad";
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
    testToExample5();
    testToExample6();
    // testToExample7();
  }

  main();
}
