/**
 * Title: 자물쇠와 열쇠
 * Content: 고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다.
 *          그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고,
 *          문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.
 *          잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고,
 *          특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.
 *          자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다.
 *          열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다.
 *          자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만,
 *          자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다.
 *          또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
 *          열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때,
 *          열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
 *                  lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
 *                  M은 항상 N 이하입니다.
 *                  key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
 *                  0은 홈 부분, 1은 돌기 부분을 나타냅니다.
 * Output Condition: None
 * Input Example: key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
 *                lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
 * Output Example: true
 */
// *다시 풀기
// *2차원 배열 활용이 중요한 문제였다.

{
  class Key {
    constructor(key) {
      this.key = key;
    }

    rotate() {
      // 시계방향으로 90도 회전
      const len = this.key.length;
      const ret = Array.from({ length: len }, () =>
        Array.from({ length: len }, () => 0)
      );
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          ret[i][j] = this.key[len - j - 1][i];
        }
      }
      this.key = ret;
    }
  }

  function isFit(area, len) {
    // 영역에서 가운데 부분만 탐색
    for (let i = len; i < len * 2; i++) {
      for (let j = len; j < len * 2; j++) {
        // 1: 일치 (0: 맞지 않음, 2: 돌기의 중복)
        if (area[i][j] !== 1) {
          return false;
        }
      }
    }
    return true;
  }

  function canUnlock(key, lock) {
    const myKey = new Key(key);
    const originalLockLen = lock.length;

    // 원래 자물쇠보다 3배 큰 영역을 생성하고, 가운데 영역에 자물쇠 정보 설정.
    const area = Array.from({ length: originalLockLen * 3 }, () =>
      Array.from({ length: originalLockLen * 3 }, () => 0)
    );
    for (let i = originalLockLen; i < originalLockLen * 2; i++) {
      for (let j = originalLockLen; j < originalLockLen * 2; j++) {
        area[i][j] = lock[i - originalLockLen][j - originalLockLen];
      }
    }

    // 시계방향으로 90도 회전하면서 탐색
    for (let i = 0; i < 4; i++) {
      myKey.rotate();

      // 영역의 첫 번째부터 자물쇠 크기의 마지막 부분이 영역의 끝까지 닿는 영역까지 탐색
      for (let j = 0; j <= area.length - myKey.key.length; j++) {
        for (let k = 0; k <= area[0].length - myKey.key[0].length; k++) {
          // 탐색을 위해 사용할 새 영역 생성
          const newArea = area.map((row) => [...row]);

          // 자물쇠의 크기만큼 탐색
          for (let m = 0; m < myKey.key.length; m++) {
            for (let n = 0; n < myKey.key.length; n++) {
              // 자물쇠와 열쇠 모두 돌기인 경우 2(중복)로 설정
              if (newArea[j + m][k + n] === 1 && myKey.key[m][n] === 1) {
                newArea[j + m][k + n] = 2;
              }
              // 자물쇠가 돌기이고 열쇠가 홈인 경우 1(일치)로 설정
              else if (newArea[j + m][k + n] === 1 && myKey.key[m][n] === 0) {
                newArea[j + m][k + n] = 1;
              }
              // 그 외의 경우에는 열쇠의 상태에 의존
              else {
                newArea[j + m][k + n] = myKey.key[m][n];
              }
            }
          }

          // 영역의 자물쇠 부분이 열쇠와 일치하는지 판단
          if (isFit(newArea, originalLockLen)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function solution(key, lock) {
    const answer = canUnlock(key, lock);
    return answer;
  }

  function main() {
    console.log("S11P49\n");

    const inputKey = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ];
    const inputLock = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const output = this.solution(inputKey, inputLock);

    console.log(
      `Input: KEY\n${inputKey.join("\n")}\nLOCK\n${inputLock.join("\n")} `
    );
    console.log(`Output: ${output}\n`);
  }

  main();
}
