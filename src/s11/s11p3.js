/**
 * 프로그래머스 스택/큐 Level 2
 * Title: 기능 개발
 * Content: 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
 *          각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *          또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
 *          이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 *          먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때,
 *          각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
 * Input Condition: 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
 *                  작업 진도는 100 미만의 자연수입니다.
 *                  작업 속도는 100 이하의 자연수입니다.
 * Output Condition: 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
 *                   예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
 * Input Example: [93, 30, 55]
 *                [1, 30, 5]
 * Output Example: [2, 1]
 */
// Expected: 20:42 - 21:22
// Actual: 20:42 - 21:25

{
  function solution(progresses, speeds) {
    const answer = [0];
    const progressQueue = [...progresses];
    const speedsQueue = [...speeds];

    let maxPublishDay = 0;
    while (progressQueue.length > 0) {
      const progress = progressQueue.shift();
      const speed = speedsQueue.shift();
      const publishDay = Math.ceil((100 - progress) / speed);

      if (publishDay > maxPublishDay) {
        if (maxPublishDay === 0) {
          answer[0] = 1;
        } else {
          answer.push(1);
        }

        maxPublishDay = publishDay;
      } else {
        answer[answer.length - 1] += 1;
      }
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputProgresses = [95, 90, 99, 99, 80, 99];
    const inputSpeeds = [1, 1, 1, 1, 1, 1];
    const expectResult = [1, 3, 2];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputProgresses, inputSpeeds),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputProgresses = [1, 99, 10];
    const inputSpeeds = [100, 1, 90];
    const expectResult = [3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputProgresses, inputSpeeds),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P3\n");

    const inputProgresses = [93, 30, 55];
    const inputSpeeds = [1, 30, 5];
    const output = this.solution(inputProgresses, inputSpeeds);

    // test();
    console.log(
      `Input: ${inputProgresses.join(" ")}\n${inputSpeeds.join(" ")}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
