/**
 * Title: 숫자의 표현
 * Content: Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
 *          예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
 *          1 + 2 + 3 + 4 + 5 = 15
 *          4 + 5 + 6 = 15
 *          7 + 8 = 15
 *          15 = 15
 *          자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
 * Input Condition: n은 10,000 이하의 자연수 입니다.
 * Output Condition: None
 * Input Example: 15
 * Output Example: 4
 */
// Expected: 13:26 - 14:06
// Actual: 13:26 - 13:39

{
  function solution(n) {
    let answer = 0;

    let weight = 0;
    for (let i = 1; i < n; i++) {
      const num = (n - weight) / i;
      if (num > 0 && Number.isInteger(num)) {
        answer++;
      }
      if (num <= 0) {
        break;
      }
      weight += i;
    }

    return answer;
  }

  function main() {
    console.log("S11P124\n");

    const input = 15;
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
