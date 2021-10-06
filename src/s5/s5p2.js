/**
 * Title: 공통원소 구하기
 * Content: A, B 두 개의 집합이 주어지면, 두 집합의 공통 원소를 추출하여 오름차순으로 출력하기.
 * Input Condition: 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어진다.
 *                  두 번째 줄에 N개의 원소가 주어진다. 원소가 중복되어 주어지지 않는다.
 *                  세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어진다.
 *                  네 번째 줄에 M개의 원소가 주어진다. 원소가 중복되어 주어지지 않는다.
 *                  각 집합의 원소는 1,000,000,000이하의 자연수이다.
 * Output Condition: 두 집합의 공통원소를 오름차순으로 정렬하여 출력한다.
 * Input Example: 5
 *                1 3 9 5 2
 *                5
 *                3 2 5 7 8
 * Output Example:  2 3 5
 */
// *투 포인터 알고리즘 복습을 위해 다시 풀기.
// *투 포인터 알고리즘을 사용한 함수가 그렇지않은 함수보다 더 빨랐다.

{
  const MAX_LENGTH = 30_000;
  const MIN_LENGTH = 1;

  // Two Pointer Algorithm으로 구현한 함수 O(n+m)
  function getSameNumbers(firstNumbers, secondNumbers) {
    const sameNums = [];
    let firstIdx = 0;
    let secondIdx = 0;
    while (firstIdx < firstNumbers.length || secondIdx < secondNumbers.length) {
      if (firstNumbers[firstIdx] > secondNumbers[secondIdx]) {
        secondIdx++;
      } else if (firstNumbers[firstIdx] === secondNumbers[secondIdx]) {
        sameNums.push(firstNumbers[firstIdx]);
        firstIdx++;
        secondIdx++;
      } else if (firstNumbers[firstIdx] < secondNumbers[secondIdx]) {
        firstIdx++;
      } else {
        if (firstIdx >= firstNumbers.length) {
          secondIdx++;
        }
        if (secondIdx >= secondNumbers.length) {
          firstIdx++;
        }
      }
    }
    return sameNums;
  }
  /*
    function getSameNumbers(firstNumbers, secondNumbers) {
        const sameNums = [];
        firstNumbers.filter((num)=> {
            const idx = secondNumbers.indexOf(num);
            if (idx !== -1) {
                sameNums.push(secondNumbers[idx]);
                secondNumbers.splice(idx, 1);
            };
        })
        return sameNums;
    }
    */
  function getSameNumbersAsc(firstNumbers, secondNumbers) {
    const sortedFirstNumbers = Array.from(firstNumbers).sort(
      (bef, aft) => bef - aft
    );
    const sortedSecondNumbers = Array.from(secondNumbers).sort(
      (bef, aft) => bef - aft
    );

    return getSameNumbers(sortedFirstNumbers, sortedSecondNumbers);
  }

  function solution(firstNumbers, secondNumbers) {
    let answer;
    const sameNums = getSameNumbersAsc(firstNumbers, secondNumbers);
    answer = sameNums.join(" ");
    return answer;
  }

  function testToMaxLen() {
    const testNum = 1;
    const inputFirstNums = [];
    const inputSecondNums = [];
    for (let i = 1; i <= MAX_LENGTH; i++) {
      inputFirstNums.push(2 * i);
      inputSecondNums.push(2 * i - 1);
    }
    const result = [];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinLen() {
    const testNum = 2;
    const inputFirstNums = [];
    const inputSecondNums = [];
    for (let i = 1; i <= MIN_LENGTH; i++) {
      inputFirstNums.push(2 * i);
      inputSecondNums.push(2 * i - 1);
    }
    const result = [];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllEqualNumbers() {
    const testNum = 3;
    const inputFirstNums = [5, 10, 15, 20, 25, 30];
    const inputSecondNums = [5, 10, 15, 20, 25, 30];
    const result = [5, 10, 15, 20, 25, 30];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllDiffNumbers() {
    const testNum = 3;
    const inputFirstNums = [5, 10, 15, 20, 25, 30];
    const inputSecondNums = [4, 8, 12, 18, 1, 32];
    const result = [];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToFirstLonggerThanSecond() {
    const testNum = 4;
    const inputFirstNums = [5, 10, 15, 30];
    const inputSecondNums = [4, 8, 12, 15, 18, 1];
    const result = [15];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToFirstShorterThanSecond() {
    const testNum = 5;
    const inputFirstNums = [4, 8, 12, 15, 18, 1];
    const inputSecondNums = [5, 10, 15, 30];
    const result = [15];
    const expectResult = result.join(" ");
    const testFunction = solution;
    const condition =
      testFunction(inputFirstNums, inputSecondNums) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputFirstNumbers = [1, 3, 9, 5, 2];
    const inputSecondNumbers = [3, 2, 5, 7, 8];
    const output = this.solution(inputFirstNumbers, inputSecondNumbers);

    console.log("S5P2\n");
    // test();
    console.log(
      `Input: ${inputFirstNumbers.join(" ")}\n ${inputSecondNumbers.join(" ")}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxLen();
    testToMinLen();
    testToAllEqualNumbers();
    testToFirstLonggerThanSecond();
    testToFirstShorterThanSecond();
  }

  main();
}
