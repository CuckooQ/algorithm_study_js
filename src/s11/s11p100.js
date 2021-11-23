/**
 * Title: 정수 내림차순으로 배치하기
 * Content: 함수 solution은 정수 n을 매개변수로 입력받습니다.
 *          n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 * Input Condition: n은 1이상 8000000000 이하인 자연수입니다.
 * Output Condition: None
 * Input Example: 118372
 * Output Example: 873211
 */
// Expected: 12:42 - 13:22
// Actual: 12:42 - 12:44

{
  function solution(n) {
    return Number([...n.toString()].sort((a, b) => b - a).join(""));
  }

  function main() {
    console.log("S11P100\n");

    const input = 118372;
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
