/**
 * Title: 학급 회장
 * Content: 학급 회장을 뽑느데 후보로 기호 A, B, C, D, E후보가 등록을 했다.
 *          투표 용지에는 반 학생들이 자기가 선택한 후보의 기호가 쓰여져 있고 선생님이 그 기호를 발표하고 있다.
 *          선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하기.
 *          반드시 한 명의 학급회장이 선출되도록 투표 결과가 나왔다고 가정한다.
 * Input Condition: 첫 번째 줄에는 반 학생 수 N(5<=N=50)이 주어진다.
 *                  두 번째 줄에는 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력된다.
 * Output Condition: 학급 회장으로 선택된 기호를 출력한다.
 * Input Example: 15
 *                BACBACCACCBDEDE
 * Output Example: C
 */

{
  const MAX_STUDENT_COUNT = 50;
  const CANDIDATE_A = "A";
  const CANDIDATE_B = "B";
  const CANDIDATE_C = "C";
  const CANDIDATE_D = "D";
  const CANDIDATE_E = "E";

  function initCandidates() {
    const candidates = new Map();
    candidates.set(CANDIDATE_A, 0);
    candidates.set(CANDIDATE_B, 0);
    candidates.set(CANDIDATE_C, 0);
    candidates.set(CANDIDATE_D, 0);
    candidates.set(CANDIDATE_E, 0);
    return candidates;
  }

  function getVotesResult(candidates, votes) {
    const results = new Map(candidates);
    votes.split("").forEach((votedName) => {
      if (results.has(votedName)) {
        results.set(votedName, results.get(votedName) + 1);
      }
    });
    return results;
  }

  function getSelectedClassLeader(votes) {
    const CANDIDATE_NAME_IDX = 0;
    const CANDIDATE_VOTE_IDX = 1;

    const candidates = initCandidates();
    const votesResult = getVotesResult(candidates, votes);
    const topVoteCount = Math.max(...votesResult.values());
    const classLeaderInfo = Array.from(votesResult).find(
      (candidate) => candidate[CANDIDATE_VOTE_IDX] === topVoteCount
    );

    return classLeaderInfo[CANDIDATE_NAME_IDX];
  }

  function solution(votes) {
    const answer = getSelectedClassLeader(votes);
    return answer;
  }

  function testToMaxStudent() {
    const testNum = 1;
    let input = "";
    const inputArr = [];
    for (let i = 0; i < MAX_STUDENT_COUNT; i++) {
      if (i < 30) {
        inputArr.push(CANDIDATE_A);
      } else if (i >= 30 && i < 35) {
        inputArr.push(CANDIDATE_B);
      } else if (i >= 35 && i < 40) {
        inputArr.push(CANDIDATE_C);
      } else if (i >= 40 && i < 45) {
        inputArr.push(CANDIDATE_D);
      } else {
        inputArr.push(CANDIDATE_E);
      }
    }
    input = inputArr.join("");
    const expectResult = CANDIDATE_A;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToVoteOnlyOne() {
    const testNum = 2;
    let input = "";
    const inputArr = [];
    for (let i = 0; i < 20; i++) {
      inputArr.push(CANDIDATE_E);
    }
    input = inputArr.join("");
    const expectResult = CANDIDATE_E;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = "BACBACCACCBDEDE";
    const output = this.solution(input);

    console.log("S5P6\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxStudent();
    testToVoteOnlyOne();
  }

  main();
}
