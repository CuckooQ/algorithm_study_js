/**
 * Title: 자연수 뒤집어 배열로 만들기
 * Content: 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 * Input Condition: n은 10,000,000,000이하인 자연수입니다.
 * Output Condition: None
 * Input Example: 12345
 * Output Example: 	[5,4,3,2,1]
 */
// Expected: 10:00 - 10:40
// Actual: 10:00 - 10:03

{
  function solution(n) {
    return [...n.toString()].reverse().map((nStr) => Number(nStr));
  }

  function main() {
    console.log("S11P98\n");

    const input = 12345;
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
