/**
 * Title: 소수 찾기
 * Content: 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 *          소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 *          (1은 소수가 아닙니다.)
 * Input Condition: n은 2이상 1000000이하의 자연수입니다.
 * Output Condition: None
 * Input Example: 10
 * Output Example: 4
 */
// *다시 풀기
// 에라토스테네스의 체를 이용하면 다수의 소수를 빠르게 구할 수 있다.

{
  // 어째서인지 배열이 아닌 셋을 사용하면 시간초과가 발생한다.
  // 배열을 사용해서 인덱스를 수로 사용하는 경우에는 값의 크기는 변하지 않지만, 셋을 사용하는 경우네는 값의 크기가 해당 수만큼 커지기 때문인 것으로 보인다.
  function solution(n) {
    let answer = 0;

    // 소수를 판별할 수가 인덱스이고 소수인지를 나타내는 기본값 true를 설정
    const arr = [];
    for (let i = 2; i <= n; i++) {
      arr[i] = true;
    }

    // 배수인 소수가 아닌 수 인덱스의 값을 false로 설정
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (arr[i]) {
        let weight = 2;
        while (i * weight <= n) {
          arr[i * weight] = false;
          weight++;
        }
      }
    }

    answer = arr.filter((isPrimeNum) => isPrimeNum === true).length;

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = 5;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P84\n");

    const input = 10;
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
