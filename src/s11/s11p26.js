/**
 * Title: 체육복
 * Content: 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
 *          다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
 *          학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 *          예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
 *          체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
 *          전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
 *          체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 전체 학생의 수는 2명 이상 30명 이하입니다.
 *                  체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 *                  여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 *                  여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
 *                  여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
 *                  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 * Output Condition: None
 * Input Example: n = 5
 *                lost = [2,4]
 *                reserve = [1,3,5]
 * Output Example: 5
 */
// Expected: 12:12 - 12:52
// Actual: 12:12 - 12:59
// *다시 풀기
// *예외 사항을 생각하는 것이 어려웠다.

{
  function getMaxCnt(n, lost, reserve) {
    let maxCnt = n - lost.length;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    reserve.forEach((reserveNum, idx) => {
      const lostNumIdx = lost.indexOf(reserveNum);
      if (lostNumIdx !== -1) {
        maxCnt++;
        lost.splice(lostNumIdx, 1);
        reserve.splice(idx, 1, NaN);
      }
    });

    lost.forEach((lostNum) => {
      const reserveNumIdx = reserve.findIndex(
        (reserveNum) => reserveNum === lostNum - 1 || reserveNum === lostNum + 1
      );

      if (reserveNumIdx !== -1) {
        maxCnt++;
        reserve.splice(reserveNumIdx, 1);
      }
    });

    return maxCnt;
  }

  function solution(n, lost, reserve) {
    const answer = getMaxCnt(n, lost, reserve);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 5;
    const inputLost = [2, 4];
    const inputReserve = [3];
    const expectResult = 4;
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputLost, inputReserve) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 3;
    const inputLost = [3];
    const inputReserve = [1];
    const expectResult = 2;
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputLost, inputReserve) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 5;
    const inputLost = [3, 4];
    const inputReserve = [2, 3];
    const expectResult = 4;
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputLost, inputReserve) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputN = 5;
    const inputLost = [1, 3, 5];
    const inputReserve = [1, 3, 5];
    const expectResult = 5;
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputLost, inputReserve) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P26\n");

    const inputN = 5;
    const inputLost = [2, 4];
    const inputReserve = [1, 3, 5];
    const output = this.solution(inputN, inputLost, inputReserve);

    // test();
    console.log(
      `Input: ${inputN}\n${inputLost.join(" ")}\n${inputReserve.join(" ")} `
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
  }

  main();
}
