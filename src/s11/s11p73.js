/**
 * Title: 단어 변환
 * Content: 두 개의 단어 begin, target과 단어의 집합 words가 있습니다.
 *          아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 *          1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 *          2. words에 있는 단어로만 변환할 수 있습니다.
 *          예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면,
 *          "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 *          두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때,
 *          최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 각 단어는 알파벳 소문자로만 이루어져 있습니다.
 *                  각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
 *                  words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
 *                  begin과 target은 같지 않습니다.
 * Output Condition: 변환할 수 없는 경우에는 0를 return 합니다.
 * Input Example: begin = "hit"
 *                target = "cog"
 *                words = ["hot", "dot", "dog", "lot", "log", "cog"]
 * Output Example: 4
 */
// Expected: 10:08 - 10:48
// Actual: 10:08 - 10:38
// *bfs 복습을 위해 다시 풀기.
// *레벨3같지는 않았다.

{
  function solution(begin, target, words) {
    let answer = 0;
    answer = bfs();
    return answer;

    function bfs() {
      let completeTurn = 0;
      const usableWords = [...words];
      const queue = [];
      queue.push([begin, completeTurn]);

      while (queue.length) {
        const [beforeWord, turn] = queue.shift();

        if (beforeWord === target) {
          completeTurn = turn;
          break;
        }

        const changeableWords = usableWords.filter((word) => {
          if (word.length !== beforeWord.length) {
            return false;
          }

          let diffCnt = 0;
          for (let i = 0; i < word.length; i++) {
            if (word[i] !== beforeWord[i]) {
              diffCnt++;
            }
          }
          return diffCnt === 1;
        });

        changeableWords.forEach((word) => {
          usableWords.splice(usableWords.indexOf(word), 1);
          queue.push([word, turn + 1]);
        });
      }

      return completeTurn;
    }
  }

  function testToExample() {
    const testNum = 1;
    const inputBegin = "hit";
    const inputTarget = "cog";
    const inputWords = ["hot", "dot", "dog", "lot", "log"];
    const expectResult = 0;
    const testFunction = solution;
    const condition =
      testFunction(inputBegin, inputTarget, inputWords) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P73\n");

    const inputBegin = "hit";
    const inputTarget = "cog";
    const inputWords = ["hot", "dot", "dog", "lot", "log", "cog"];
    const output = this.solution(inputBegin, inputTarget, inputWords);

    // test();
    console.log(
      `Input: ${inputBegin} ${inputTarget}\n${inputWords.join("\n")}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
