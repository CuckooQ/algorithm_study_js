/**
 * Title: 방문 길이
 * Content: 게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.
 *          U: 위쪽으로 한 칸 가기
 *          D: 아래쪽으로 한 칸 가기
 *          R: 오른쪽으로 한 칸 가기
 *          L: 왼쪽으로 한 칸 가기
 *          캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다.
 *          좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.
 *          예를 들어, "ULURRDLLU"로 명령했다면
 *          1 2 3 4 5 6 7 8 9
 *          U L U R R D L L U
 *          1번 명령어부터 7번 명령어까지 다음과 같이 움직입니다.
 *                    ->->
 *                    |   |
 *                     <-<-
 *                       |
 *          8번 명령어부터 9번 명령어까지 다음과 같이 움직입니다.
 *                     |
 *                      <-
 *          이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다.
 *          예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.
 *          (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)
 *          단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.
 *          예를 들어, "LULLLLLLU"로 명령했다면
 *          1 2 3 4 5 6 7 8 9
 *          L U L L L L L L U
 *          1번 명령어부터 6번 명령어대로 움직인 후, 7, 8번 명령어는 무시합니다. 다시 9번 명령어대로 움직입니다.
 *                 |
 *                  <-<-<-<-
 *                         |
 *                         <-
 *          이때 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.
 *          명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.
 * Input Condition: dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
 *                  dirs의 길이는 500 이하의 자연수입니다.
 * Output Condition: None
 * Input Example: "ULURRDLLU"
 * Output Example: 7
 */
// Expected: 09:51 - 10:31
// Actual: 09:51 - 10:23

{
  const POINT_VAL = {
    MAX: 5,
    MIN: -5,
  };
  const COMMAND = {
    LEFT: "L",
    RIGHT: "R",
    UP: "U",
    DOWN: "D",
  };
  const POINT_IDX = {
    X: 0,
    Y: 1,
  };

  function solution(dirs) {
    let answer;

    const set = new Set();
    let befPoint = [0, 0];
    [...dirs].forEach((command) => {
      const aftPoint = [...befPoint];
      switch (command) {
        case COMMAND.UP: {
          aftPoint[POINT_IDX.Y]++;
          break;
        }
        case COMMAND.DOWN: {
          aftPoint[POINT_IDX.Y]--;
          break;
        }
        case COMMAND.LEFT: {
          aftPoint[POINT_IDX.X]--;
          break;
        }
        case COMMAND.RIGHT: {
          aftPoint[POINT_IDX.X]++;
          break;
        }
        default:
      }
      if (
        aftPoint[POINT_IDX.X] <= POINT_VAL.MAX &&
        aftPoint[POINT_IDX.Y] <= POINT_VAL.MAX &&
        aftPoint[POINT_IDX.X] >= POINT_VAL.MIN &&
        aftPoint[POINT_IDX.Y] >= POINT_VAL.MIN
      ) {
        const arr = [befPoint, aftPoint];
        arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
        set.add(arr.flat().join(" "));
        befPoint = aftPoint;
      }
    });
    answer = set.size;

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = "LULLLLLLU";
    const expectResult = 7;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P115\n");

    const input = "ULURRDLLU";
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
