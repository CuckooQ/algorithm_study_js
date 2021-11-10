/**
 * Title: 조이스틱
 * Content: 조이스틱으로 알파벳 이름을 완성하세요.
 *          맨 처음엔 A로만 이루어져 있습니다.
 *          ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA
 *          조이스틱을 각 방향으로 움직이면 아래와 같습니다.
 *          ▲ - 다음 알파벳
 *          ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 *          ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 *          ▶ - 커서를 오른쪽으로 이동
 *          예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.
 *          - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
 *          - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
 *          - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
 *          따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
 *          만들고자 하는 이름 name이 매개변수로 주어질 때,
 *          이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.
 * Input Condition: name은 알파벳 대문자로만 이루어져 있습니다.
 *                  name의 길이는 1 이상 20 이하입니다.
 * Output Condition: None
 * Input Example: "JEROEN"
 * Output Example: 56
 */
// *다시 풀기
// *거꾸로 가는 경우의 횟수 찾는 처리를 구현하는 것이 어려웠다.
// *시간 초과가 발생하지 않게 하기위해 버튼을 누르는 처리를 반복문으로 여러번 처리하는 것이 아닌,
//  매개변수로 횟수를 줘서 처리했다.

{
  const A_CODE = 65;
  const Z_CODE = 90;

  class Controller {
    constructor(name) {
      this.moveCnt = 0;
      this.idxNow = 0;
      this.goalName = name;
      this.codes = Array.from({ length: name.length }, () => A_CODE);
    }

    pushUp(n) {
      this.codes[this.idxNow] = this.codes[this.idxNow] + n;
      this.moveCnt += n;
    }

    pushDown(n) {
      this.codes[this.idxNow] =
        this.codes[this.idxNow] !== A_CODE
          ? this.codes[this.idxNow] - n
          : Z_CODE - n + 1;
      this.moveCnt += n;
    }

    pushLeft(n) {
      this.idxNow =
        this.idxNow - n >= 0 ? this.idxNow - n : this.codes.length - n;
      this.moveCnt += n;
    }

    pushRight(n) {
      this.idxNow =
        this.idxNow + n < this.codes.length
          ? this.idxNow + n
          : this.codes.length - 1;
      this.moveCnt += n;
    }

    getName() {
      return this.codes
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
    }

    moveToNextIdx() {
      // 정방향 경우의 횟수
      let rightMoveCnt = [...this.codes]
        .slice(this.idxNow)
        .findIndex(
          (code, idx) =>
            this.goalName[this.idxNow + idx] !== String.fromCharCode(A_CODE) &&
            code === A_CODE
        );
      rightMoveCnt =
        rightMoveCnt !== -1 ? rightMoveCnt : Number.MAX_SAFE_INTEGER;

      // 역방향 경우의 횟수 (여기가 제일 어려웠다)
      let leftMoveCnt = -1;
      let cnt = 0;
      for (let i = this.idxNow; i >= 0; i--) {
        if (
          this.codes[i] === A_CODE &&
          this.goalName[i] !== String.fromCharCode(A_CODE)
        ) {
          leftMoveCnt += cnt + 1;
          break;
        }
        cnt++;
      }
      if (leftMoveCnt === -1) {
        let cnt = 0;
        for (let i = this.codes.length - 1; i >= this.idxNow; i--) {
          cnt++;
          if (
            this.codes[i] === A_CODE &&
            this.goalName[i] !== String.fromCharCode(A_CODE)
          ) {
            leftMoveCnt += cnt + 1;
            break;
          }
        }
        leftMoveCnt =
          leftMoveCnt !== -1
            ? this.idxNow + leftMoveCnt
            : Number.MAX_SAFE_INTEGER;
      }

      if (rightMoveCnt <= leftMoveCnt) {
        this.pushRight(rightMoveCnt);
      } else {
        this.pushLeft(leftMoveCnt);
      }
    }

    makeNameChar() {
      const goalCharCode = this.goalName[this.idxNow].charCodeAt(0);

      const upDiff = Math.abs(goalCharCode - A_CODE);
      const downDiff = Math.abs(goalCharCode - Z_CODE);
      if (upDiff > downDiff) {
        this.pushDown(downDiff + 1);
      } else {
        this.pushUp(upDiff);
      }
    }

    createName() {
      while (this.getName() !== this.goalName) {
        // A가 아닌 인덱스로 이동하기
        this.moveToNextIdx();
        // 문자 만들기
        this.makeNameChar();
      }
    }
  }

  function getMinCntOfControl(name) {
    let cnt;

    const controller = new Controller(name);
    controller.createName();
    cnt = controller.moveCnt;

    return cnt;
  }

  function solution(name) {
    const answer = getMinCntOfControl(name);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "JAN";
    const expectResult = 23;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "ZAAAZZZZZZZ";
    const expectResult = 15;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P45\n");

    const input = "JEROEN";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
