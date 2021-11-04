/**
 * Title: 5. Longest Palindromic Substring
 * Content: Given a string s, return the longest palindromic substring in s.
 * Input Condition: 1 <= s.length <= 1000
 *                  s consist of only digits and English letters.
 * Output Condition: None
 * Input Example: "babad"
 * Output Example: "bab"
 */
// *다시 풀기.
// *Brute Force로 풀면 시간 초과가 발생한다.

{
  const MAX_LEN = 1000;

  function isPalindrome(s) {
    const reversedText = s.split("").reverse().join("");
    return s === reversedText;
  }

  function getMaxLenSubStrPalindrome(s) {
    let maxLenSubStr = "";

    const dp = Array.from({ length: s.length }, () =>
      Array.from({ length: s.length }, () => 0)
    );

    for (let i = s.length - 1; i >= 0; i--) {
      for (let j = i; j < s.length; j++) {
        dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]) ? 1 : 0;
        if (dp[i][j] && j - i + 1 >= maxLenSubStr.length) {
          maxLenSubStr = s.substring(i, j + 1);
        }
      }
    }

    return maxLenSubStr;
  }

  function solution(s) {
    const answer = getMaxLenSubStrPalindrome(s);
    return answer;
  }

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
