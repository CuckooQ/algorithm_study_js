/**
 * Title: 아이템 줍기
 * Content: 문제의 그림과 같은 다각형 모양 지형에서 캐릭터가 아이템을 줍기 위해 이동하려 합니다.
 *          지형은 각 변이 x축, y축과 평행한 직사각형이 겹쳐진 형태로 표현하며, 캐릭터는 이 다각형의 둘레(굵은 선)를 따라서 이동합니다.
 *          만약 직사각형을 겹친 후 다음과 같이 중앙에 빈 공간이 생기는 경우, 다각형의 가장 바깥쪽 테두리가 캐릭터의 이동 경로가 됩니다.
 *          단, 서로 다른 두 직사각형의 x축 좌표 또는 y축 좌표가 같은 경우는 없습니다.
 *          서로 다른 두 직사각형이 꼭짓점에서 만나거나, 변이 겹치는 경우 등은 없습니다.
 *          지형이 2개 이상으로 분리된 경우도 없습니다.
 *          한 직사각형이 다른 직사각형 안에 완전히 포함되는 경우 또한 없습니다.
 *          지형을 나타내는 직사각형이 담긴 2차원 배열 rectangle, 초기 캐릭터의 위치 characterX, characterY, 아이템의 위치 itemX, itemY가 solution 함수의 매개변수로 주어질 때,
 *          캐릭터가 아이템을 줍기 위해 이동해야 하는 가장 짧은 거리를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: rectangle의 세로(행) 길이는 1 이상 4 이하입니다.
 *                  rectangle의 원소는 각 직사각형의 [좌측 하단 x, 좌측 하단 y, 우측 상단 x, 우측 상단 y] 좌표 형태입니다.
 *                  직사각형을 나타내는 모든 좌표값은 1 이상 50 이하인 자연수입니다.
 *                  서로 다른 두 직사각형의 x축 좌표, 혹은 y축 좌표가 같은 경우는 없습니다.
 *                  문제에 주어진 조건에 맞는 직사각형만 입력으로 주어집니다.
 *                  charcterX, charcterY는 1 이상 50 이하인 자연수입니다.
 *                  지형을 나타내는 다각형 테두리 위의 한 점이 주어집니다.
 *                  itemX, itemY는 1 이상 50 이하인 자연수입니다.
 *                  지형을 나타내는 다각형 테두리 위의 한 점이 주어집니다.
 *                  캐릭터와 아이템의 처음 위치가 같은 경우는 없습니다.
 * Output Condition: None
 * Input Example: rectangle = [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]]
 *                characterX = 1
 *                characterY = 8
 *                itemX = 7
 *                itemY = 8
 * Output Example: 17
 */
// *다시 풀기

{
  function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = Number.MAX_SAFE_INTEGER;
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputRectangle = [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ];
    const inputCharacterX = 9;
    const inputCharacterY = 7;
    const inputItemX = 6;
    const inputItemY = 1;
    const expectResult = 11;
    const testFunction = solution;
    const condition =
      testFunction(
        inputRectangle,
        inputCharacterX,
        inputCharacterY,
        inputItemX,
        inputItemY
      ) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputRectangle = [[1, 1, 5, 7]];
    const inputCharacterX = 1;
    const inputCharacterY = 1;
    const inputItemX = 4;
    const inputItemY = 7;
    const expectResult = 9;
    const testFunction = solution;
    const condition =
      testFunction(
        inputRectangle,
        inputCharacterX,
        inputCharacterY,
        inputItemX,
        inputItemY
      ) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputRectangle = [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ];
    const inputCharacterX = 3;
    const inputCharacterY = 1;
    const inputItemX = 7;
    const inputItemY = 10;
    const expectResult = 15;
    const testFunction = solution;
    const condition =
      testFunction(
        inputRectangle,
        inputCharacterX,
        inputCharacterY,
        inputItemX,
        inputItemY
      ) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputRectangle = [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ];
    const inputCharacterX = 1;
    const inputCharacterY = 4;
    const inputItemX = 6;
    const inputItemY = 3;
    const expectResult = 10;
    const testFunction = solution;
    const condition =
      testFunction(
        inputRectangle,
        inputCharacterX,
        inputCharacterY,
        inputItemX,
        inputItemY
      ) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P91\n");

    const inputRectangle = [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ];
    const inputCharacterX = 1;
    const inputCharacterY = 3;
    const inputItemX = 7;
    const inputItemY = 8;
    const output = this.solution(
      inputRectangle,
      inputCharacterX,
      inputCharacterY,
      inputItemX,
      inputItemY
    );

    // test();
    console.log(
      `Input: ${inputRectangle.join(
        "\n"
      )}\n${inputCharacterX} ${inputCharacterY}\n${inputItemX} ${inputItemY}`
    );
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
