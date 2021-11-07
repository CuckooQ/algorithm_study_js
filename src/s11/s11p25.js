/**
 * Title: 124 나라의 숫자
 * Content: 124 나라가 있습니다.
 *          124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
 *          124 나라에는 자연수만 존재합니다.
 *          124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
 *          예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
 *          10진법	124 나라	10진법	124 나라
 *           1	    1	        6	     14
 *           2	    2	        7	     21
 *           3	    4	        8	     22
 *           4	    11	      9	     24
 *           5	    12	      10	   41
 *           자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
 * Input Condition: n은 500,000,000이하의 자연수 입니다.
 * Output Condition: None
 * Input Example: 1
 * Output Example: 1
 */
// *다시 풀기
// *규칙을 찾는 것이 중요한 문제다.

{
  function solution(n) {
    let answer;
    const convertedNumStr = rf();
    answer = Number(convertedNumStr);
    return answer;

    function rf(num = n, convStr = "") {
      const remained = num % 3;
      switch (remained) {
        case 1: {
          convStr = "1" + convStr;
          break;
        }
        case 2: {
          convStr = "2" + convStr;
          break;
        }
        case 0: {
          convStr = "4" + convStr;
          break;
        }
        default:
      }

      let val = Math.floor(num / 3);
      if (remained === 0) {
        val -= 1;
      }
      if (val === 0) {
        return convStr;
      }

      return rf(val, convStr);
    }
  }

  function testToExample1() {
    const testNum = 1;
    const input = 2;
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = 3;
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = 4;
    const expectResult = 11;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = 10;
    const expectResult = 41;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P25\n");

    const input = 1;
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
  }

  main();
}
