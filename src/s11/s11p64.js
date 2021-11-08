/**
 * Title: 금과 은 운반하기
 * Content: 어느 왕국에 하나 이상의 도시들이 있습니다. 왕국의 왕은 새 도시를 짓기로 결정하였습니다.
 *          해당 도시를 짓기 위해서는 도시를 짓는 장소에 금 a kg과 은 b kg이 전달되어야 합니다.
 *          각 도시에는 번호가 매겨져 있는데, i번 도시에는 금 g[i] kg, 은 s[i] kg, 그리고 트럭 한 대가 있습니다.
 *          i번 도시의 트럭은 오직 새 도시를 짓는 건설 장소와 i번 도시만을 왕복할 수 있으며,
 *          편도로 이동하는 데 t[i] 시간이 걸리고, 최대 w[i] kg 광물을 운반할 수 있습니다.
 *          (광물은 금과 은입니다. 즉, 금과 은을 동시에 운반할 수 있습니다.)
 *          모든 트럭은 같은 도로를 여러 번 왕복할 수 있으며 연료는 무한대라고 가정합니다.
 *          정수 a, b와 정수 배열 g, s, w, t가 매개변수로 주어집니다.
 *          주어진 정보를 바탕으로 각 도시의 트럭을 최적으로 운행했을 때,
 *          새로운 도시를 건설하기 위해 금 a kg과 은 b kg을 전달할 수 있는 가장 빠른 시간을 구해 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 0 ≤ a, b ≤ 109
 *                  1 ≤ g의 길이 = s의 길이 = w의 길이 = t의 길이 = 도시 개수 ≤ 105
 *                  0 ≤ g[i], s[i] ≤ 109
 *                  1 ≤ w[i] ≤ 102
 *                  1 ≤ t[i] ≤ 105
 *                  a ≤ g의 모든 수의 합
 *                  b ≤ s의 모든 수의 합
 * Output Condition: None
 * Input Example: a = 10
 *                b = 10
 *                g = [100]
 *                s = [100]
 *                w = [7]
 *                t = [10]
 * Output Example: 50
 */
// *다시 풀기

{
  function solution(a, b, g, s, w, t) {
    let answer;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputA = 90;
    const inputB = 500;
    const inputG = [70, 70, 0];
    const inputS = [0, 0, 500];
    const inputW = [100, 100, 2];
    const inputT = [4, 8, 1];
    const expectResult = 499;
    const testFunction = solution;
    const condition =
      testFunction(inputA, inputB, inputG, inputS, inputW, inputT) ===
      expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P64\n");

    const inputA = 10;
    const inputB = 10;
    const inputG = [100];
    const inputS = [100];
    const inputW = [7];
    const inputT = [10];
    const output = this.solution(
      inputA,
      inputB,
      inputG,
      inputS,
      inputW,
      inputT
    );

    // test();
    console.log(
      `Input: ${inputA} ${inputB}\n${inputG.join("")}\n${inputS.join(
        " "
      )}\n${inputW.join(" ")}\n${inputT.join(" ")}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
  }

  main();
}
