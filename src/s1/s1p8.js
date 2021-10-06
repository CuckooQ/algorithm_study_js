/**
 * Title: 일곱 난쟁이
 * Content: 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
 *          일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉명이었던 것이다.
 *          아홉 명의 난쟁이는 모두 자신이 '백설 공주와 일곱 난쟁이'의 주인공이라고 주장했다.
 *          뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해냈다.
 *          아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾기.
 * Input Condition: 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다.
 *                  주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르다.
 *                  가능한 정답이 여러 가지인 경우에는 임의로 출력.
 * Output Condition: 입력된 순서대로 일곱 난쟁이의 키 출력.
 * Input Example: 20
 *                7
 *                23
 *                19
 *                10
 *                15
 *                25
 *                8
 *                13
 * Output Example: 20 7 23 19 10 8 13
 */
// *다시 풀기

{
  // 난쟁이 수가 올바른 지 확인
  function validateHeights(heights) {
    const HEIGHT_COUNT = 7;
    return heights.length === HEIGHT_COUNT;
  }

  function testValidateHeights() {
    const testNum = 1;
    const testFunction = validateHeights;
    let input = [1, 2, 3, 4, 5, 6, 7];
    let expectResult = true;
    let condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);

    input = [1, 2, 3, 4, 5];
    expectResult = false;
    condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  // 난쟁이 필터링
  function filterHeights(heights, maxHeight) {
    const allSum = sum(heights);
    for (let i = 0; i < heights.length - 1; i++) {
      for (let j = i + 1; j < heights.length; j++) {
        if (allSum - (heights[i] + heights[j]) === maxHeight) {
          heights.splice(j, 1);
          heights.splice(i, 1);
        }
      }
    }

    return heights;
  }

  function testFilterHeights() {
    const testNum = 2;
    const testFunction = filterHeights;
    const input1 = [1, 2, 3, 4, 5, 6];
    const input2 = 10;
    const expectResult = [1, 2, 3, 4];
    const result = testFunction(input1, input2);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  // 총 키와 일치하는 난쟁이들 출력
  function getFromHeightsToMaxHeight(heights, maxHeight) {
    const filteredHeights = filterHeights(heights, maxHeight);
    if (!validateHeights(heights)) {
      return [];
    }

    return filteredHeights;
  }

  function testGetFromHeightsToMaxHeight() {
    const testNum = 3;
    const testFunction = getFromHeightsToMaxHeight;
    let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 36];
    let input2 = 35;
    let expectResult = [2, 3, 4, 5, 6, 7, 8];
    let result = testFunction(input1, input2);
    let condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);

    input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    input2 = 10;
    expectResult = [];
    result = testFunction(input1, input2);
    condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  function solution(
    height1,
    height2,
    height3,
    height4,
    height5,
    height6,
    height7,
    height8,
    height9
  ) {
    const MAX_HEIGHT_SUM = 100;
    const heights = [
      height1,
      height2,
      height3,
      height4,
      height5,
      height6,
      height7,
      height8,
      height9,
    ];
    let answer = getFromHeightsToMaxHeight(heights, MAX_HEIGHT_SUM);
    answer = changeArrToStrForPrinting(answer);
    return answer;
  }

  function main() {
    const input1 = 20;
    const input2 = 7;
    const input3 = 23;
    const input4 = 19;
    const input5 = 10;
    const input6 = 15;
    const input7 = 25;
    const input8 = 8;
    const input9 = 13;
    const output = this.solution(
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      input9
    );
    console.log("S1P8\n");
    // test();
    console.log(
      `Input: ${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8} ${input9}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testValidateHeights();
    testFilterHeights();
    testGetFromHeightsToMaxHeight();
  }

  main();
}
