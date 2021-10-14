/**
 * 프로그래머스 해시 Level 1
 * Title: 완주하지 못한 선수
 * Content: 많은 마라톤 선수들이 마라톤에 참여하였습니다.
 *          단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 *          마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 *                  completion의 길이는 participant의 길이보다 1 작습니다.
 *                  참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 *                  참가자 중에는 동명이인이 있을 수 있습니다.
 * Output Condition: 완주하지 못한 선수 이름
 * Input Example: ["leo", "kiki", "eden"]
 *                ["eden", "kiki"]
 * Output Example: leo
 */
// *다시 풀기

{
  function solution(participant, completion) {
    var answer = "";

    const map = new Map();
    completion.forEach((name) => {
      map.set(name, map.get(name) ? map.get(name) + 1 : 1);
    });

    for (const name of participant) {
      const isComplete = map.get(name) >= 1;
      if (isComplete) {
        map.set(name, map.get(name) - 1);
      } else {
        answer = name;
        break;
      }
    }

    return answer;
  }

  /* 통과 조건 만족하지 못한 처리
  function sortParitipant(participant) {
    let sortedParitipant = [...participant];
    for (let i = 0; i < participant.length; i++) {
      const name = sortedParitipant.splice(i, 1)[0];

      if (sortedParitipant.includes(name)) {
        sortedParitipant.push(name);
      } else {
        sortedParitipant.splice(i, 0, name);
      }
    }
    return [...sortedParitipant];
  }

  function solution(participant, completion) {
    var answer = "";

    const queue = [...sortParitipant(participant)];

    while (queue.length > 1) {
      const name = queue.shift();

      if (!completion.includes(name)) {
        queue.push(name);
      }
    }
    answer = queue[0];

    return answer;
  }
  */

  function testToSample1() {
    const testNum = 1;
    const inputParticipant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    const inputCompletion = ["josipa", "filipa", "marina", "nikola"];
    const expectResult = "vinko";
    const testFunction = solution;
    const condition =
      testFunction(inputParticipant, inputCompletion) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToSample2() {
    const testNum = 2;
    const inputParticipant = ["mislav", "stanko", "mislav", "ana"];
    const inputCompletion = ["stanko", "ana", "mislav"];
    const expectResult = "mislav";
    const testFunction = solution;
    const condition =
      testFunction(inputParticipant, inputCompletion) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P1\n");

    const inputParticipant = ["leo", "kiki", "eden"];
    const inputCompletion = ["eden", "kiki"];
    const output = this.solution(inputParticipant, inputCompletion);

    // test();
    console.log(`Input: ${inputParticipant}\n ${inputCompletion} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToSample1();
    testToSample2();
  }

  main();
}
