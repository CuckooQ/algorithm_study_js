/**
 * Title: 서울에서 김서방 찾기
 * Content: String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
 *          seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 * Input Condition: seoul은 길이 1 이상, 1000 이하인 배열입니다.
 *                  seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
 *                  "Kim"은 반드시 seoul 안에 포함되어 있습니다.
 * Output Condition: None
 * Input Example: ["Jane", "Kim"]
 * Output Example: "김서방은 1에 있다"
 */
// Expected: 11:14 - 11:54
// Actual: 11:14 - 11:19

{
  const KIM = "Kim";
  const result = (idx) => `김서방은 ${idx}에 있다`;

  function solution(seoul) {
    const answer = result(seoul.indexOf(KIM));
    return answer;
  }

  function main() {
    console.log("S11P82\n");

    const input = ["Jane", "Kim"];
    const output = this.solution(input);

    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
