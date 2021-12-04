/**
 * Title: 튜플
 * Content: 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다.
 *          n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.
 *          (a1, a2, a3, ..., an)
 *          튜플은 다음과 같은 성질을 가지고 있습니다.
 *          1. 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
 *          2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
 *          3. 튜플의 원소 개수는 유한합니다.
 *          원소의 개수가 n개이고, 중복되는 원소가 없는 튜플 (a1, a2, a3, ..., an)이 주어질 때(단, a1, a2, ..., an은 자연수),
 *          이는 다음과 같이 집합 기호 '{', '}'를 이용해 표현할 수 있습니다.
 *          * {{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}
 *          예를 들어 튜플이 (2, 1, 3, 4)인 경우 이는
 *          * {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
 *          와 같이 표현할 수 있습니다. 이때, 집합은 원소의 순서가 바뀌어도 상관없으므로
 *          * {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
 *          * {{2, 1, 3, 4}, {2}, {2, 1, 3}, {2, 1}}
 *          * {{1, 2, 3}, {2, 1}, {1, 2, 4, 3}, {2}}
 *          는 모두 같은 튜플 (2, 1, 3, 4)를 나타냅니다.
 *          특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: s의 길이는 5 이상 1,000,000 이하입니다.
 *                  s는 숫자와 '{', '}', ',' 로만 이루어져 있습니다.
 *                  숫자가 0으로 시작하는 경우는 없습니다.
 *                  s는 항상 중복되는 원소가 없는 튜플을 올바르게 표현하고 있습니다.
 *                  s가 표현하는 튜플의 원소는 1 이상 100,000 이하인 자연수입니다.
 *                  return 하는 배열의 길이가 1 이상 500 이하인 경우만 입력으로 주어집니다.
 * Output Condition: None
 * Input Example: "{{2},{2,1},{2,1,3},{2,1,3,4}}"
 * Output Example: [2, 1, 3, 4]
 */
// Expected: 13:32 - 14:12
// Actual: 13:32 - 14:08

{
  function solution(s) {
    let answer;

    // 가장 왼쪽 오른쪽 중괄호 자르기
    s = s.substring(1);
    s = s.substring(0, s.length - 1);

    // 집합들의 문자열을 숫자로만 이루어진 배열로 변환
    const splittedS = s.split("},");
    const arr = splittedS.map((s) => {
      let idx = s.indexOf("{");
      s = idx !== -1 ? s.slice(idx + 1) : s;
      idx = s.indexOf("}");
      s = idx !== -1 ? s.slice(0, idx) : s;
      return s.split(",").map((c) => Number(c));
    });

    // 개수의 오름차순으로 정렬하고 중복 요소 제거
    arr.sort((a, b) => a.length - b.length);
    answer = [...new Set(arr.flat())];

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
    const expectResult = [2, 1, 3, 4];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "{{20,111},{111}}";
    const expectResult = [111, 20];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "{{123}}";
    const expectResult = [123];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
    const expectResult = [3, 2, 4, 1];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P133\n");

    const input = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
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
