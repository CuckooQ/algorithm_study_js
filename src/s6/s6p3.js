/**
 * Title: 크레인 인형 뽑기 (카카오)
 * Content: 게임 개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 한다.
 *          죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려 한다.
 *
 *          |   |   |   |   |   |     |   |
 *          |   |   | e |   | b |     |   |
 *          |   | d | c |   | e |     |   |
 *          | a | d | a | a | d |     |   |
 *          | b | c | e | b | e |     |   |
 *          ----------------------    -----
 *            ①   ②   ③   ④   ⑤       Bucket
 *          게임 화면은 1X1 크기의 칸들로 이루어진 NxN 크기의 정사각 격자이며, 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있다.
 *          위 그림은 5x5 크기의 예시이다.
 *          각 격자 칸에는 다양한 인형이 들어있으며, 인형이 없는 칸은 빈칸이다.
 *          모든 인형은 1x1크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있다.
 *          게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있다.
 *          집어 올린 인형은 바구니에 쌓이게 되는데, 이 때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 된다.
 *          다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어올려 바구니에 담은 모습이다.
 *                  Board             Bucket
 *          |   |   |   |   |   |     |   |
 *          |   |   |   |   |   |     |   |
 *          |   | d | c |   | e |     | e |
 *          |   | d | a | a | d |     | b |
 *          | b | c | e | b | e |     | a |
 *          ----------------------    -----
 *            ①   ②   ③   ④   ⑤
 *          만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면, 두 인형은 터뜨려지면서 바구니에서 사라진다.
 *          위 상태에서 이어서 5번위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어진다.
 *                  Board             Bucket
 *          |   |   |   |   |   |     |   |
 *          |   |   |   |   |   |     |   |
 *          |   | d | c |   |   |     |   |
 *          |   | d | a | a | d |     | b |
 *          | b | c | e | b | e |     | a |
 *          ----------------------    -----
 *            ①   ②   ③   ④   ⑤
 *          크레인 작동 시 인형이 집어지지 않는 경우는 없으나, 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않는다.
 *          또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정한다.
 *          게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
 *          크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 출력하기.
 *
 * Input Condition: board배열은 2차원 배열로 크기는 5x5이상 30x30이하이다.
 *                  board의 각 칸에는 0이상 100이하인 정수가 담겨있다.
 *                  0은 빈 칸을 의미한다.
 *                  1~100의 각 숫자는 각기 다른 인형의 모양을 의미하며, 같은 숫자는 같은 모양의 인형을 나타낸다.
 *                  moves배열의 크기는 1이상 1000이하이다.
 *                  moves배열 각 원소들의 값은 1이상이며 board 배열의 가로 크기 이하인 자연수이다.
 * Output Condition: 첫 번쨰 줄에 사라진 인형의 개수를 출력한다.
 * Input Example: board [[0,0,0,0,0], [0,0,1,0,3], [0,2,5,0,1], [4,2,4,4,2], [3,5,1,3,1]]
 *                moves [1,5,3,5,1,2,1,4]
 * Output Example: 4
 */
// *다시 풀기
// *0일 때의 처리에서 간과한 것이 있었다. 주의하자.

{
  const BURST_CONDITION = 2;
  const EMPTY = 0;

  class Bucket {
    #stack;
    #score;

    constructor() {
      this.init();
    }

    init() {
      this.#stack = new Array();
      this.#score = 0;
    }

    insert(puppet) {
      this.#stack.push(puppet);

      while (this.isBurstCondition()) {
        this.burstPuppet();
      }
    }

    isBurstCondition() {
      let prevPuppet = this.#stack[this.#stack.length - 1];

      for (let i = 1; i < BURST_CONDITION; i++) {
        if (this.#stack.length - (i + 1) < 0) {
          return false;
        }

        const puppet = this.#stack[this.#stack.length - (i + 1)];
        if (puppet !== prevPuppet) {
          return false;
        }
      }

      return true;
    }

    burstPuppet() {
      for (let i = 0; i < BURST_CONDITION; i++) {
        this.#stack.pop();
      }

      this.#score++;
    }

    getScore() {
      return this.#score;
    }
  }

  function isEmpty(puppet) {
    return puppet === EMPTY;
  }

  function selectPuppet(board, idx) {
    let puppet = 0;
    for (boardRow of board) {
      puppet = boardRow[idx];
      if (!isEmpty(puppet)) {
        boardRow[idx] = 0;
        break;
      }
    }

    return puppet;
  }

  function getBurstCount(board, moves) {
    const bucket = new Bucket();
    moves.forEach((move) => {
      const selectedPuppet = selectPuppet(board, move - 1);
      if (!isEmpty(selectedPuppet)) {
        bucket.insert(selectedPuppet);
      }
    });

    return bucket.getScore();
  }

  function getBurstedPuppetCount(board, moves) {
    return getBurstCount(board, moves) * BURST_CONDITION;
  }

  function solution(board, moves) {
    const answer = getBurstedPuppetCount(board, moves);
    return answer;
  }

  function main() {
    const inputBoard = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];
    const inputMoves = [1, 5, 3, 5, 1, 2, 1, 4];
    const output = this.solution(inputBoard, inputMoves);

    console.log("S6P3\n");
    console.log(`Input: ${inputBoard}\n ${inputMoves.join(" ")}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
