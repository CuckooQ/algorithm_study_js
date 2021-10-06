/**
 * Title: 큰 수 출력하기
 * Content: N(1<=N<=100)개의 정수를 입력받아서, 자신의 바로 앞 수보다 큰 수만 출력하기.
 * Input Condition: 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
 * Output Condition: 자신의 바로 앞 수보다 큰 수만 출력한다.
 * Input Example: 6
 *                7 3 9 5 6 12
 * Output Example: 7 9 6 12
 */

{
  function filterToBiggerThanBeforeVal(arr) {
    let beforeNum = Number.MIN_SAFE_INTEGER;
    const filteredArr = [];
    arr.forEach((num) => {
      if (num > beforeNum) {
        filteredArr.push(num);
      }
      beforeNum = num;
    });

    return filteredArr;
  }

  function solution(arr) {
    const filteredArr = filterToBiggerThanBeforeVal(arr);
    const answer = filteredArr.join(" ");
    return answer;
  }

  function testToMaxCount() {
    const testNum = 1;
    const input = [];
    for (let i = 0; i < 100; i++) {
      input.push(i);
    }
    const expectResult = input.join(" ");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinCount() {
    const testNum = 2;
    const input = [];
    const expectResult = "";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToSerialArr() {
    const testNum = 3;
    const input = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const expectResult = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToReverseSerialArr() {
    const testNum = 4;
    const input = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ];
    const expectResult = "20";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputCount = 6;
    const inputArr = [7, 3, 9, 5, 6, 12];
    const output = this.solution(inputArr);

    console.log("S2P1\n");
    // test();
    console.log(`Input: ${inputCount}\n ${inputArr.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxCount();
    testToMinCount();
    testToSerialArr();
    testToReverseSerialArr();
  }

  main();
}
