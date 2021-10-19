/**
 * 프로그래머스 정렬 Level 2
 * Title: 가장 큰 수
 * Content: 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 *          예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 *          0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: numbers의 길이는 1 이상 100,000 이하입니다.
 *                  numbers의 원소는 0 이상 1,000 이하입니다.
 * Output Condition: 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
 * Input Example: [6, 10, 2]
 * Output Example: "6210"
 */
// *다시 풀기
// *매우 오래 걸렸고 주요 조건은 참고해서 해결했다.

{
  const LIMIT_DIGIT_LEN = 4;
  const COMPARE_NUM_IDX = 0;
  const NUM_IDX = 1;

  /*
  // 내가 작성한 조건
  function isOnlyZero(numsStr) {
    for (const numStr of numsStr.split("")) {
      if (numStr !== "0") {
        return false;
      }
    }

    return true;
  }
  */
  function isOnlyZero(numsStr) {
    return numsStr[0] === "0";
  }

  /*
  // 내가 작성한 처리
  function solution(numbers) {
    let answer;

    // 이 조건을 알아채는 것이 불가능했다.
    const arr = [...numbers].map((num) => {
      let digitArr = num.toString().split("");
      while (digitArr.length < 4) {
        digitArr = [...digitArr, ...digitArr];
      }
      digitArr = digitArr.slice(0, LIMIT_DIGIT_LEN);

      return [digitArr.join(""), num];
    });

    arr.sort((a, b) => {
      if (Number(a[COMPARE_NUM_IDX]) === Number(b[COMPARE_NUM_IDX])) {
        return Number(b[NUM_IDX]) - Number(a[NUM_IDX]);
      }

      return Number(b[COMPARE_NUM_IDX]) - Number(a[COMPARE_NUM_IDX]);
    });

    const numStr = arr.map((num) => num[NUM_IDX]).join("");
    answer = isOnlyZero(numStr) ? "0" : numStr;

    return answer;
  }
  */

  // 다른 풀이 참고한 처리
  function solution(numbers) {
    let answer;

    const numStrArr = numbers.map((num) => num.toString());
    numStrArr.sort((a, b) => Number(b + a) - Number(a + b));
    const numsStr = numStrArr.join("");

    answer = isOnlyZero(numsStr) ? "0" : numsStr;

    return answer;
  }

  /*
  // 조건 통과하지 못한 처리
  function solution(numbers) {
    let answer;

    const arr = [...numbers].map((num) => {
      const numArr = num.toString().split("");
      while (numArr.length !== 4) {
        const topNum = Math.max(...numArr);
        numArr.push(topNum);
      }
      return [numArr.join(""), num];
    });

    arr.sort((a, b) => {
      if (Number(a[COMPARE_NUM_IDX]) === Number(b[COMPARE_NUM_IDX])) {
        return Number(b[NUM_IDX]) - Number(a[NUM_IDX]);
      }

      return Number(b[COMPARE_NUM_IDX]) - Number(a[COMPARE_NUM_IDX]);
    });

    const numStr = arr.map((num) => num[NUM_IDX]).join("");
    answer = Number(numStr).toString();
    return answer;
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = [3, 30, 34, 5, 9];
    const expectResult = "9534330";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [3, 333, 344, 50, 90];
    const expectResult = "90503443333";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = [0, 10, 100, 1000];
    const expectResult = "1010010000";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = [3, 333, 33, 34];
    const expectResult = "34333333";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = [43, 34, 434, 343];
    const expectResult = "4344334343";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const input = [23, 232, 21, 212];
    const expectResult = "2323221221";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const input = [0, 0, 0, 0];
    const expectResult = "0";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P7\n");

    const input = [6, 10, 2];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
    testToExample6();
    testToExample7();
  }

  main();
}
