/**
 * Title: 거리두기 확인하기
 * Content: 개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.
 *          코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼
 *          아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.
 *          1. 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
 *          2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2 이하로 앉지 말아 주세요.
 *          3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.
 *          5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 기키고 있는지 알고 싶어졌습니다.
 *          자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열 places가 매개변수로 주어집니다.
 *          각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 * Input Condition: places의 행 길이(대기실 개수) = 5
 *                  places의 각 행은 하나의 대기실 구조를 나타냅니다.
 *                  places의 열 길이(대기실 세로 길이) = 5
 *                  places의 원소는 P,O,X로 이루어진 문자열입니다.
 *                  places 원소의 길이(대기실 가로 길이) = 5
 *                  P는 응시자가 앉아있는 자리를 의미합니다.
 *                  O는 빈 테이블을 의미합니다.
 *                  X는 파티션을 의미합니다.
 *                  입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.
 * Output Condition: 1차원 정수 배열에 5개의 원소를 담아서 return 합니다.
 *                   places에 담겨 있는 5개 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에 담습니다.
 *                   각 대기실 별로 모든 응시자가 거리두기를 지키고 있으면 1을,
 *                   한 명이라도 지키지 않고 있으면 0을 담습니다.
 * Input Example: [
 *                 ["POOOP",
 *                  "OXXOX",
 *                  "OPXPX",
 *                  "OOXOX",
 *                  "POXXP"],
 *                 ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
 *                 ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
 *                 ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
 *                 ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
 * Output Example: [1, 0, 1, 1, 1]
 */
// Expected: 13:32 - 14:12
// Actual: 13:32 - 14:53
// *너무 하드코딩이었다...
// *그런데 다른 풀이들도 방식은 똑같다.

{
  const WAITING_ROOM_CNT = 5;
  const WAITING_ROOM_ROW = 5;
  const WAITING_ROOM_COL = 5;
  const SITTED = "P";
  const EMPTY = "O";
  // const PARTITION = "X";
  const LIMIT_MANHATTAN_DIST = 2;
  const GOOD = 1;
  const BAD = 0;
  const DIRECTION = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
  };

  function isGoodRelation(direction, i, j, room) {
    let isGood = true;
    let cnt = 0;
    let idx;
    switch (direction) {
      case DIRECTION.UP:
      case DIRECTION.DOWN: {
        idx = i;
        break;
      }
      case DIRECTION.LEFT:
      case DIRECTION.RIGHT: {
        idx = j;
        break;
      }
      default:
    }

    const betweenPlaces = [];
    while (idx >= 0 && cnt < LIMIT_MANHATTAN_DIST) {
      let place;
      if (direction === DIRECTION.UP) {
        idx--;
        place = room[idx] && room[idx][j];
      }
      if (direction === DIRECTION.DOWN) {
        idx++;
        place = room[idx] && room[idx][j];
      }
      if (direction === DIRECTION.LEFT) {
        idx--;
        place = room[i][idx];
      }
      if (direction === DIRECTION.RIGHT) {
        idx++;
        place = room[i][idx];
      }
      cnt++;
      if (place) {
        if (place === SITTED) {
          if (cnt === 1) {
            isGood = false;
          } else {
            isGood = !betweenPlaces.includes(EMPTY);
          }
        }
      }
      if (isGood) {
        betweenPlaces.push(place);
      } else {
        break;
      }
    }

    return isGood;
  }

  function isGoodRelationOfDiagonal(direction, i, j, room) {
    let isGood = true;

    const betweenPlaces = [];
    let place;
    if (direction === DIRECTION.UP + DIRECTION.LEFT) {
      place = room[i - 1] && room[i - 1][j - 1];
      if (place) {
        betweenPlaces.push(room[i - 1][j]);
        betweenPlaces.push(room[i][j - 1]);
      }
    }
    if (direction === DIRECTION.UP + DIRECTION.RIGHT) {
      place = room[i - 1] && room[i - 1][j + 1];
      if (place) {
        betweenPlaces.push(room[i - 1][j]);
        betweenPlaces.push(room[i][j + 1]);
      }
    }
    if (direction === DIRECTION.DOWN + DIRECTION.LEFT) {
      place = room[i + 1] && room[i + 1][j - 1];
      if (place) {
        betweenPlaces.push(room[i + 1][j]);
        betweenPlaces.push(room[i][j - 1]);
      }
    }
    if (direction === DIRECTION.DOWN + DIRECTION.RIGHT) {
      place = room[i + 1] && room[i + 1][j + 1];
      if (place) {
        betweenPlaces.push(room[i + 1][j]);
        betweenPlaces.push(room[i][j + 1]);
      }
    }
    if (place) {
      if (place === SITTED) {
        isGood = !betweenPlaces.includes(EMPTY);
      }
    }

    return isGood;
  }

  function getInfoOfPrevention(places) {
    const preventionInfo = Array.from({ length: WAITING_ROOM_CNT }, () => BAD);

    for (const [idx, room] of places.entries()) {
      let isPrevention = true;

      for (let i = 0; i < WAITING_ROOM_ROW; i++) {
        for (let j = 0; j < WAITING_ROOM_COL; j++) {
          if (room[i][j] === SITTED) {
            let isGood = isGoodRelation(DIRECTION.UP, i, j, room);
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelation(DIRECTION.DOWN, i, j, room);
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelation(DIRECTION.LEFT, i, j, room);
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelation(DIRECTION.RIGHT, i, j, room);
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelationOfDiagonal(
              DIRECTION.UP + DIRECTION.LEFT,
              i,
              j,
              room
            );
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelationOfDiagonal(
              DIRECTION.UP + DIRECTION.RIGHT,
              i,
              j,
              room
            );
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelationOfDiagonal(
              DIRECTION.DOWN + DIRECTION.LEFT,
              i,
              j,
              room
            );
            if (!isGood) {
              isPrevention = false;
              break;
            }
            isGood = isGoodRelationOfDiagonal(
              DIRECTION.DOWN + DIRECTION.RIGHT,
              i,
              j,
              room
            );
            if (!isGood) {
              isPrevention = false;
              break;
            }
          }
        }

        if (!isPrevention) {
          break;
        }
      }

      preventionInfo[idx] = isPrevention ? GOOD : BAD;
    }

    return preventionInfo;
  }

  function solution(places) {
    const answer = getInfoOfPrevention(places);
    return answer;
  }

  function main() {
    console.log("S11P42\n");

    const input = [
      ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
      ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
      ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
      ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
      ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ];
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  main();
}
