/**
 * Title: 재귀함수
 * Content: 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지 출력하기.
 * Input Condition: 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.
 * Output Condition: 첫 번째 줄에 출력한다.
 * Input Example: 3
 * Output Example: 1 2 3
 */
// *재귀함수 복습을 위해 다시 풀기.

{
  // 꼬리 재귀함수
  function getNumsFromOneToNum(num, nums = []) {
    if (num === 0) {
      return nums.reverse().join(" ");
    }

    nums.push(num);
    return getNumsFromOneToNum(num - 1, nums);
  }

  function solution(num) {
    const answer = getNumsFromOneToNum(num);
    return answer;
  }

  function main() {
    const input = 3;
    const output = this.solution(input);
    console.log("S8P1\n");
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
