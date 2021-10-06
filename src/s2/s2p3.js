/**
 * Title: 가위 바위 보
 * Content: A, B 두 사람이 가위바위보 게임을 한다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력한다. 비길 경우에는 D를 출력한다.
 *          가위바위보의 정보는 1: 가위, 2: 바위, 3: 보로 정한다.
 *          두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하기.
 * Input Condition: 첫 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어진다.
 *                  두 번째 줄에 A가 낸 가위, 바위, 보 정보가 N개 주어진다.
 *                  세 번째 줄에 B가 낸 가위, 바위, 보 정보가 N개 주어진다.
 * Output Condition: 각 줄에 각 회의 승자를 출력한다. 비겼을 경우에는 D를 출력한다.
 * Input Example: 5
 *                2 3 3 1 3
 *                1 1 2 2 3
 * Output Example: A
 *                 B
 *                 A
 *                 B
 *                 D
 */

{
  class RockScissorPaperUser {
    #selection;

    constructor(selection) {
      this.setSeleciton(selection);
    }

    isDraw(opponent) {
      return this.getSelection() === opponent.getSelection();
    }

    isWin(opponent) {
      const mySelection = this.getSelection();
      const oppSelection = opponent.getSelection();
      if (
        mySelection === this.ROCKSCISSORPAPER.SCISSOR &&
        oppSelection === this.ROCKSCISSORPAPER.PAPER
      ) {
        return true;
      } else if (
        mySelection === this.ROCKSCISSORPAPER.ROCK &&
        oppSelection === this.ROCKSCISSORPAPER.SCISSOR
      ) {
        return true;
      } else if (
        mySelection === this.ROCKSCISSORPAPER.PAPER &&
        oppSelection === this.ROCKSCISSORPAPER.ROCK
      ) {
        return true;
      } else {
        return false;
      }
    }

    isLose(opponent) {
      return !this.isDraw(opponent) && !this.isWin(opponent);
    }

    getSelection() {
      return this.#selection;
    }

    setSeleciton(selection) {
      this.#selection = selection;
    }

    ROCKSCISSORPAPER = {
      SCISSOR: 1,
      ROCK: 2,
      PAPER: 3,
    };
  }

  function getResult(aSelection, bSelection) {
    const PLAYER_A = "A";
    const PLAYER_B = "B";
    const DRAW = "D";
    aUser = new RockScissorPaperUser(aSelection);
    bUser = new RockScissorPaperUser(bSelection);
    if (aUser.isDraw(bUser)) {
      return DRAW;
    }
    if (aUser.isWin(bUser)) {
      return PLAYER_A;
    }
    if (aUser.isLose(bUser)) {
      return PLAYER_B;
    }
  }

  function solution(gameCount, aSelections, bSelections) {
    const results = [];
    for (let i = 0; i < gameCount; i++) {
      results.push(getResult(aSelections[i], bSelections[i]));
    }
    const answer = results.join("\n");
    return answer;
  }

  function testToAwin() {
    const testNum = 1;
    const inputCount = 2;
    const testFunction = solution;
    let inputAarr = [2, 2];
    let inputBarr = [1, 1];
    let expectResult = "A\nA";
    let condition =
      testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [3, 3];
    inputBarr = [2, 2];
    expectResult = "A\nA";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [1, 1];
    inputBarr = [3, 3];
    expectResult = "A\nA";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAdraw() {
    const testNum = 2;
    const inputCount = 2;
    const testFunction = solution;
    let inputAarr = [1, 1];
    let inputBarr = [1, 1];
    let expectResult = "D\nD";
    let condition =
      testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [2, 2];
    inputBarr = [2, 2];
    expectResult = "D\nD";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [3, 3];
    inputBarr = [3, 3];
    expectResult = "D\nD";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAlose() {
    const testNum = 3;
    const inputCount = 2;
    const testFunction = solution;
    let inputAarr = [1, 1];
    let inputBarr = [2, 2];
    let expectResult = "B\nB";
    let condition =
      testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [2, 2];
    inputBarr = [3, 3];
    expectResult = "B\nB";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);

    inputAarr = [3, 3];
    inputBarr = [1, 1];
    expectResult = "B\nB";
    condition = testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxGame() {
    const testNum = 4;
    const inputCount = 100;
    const inputAarr = [];
    const inputBarr = [];
    const resultArr = [];
    for (let i = 0; i < 100; i++) {
      inputAarr.push((i % 3) + 1);
      inputBarr.push((i % 3) + 1);
      resultArr.push("D");
    }
    const expectResult = resultArr.join("\n");
    const testFunction = solution;
    const condition =
      testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinGame() {
    const testNum = 5;
    const inputCount = 1;
    const inputAarr = [1];
    const inputBarr = [2];
    const expectResult = "B";
    const testFunction = solution;
    const condition =
      testFunction(inputCount, inputAarr, inputBarr) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputCount = 5;
    const inputAarr = [2, 3, 3, 1, 3];
    const inputBarr = [1, 1, 2, 2, 3];
    const output = this.solution(inputCount, inputAarr, inputBarr);

    console.log("S2P3\n");
    // test();
    console.log(
      `Input: ${inputCount}\n ${inputAarr.join(" ")}\n ${inputBarr.join(" ")}\n`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToAwin();
    testToAdraw();
    testToAlose();
    testToMaxGame();
    testToMinGame();
  }

  main();
}
