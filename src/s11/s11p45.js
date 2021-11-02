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

{
  function getMinCntOfControl() {
    return 0;
  }

  /*
  // 60점 처리, 테스트4,7,8,11 실패
  const A_CODE = 65;
  const Z_CODE = 90;

  class Controller {
    constructor(len) {
      this.idxNow = 0;
      this.nameArr = Array.from({ length: len }, () => A_CODE);
    }

    pushUp() {
      this.nameArr[this.idxNow] =
        this.nameArr[this.idxNow] !== Z_CODE
          ? this.nameArr[this.idxNow] + 1
          : A_CODE;
    }

    pushDown() {
      this.nameArr[this.idxNow] =
        this.nameArr[this.idxNow] !== A_CODE
          ? this.nameArr[this.idxNow] - 1
          : Z_CODE;
    }

    pushLeft() {
      this.idxNow =
        this.idxNow !== 0 ? this.idxNow - 1 : this.nameArr.length - 1;
    }

    pushRight() {
      this.idxNow =
        this.idxNow !== this.nameArr.length - 1 ? this.idxNow + 1 : this.idxNow;
    }

    getName() {
      return this.nameArr
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
    }
  }

  function setCharWithController(name, idx, controller) {
    let cnt = 0;

    const charCode = name[idx].charCodeAt(0);
    if (charCode === A_CODE) {
      return cnt;
    }

    if (Math.abs(idx - controller.idxNow) > Math.floor(name.length / 2)) {
      while (idx !== controller.idxNow) {
        if (idx - controller.idxNow > 0) {
          controller.pushLeft();
        } else {
          controller.pushRight();
        }
        cnt++;
      }
    } else {
      while (idx !== controller.idxNow) {
        if (idx - controller.idxNow > 0) {
          controller.pushRight();
        } else {
          controller.pushLeft();
        }
        cnt++;
      }
    }

    if (charCode > Math.floor((A_CODE + Z_CODE) / 2)) {
      while (controller.nameArr[idx] !== charCode) {
        controller.pushDown();
        cnt++;
      }
    } else {
      while (controller.nameArr[idx] !== charCode) {
        controller.pushUp();
        cnt++;
      }
    }

    return cnt;
  }

  function getNextCharIdx(name, selectedIdxes, controller) {
    let nextIdx = 0;
    const idxFromFirst = [...name].findIndex((char, idx) => {
      return !selectedIdxes.includes(idx) && char.charCodeAt(0) !== A_CODE;
    });
    const idxFromLast = [...name]
      .map((char, idx) => {
        return !selectedIdxes.includes(idx) && char.charCodeAt(0) !== A_CODE;
      })
      .lastIndexOf(true);
    if (
      Math.abs(idxFromFirst - controller.idxNow) <=
      Math.abs(idxFromLast - controller.idxNow)
    ) {
      nextIdx = idxFromFirst;
    } else {
      nextIdx = idxFromLast;
    }

    return nextIdx;
  }

  function getMinCntOfControl(name) {
    let cnt = 0;

    const controller = new Controller(name.length);
    const selectedIdxes = [];

    while (name !== controller.getName()) {
      const nextIdx = getNextCharIdx(name, selectedIdxes, controller);
      cnt += setCharWithController(name, nextIdx, controller);
      selectedIdxes.push(nextIdx);
    }

    return cnt;
  }
  */

  function solution(name) {
    const answer = getMinCntOfControl(name);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "JAN";
    const expectResult = 23;
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
    testToExample();
  }

  main();
}
