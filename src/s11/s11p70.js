/**
 * Title: 이중우선순위큐
 * Content: 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
 *          명령어	 수신 탑(높이)
 *          I 숫자   큐에 주어진 숫자를 삽입합니다.
 *          D 1	     큐에서 최댓값을 삭제합니다.
 *          D -1   	 큐에서 최솟값을 삭제합니다.
 *          이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때,
 *          모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.
 * Input Condition: operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
 *                  operations의 원소는 큐가 수행할 연산을 나타냅니다.
 *                  원소는 “명령어 데이터” 형식으로 주어집니다.
 *                  - 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
 *                  빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
 * Output Condition: None
 * Input Example: operations = ["I 16","D 1"]
 * Output Example: [0, 0]
 */
// Expected: 11:03 - 11:43
// Actual: 11:03 - 11:20

{
  const COMMAND = {
    INSERT: "I",
    DELETE: "D",
  };

  class Operator {
    constructor() {
      this.queue = [];
    }

    translate(operations) {
      operations.forEach((operation) => {
        const [command, numStr] = operation.split(" ");
        const num = Number(numStr);
        switch (command) {
          case COMMAND.INSERT: {
            this.queue.push(num);
            this.queue.sort((a, b) => b - a);
            break;
          }
          case COMMAND.DELETE: {
            if (num === 1) {
              this.queue.shift();
            }
            if (num === -1) {
              this.queue.pop();
            }
            break;
          }
          default:
        }
      });
    }

    getResult() {
      if (this.queue.length === 0) {
        return [0, 0];
      }

      return [this.queue[0], this.queue[this.queue.length - 1]];
    }
  }

  function solution(operations) {
    let answer;

    const operator = new Operator();
    operator.translate(operations);
    answer = operator.getResult();
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = ["I 7", "I 5", "I -5", "D -1"];
    const expectResult = [7, 5];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P70\n");

    const input = ["I 16", "D 1"];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
