/**
 * 프로그래머스 정렬 Level 2
 * Title: H-Index
 * Content: H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.
 *          어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
 *          위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
 *          어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 *          어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
 *                  논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
 * Output Condition: None
 * Input Example: [3, 0, 6, 1, 5]
 * Output Example: 3
 */
// Expected: 14:00 - 14:40
// Actual: 14:00 -15:00
// *다시 풀기
// *문제를 잘 못 이해했다.

{
  // 다른 사람의 풀이 (간단함)
  function solution(citations) {
    let answer = 0;

    const sortedCitations = citations.sort((a, b) => b - a);

    let cnt = 0;
    while (cnt + 1 <= sortedCitations[cnt]) {
      cnt++;
    }

    answer = cnt;

    return answer;
  }

  /*
  // 내가 작성한 처리 (DP)
  // d를 결국 사용할 필요가 없었다...
  function solution(citations) {
    let answer = 0;

    const d = Array.from({ length: citations.length }, () => 0);

    for (let i = 0; i < citations.length + 1; i++) {
      let cnt = 0;
      for (const citation of citations) {
        if (citation >= i) {
          cnt++;
        }
      }

      if (cnt < i) {
        answer = i - 1;
        break;
      } else {
        d[i] = cnt;
        answer = i;
      }
    }

    return answer;
  }
  */

  /*
  // 문제를 잘 못 이해한 처리 (Two Pointer)
  function solution(citations) {
    let answer = 0;

    const sortedCitations = [...citations.sort((a, b) => a - b)];

    let firstIdx = 0;
    let lastIdx = sortedCitations.length - 1;
    let midIdx;

    if (citations.length === 1) {
      if (sortedCitations[firstIdx] <= 1) {
        answer = sortedCitations[firstIdx];
      }
    } else if (citations.length === 2) {
      if (sortedCitations[lastIdx] <= 1) {
        answer = sortedCitations[lastIdx];
      } else {
        answer = sortedCitations[firstIdx];
      }
    } else {
      while (firstIdx < lastIdx) {
        midIdx = Math.floor((firstIdx + lastIdx) / 2);
        const midCitation = sortedCitations[midIdx];

        if (midCitation > sortedCitations.length - midIdx) {
          lastIdx = midIdx - 1;
        } else {
          firstIdx = midIdx + 1;

          if (midCitation > answer) {
            answer = midCitation;
          }
        }
      }
    }

    return answer;
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = [1, 2];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [2, 2];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = [1, 0];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = [0];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = [2];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const input = [1000, 999, 998, 997, 5];
    const expectResult = 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const input = [3, 5, 7, 9, 11, 13, 15, 17, 19];
    const expectResult = 7;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample8() {
    const testNum = 8;
    const input = [4, 4, 4, 4, 4, 4, 4, 4, 4];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample9() {
    const testNum = 9;
    const input = [9, 9, 9, 9];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample10() {
    const testNum = 10;
    const input = Array.from({ length: 1000 }, (_, idx) => idx);
    const expectResult = 500;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample11() {
    const testNum = 11;
    const input = [3, 3, 3, 4, 5];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample12() {
    const testNum = 12;
    const input = [3, 6, 3, 4, 5, 9];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample13() {
    const testNum = 13;
    const input = [3, 1, 1, 1, 4];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P8\n");

    const input = [3, 0, 6, 1, 5];
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
    testToExample8();
    testToExample9();
    testToExample10();
    testToExample11();
    testToExample12();
  }

  main();
}
