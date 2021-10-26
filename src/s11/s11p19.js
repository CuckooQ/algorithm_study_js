/**
 * Title: [카카오 인턴] 키패드 누르기
 * Content: 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
 *          1 2 3
 *          4 5 6
 *          7 8 9
 *          * 0 #
 *          이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
 *          맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.
 *          1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
 *          2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
 *          3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
 *          4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
 *          4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
 *          순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: numbers 배열의 크기는 1 이상 1,000 이하입니다.
 *                  numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
 *                  hand는 "left" 또는 "right" 입니다.
 *                  "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
 *                  왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
 * Output Condition: None
 * Input Example: numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
 *                hand = "right"
 * Output Example: "LRLLLRLLRRL"
 */
// Expected: 11:18 - 11:58
// Actual: 11:18 - 12:13
// *20분정도 초과했다.

{
  const LEFT_HAND = "left";
  const RIGHT_HAND = "right";
  const LEFT = "L";
  const RIGHT = "R";

  function getCombOfWayOfHand(numbers, hand) {
    let comb = "";
    let recentLeft = [3, 0];
    let recentRight = [3, 2];

    numbers.forEach((num) => {
      switch (num) {
        case 1:
        case 4:
        case 7: {
          comb += LEFT;
          recentLeft = [Math.floor(num / 3), 0];
          break;
        }
        case 3:
        case 6:
        case 9: {
          comb += RIGHT;
          recentRight = [Math.floor(num / 4), 2];
          break;
        }
        case 2:
        case 5:
        case 8:
        case 0: {
          const targetIdx = num !== 0 ? [Math.floor(num / 4), 1] : [3, 1];
          const leftDistance =
            Math.abs(targetIdx[0] - recentLeft[0]) +
            Math.abs(targetIdx[1] - recentLeft[1]);
          const rightDistacne =
            Math.abs(targetIdx[0] - recentRight[0]) +
            Math.abs(targetIdx[1] - recentRight[1]);
          if (leftDistance < rightDistacne) {
            comb += LEFT;
            recentLeft = targetIdx;
          } else if (leftDistance > rightDistacne) {
            comb += RIGHT;
            recentRight = targetIdx;
          } else {
            if (hand === LEFT_HAND) {
              comb += LEFT;
              recentLeft = targetIdx;
            }
            if (hand === RIGHT_HAND) {
              comb += RIGHT;
              recentRight = targetIdx;
            }
          }
          break;
        }
        default:
      }
    });

    return comb;
  }

  function solution(numbers, hand) {
    const answer = getCombOfWayOfHand(numbers, hand);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputNumbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
    const inputHand = "left";
    const expectResult = "LRLLRRLLLRR";
    const testFunction = solution;
    const condition = testFunction(inputNumbers, inputHand) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const inputHand = "right";
    const expectResult = "LLRLLRLLRL";
    const testFunction = solution;
    const condition = testFunction(inputNumbers, inputHand) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P19\n");

    const inputNumbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
    const inputHand = "right";
    const output = this.solution(inputNumbers, inputHand);

    test();
    console.log(`Input: ${inputNumbers.join(" ")}\n${inputHand} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
