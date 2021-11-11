/**
 * Title: 영어 끝말잇기
 * Content: 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다.
 *          영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.
 *          1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
 *          2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
 *          3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
 *          4. 이전에 등장했던 단어는 사용할 수 없습니다.
 *          5. 한 글자인 단어는 인정되지 않습니다.
 *          다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.
 *          tank → kick → know → wheel → land → dream → mother → robot → tank
 *          위 끝말잇기는 다음과 같이 진행됩니다.
 *          *1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
 *          *2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
 *          *3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
 *          *1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
 *          *(계속 진행)
 *          끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.
 *          사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때,
 *          가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
 *                  words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
 *                  단어의 길이는 2 이상 50 이하입니다.
 *                  모든 단어는 알파벳 소문자로만 이루어져 있습니다.
 *                  끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
 * Output Condition: 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
 *                   만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
 * Input Example: n = 3
 *                words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
 * Output Example: [3, 3]
 */
// Expected: 09:29 - 10:09
// Actual: 09:29 - 10:03

{
  class Game {
    constructor(n) {
      this.turn = 0;
      this.participants = Array.from({ length: n }, (_, idx) => idx + 1);
      this.loser;
    }

    start(words) {
      let repeatedWords = new Map();
      let participants = [];
      let beforeWord = "";
      this.loser = undefined;
      this.turn = 0;

      while (!this.loser && words.length) {
        if (!participants.length) {
          this.turn++;
          participants = [...this.participants];
        }

        const participant = participants.shift();
        const word = words.shift();

        const isRepeated = repeatedWords.get(word);
        const isWrong = beforeWord
          ? beforeWord[beforeWord.length - 1] !== word[0]
          : false;

        if (isRepeated || isWrong) {
          this.loser = participant;
        } else {
          repeatedWords.set(word, 1);
          beforeWord = word;
        }
      }

      if (!this.loser) {
        this.loser = 0;
        this.turn = 0;
      }
    }
  }

  function solution(n, words) {
    let answer = [];

    const game = new Game(n);
    game.start(words);
    answer = [game.loser, game.turn];

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 5;
    const inputWords = [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ];
    const expectResult = [0, 0];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputWords),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 2;
    const inputWords = [
      "hello",
      "one",
      "even",
      "never",
      "now",
      "world",
      "draw",
    ];
    const expectResult = [1, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputWords),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P72\n");

    const inputN = 3;
    const inputWords = [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ];
    const output = this.solution(inputN, inputWords);

    // test();
    console.log(`Input: ${inputN}\n${inputWords.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
