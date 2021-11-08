/**
 * Title: [1차] 프렌즈4블록
 * Content: 블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 "프렌즈4블록".
 *          같은 모양의 카카오프렌즈 블록이 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.
 *          TTTANT
 *          RRFACC
 *          RRRFCC
 *          TRRRAA
 *          TTMMMF
 *          TMMTTJ
 *          만약 판이 위와 같이 주어질 경우, R가 2×2로 배치된 7개 블록과 C가 2×2로 배치된 4개 블록이 지워진다.
 *          같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.
 *          블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.
 *          만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.
 *          각 문자는 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)을 의미한다
 *          입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작하라.
 * Input Condition: 입력으로 판의 높이 m, 폭 n과 판의 배치 정보 board가 들어온다.
 *                  2 ≦ n, m ≦ 30
 *                  board는 길이 n인 문자열 m개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.
 * Output Condition: 입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.
 * Input Example: m = 4
 *                n = 5
 *                board = ["CCBDE", "AAADE", "AAABF", "CCBBF"]
 * Output Example: 14
 */
// *다시 풀기

{
  function solution(m, n, board) {
    const answer = 0;
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputM = 6;
    const inputN = 6;
    const inputBoard = [
      "TTTANT",
      "RRFACC",
      "RRRFCC",
      "TRRRAA",
      "TTMMMF",
      "TMMTTJ",
    ];
    const expectResult = 15;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputM = 30;
    const inputN = 30;
    const inputBoard = Array.from(
      { length: 30 },
      () => "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    const expectResult = 900;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputM = 2;
    const inputN = 2;
    const inputBoard = ["AB", "CD"];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputM = 2;
    const inputN = 2;
    const inputBoard = ["ZZ", "ZZ"];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputM = 30;
    const inputN = 30;
    const inputBoard = Array.from(
      { length: 30 },
      () => "ABCDEFGHIJKLMNOPQRSTUWVXYZABCD"
    );
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const inputM = 6;
    const inputN = 5;
    const inputBoard = ["CCZXZ", "CCZXZ", "XXZXZ", "AAZAA", "AAAAA", "ZAAXX"];
    const expectResult = 15;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const inputM = 2;
    const inputN = 2;
    const inputBoard = ["AA", "AB"];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample8() {
    const testNum = 8;
    const inputM = 3;
    const inputN = 2;
    const inputBoard = ["AA", "AA", "AB"];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample9() {
    const testNum = 9;
    const inputM = 4;
    const inputN = 2;
    const inputBoard = ["CC", "AA", "AA", "CC"];
    const expectResult = 8;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample10() {
    const testNum = 10;
    const inputM = 6;
    const inputN = 2;
    const inputBoard = ["DD", "CC", "AA", "AA", "CC", "DD"];
    const expectResult = 12;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample11() {
    const testNum = 11;
    const inputM = 8;
    const inputN = 2;
    const inputBoard = ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"];
    const expectResult = 8;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample12() {
    const testNum = 12;
    const inputM = 6;
    const inputN = 2;
    const inputBoard = ["AA", "AA", "CC", "AA", "AA", "DD"];
    const expectResult = 8;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample13() {
    const testNum = 13;
    const inputM = 7;
    const inputN = 2;
    const inputBoard = ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(inputM, inputN, inputBoard) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P63\n");

    const inputM = 4;
    const inputN = 5;
    const inputBoard = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
    const output = this.solution(inputM, inputN, inputBoard);

    // test();
    console.log(`Input: ${inputM} ${inputN}\n${inputBoard.join("\n")}`);
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
    testToExample13();
  }

  main();
}
