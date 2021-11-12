/**
 * Title: 문자열 내림차순으로 배치하기
 * Content: 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
 *          s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
 * Input Condition: str은 길이 1 이상인 문자열입니다.
 * Output Condition: None
 * Input Example: "Zbcdefg"
 * Output Example: 	"gfedcbZ"
 */
// Expected: 07:43 - 08:23
// Actual: 07:43 - 07:50

{
  function solution(s) {
    let answer;
    const arr = [...s];
    arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    answer = arr.join("");
    return answer;
  }

  function main() {
    console.log("S11P77\n");

    const input = "Zbcdefg";
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
