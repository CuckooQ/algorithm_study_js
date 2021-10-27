/**
 * Title: N으로 표현
 * Content: 아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.
 *          12 = 5 + 5 + (5 / 5) + (5 / 5)
 *          12 = 55 / 5 + 5 / 5
 *          12 = (55 + 5) / 5
 *          5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
 *          이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.
 * Input Condition: N은 1 이상 9 이하입니다.
 *                  number는 1 이상 32,000 이하입니다.
 *                  수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
 *                  최솟값이 8보다 크면 -1을 return 합니다.
 * Output Condition: None
 * Input Example: n = 5
 *                number = 12
 * Output Example: 4
 */
// Expected: 13:03 - 13:43
// Actual: 13:03 - 13:47
// *다시 풀기
// *어렵다.
// *다른 사람 풀이들은 DP로 되어있는데, DP로는 못 풀겠다.

{
  function getMinCnt(n, number) {
    let minCnt = -1;
    let tmpCnt = Number.MAX_SAFE_INTEGER;
    const len = number.toString().length;
    dfs();

    if (tmpCnt <= 8) {
      minCnt = tmpCnt;
    }

    return minCnt;

    function dfs(sum = 0, cnt = 0, digitArr = [], arithOp) {
      if (cnt > 8) {
        return;
      }

      if (arithOp) {
        const num = Number(digitArr.join(""));
        switch (arithOp) {
          case "+": {
            sum += num;
            break;
          }
          case "-": {
            sum -= num;
            break;
          }
          case "*": {
            sum *= num;
            break;
          }
          case "/": {
            Math.floor((sum /= num));
            break;
          }
          default:
        }
      }

      if (sum === number) {
        if (cnt < tmpCnt) {
          tmpCnt = cnt;
        }
      }

      digitArr = [];
      for (let i = 0; i < len; i++) {
        digitArr.push(n);
        dfs(sum, cnt + digitArr.length, [...digitArr], "+");
        dfs(sum, cnt + digitArr.length, [...digitArr], "-");
        dfs(sum, cnt + digitArr.length, [...digitArr], "*");
        dfs(sum, cnt + digitArr.length, [...digitArr], "/");
      }
    }
  }

  function solution(n, number) {
    const answer = getMinCnt(n, number);
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputN = 2;
    const inputNumber = 11;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputN, inputNumber) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P27\n");

    const inputN = 5;
    const inputNumber = 12;
    const output = this.solution(inputN, inputNumber);

    // test();
    console.log(`Input: ${inputN} ${inputNumber} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
