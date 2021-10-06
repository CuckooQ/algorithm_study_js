/**
 * Title: 결혼식
 * Content: 현수는 다음 달에 결혼을 한다.
 *          현수는 결혼식 피로연을 장소를 빌려 3일 간 쉬지 않고 하려 한다.
 *          피로연에 참석하는 친구들 N명의 참석하는 시간 정보를 현수는 친구들에게 미리 요구했다.
 *          각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었다.
 *          현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원 수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려 한다.
 *          최대 인원 수 구하기.
 *          만약 한 친구가 오는 시간이 13이고 가는 시간이 15라면, 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정한다.
 * Input Condition: 첫 번째 줄에 피로연에 참석할 인원 수 N(5<=N<=100,000)이 주어진다.
 *                  두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어진다.
 *                  시간은 첫 날 0시를 0으로 해서 마지막 날 밤 12시를 72로 하는 타임라인으로, 오는 시간과 가는 시간이 음이 아닌 정수로 표현된다.
 * Output Condition: 첫 번째 줄에 피로연 장소에 동시에 존재하는 최대 인원을 출력한다.
 * Input Example: 5
 *                14 18
 *                12 15
 *                15 20
 *                20 30
 *                5 14
 * Output Example: 2
 */
// *다시 풀기
// *풀이와 같은 방법은 전혀 생각 못 했다.

{
  const MAX_PARTICIPANT_CNT = 100_000;
  const MIN_PARTICIPANT_CNT = 5;
  const MAX_TIMELINE = 72;
  const MIN_TIMELINE = 0;
  const START_TIME_IDX = 0;
  const END_TIME_IDX = 1;
  const UNIT_TIME_IDX = 0;
  const UNIT_KIND_IDX = 1;
  const UNIT_KIND_START = "S";
  const UNIT_KIND_END = "E";

  function getUnitTimelines(timelines) {
    const unitTimelines = [];
    timelines.forEach((timeline) => {
      unitTimelines.push([timeline[START_TIME_IDX], UNIT_KIND_START]);
      unitTimelines.push([timeline[END_TIME_IDX], UNIT_KIND_END]);
    });
    sortUnitTimelines();

    return unitTimelines;

    function sortUnitTimelines() {
      unitTimelines.sort((prev, post) => {
        if (prev[UNIT_TIME_IDX] === post[UNIT_TIME_IDX]) {
          return (
            prev[UNIT_KIND_IDX].charCodeAt() - post[UNIT_KIND_IDX].charCodeAt()
          );
        } else {
          return prev[UNIT_TIME_IDX] - post[UNIT_TIME_IDX];
        }
      });
    }
  }

  function getMaxParticipantCnt(timelines) {
    let unitTimelines = getUnitTimelines(timelines);
    const counts = [];
    let count = 0;
    unitTimelines.forEach((unitTimeline) => {
      if (unitTimeline[UNIT_KIND_IDX] === UNIT_KIND_START) {
        count++;
      }
      if (unitTimeline[UNIT_KIND_IDX] === UNIT_KIND_END) {
        count--;
      }
      counts.push(count);
    });

    return Math.max(...counts);
  }

  /*
    function getSortedTimelines(timelines) {
        return Array.from(timelines).sort((prev, post) => {
            if (prev[END_TIME_IDX] === post[END_TIME_IDX]) {
                return post[START_TIME_IDX] - prev[START_TIME_IDX];
            } else {
                return post[END_TIME_IDX] - prev[END_TIME_IDX];
            }
        });
    }

    function getMaxParticipantCnt(timelines) {
        const sortedTimelines = getSortedTimelines(timelines);
        let count = 1;
        let counts = [];
        let stdIdx = 0;
        let nextIdx = stdIdx;
        while(stdIdx < sortedTimelines.length) {
            nextIdx++;
            
            if (nextIdx === sortedTimelines.length) {
                stdIdx++;
                nextIdx = stdIdx;
                counts.push(count);
                count = 1;
                continue;
            }

            let stdStartTime = sortedTimelines[stdIdx][START_TIME_IDX];
            let nextEndTime = sortedTimelines[nextIdx][END_TIME_IDX];
            if (stdStartTime < nextEndTime) {
                count++;
            }
        }

        return Math.max(...counts);
    }
    */

  function solution(timelines) {
    const answer = getMaxParticipantCnt(timelines);
    return answer;
  }

  /*
    function testToMaxParticipantCnt() {
        const testNum = 1;
        const input = Array.from({length: MAX_PARTICIPANT_CNT}, (_, idx) => {
            return [idx % 72, (idx % 72) + 1]; 
        });   
        const expectResult = ?;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }
    */

  function testToMinParticipantCnt() {
    const testNum = 2;
    const input = Array.from({ length: MIN_PARTICIPANT_CNT }, (_, idx) => [
      idx % 72,
      (idx % 72) + 1,
    ]);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllSameTimeline() {
    const testNum = 3;
    const input = Array.from({ length: 10 }, () => [
      MIN_TIMELINE,
      MAX_TIMELINE,
    ]);
    const expectResult = 10;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToAllDiffTimeline() {
    const testNum = 4;
    const input = Array.from({ length: 10 }, (_, idx) => [idx, idx + 1]);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = [
      [14, 18],
      [12, 15],
      [15, 20],
      [20, 30],
      [5, 14],
    ];
    const output = this.solution(input);

    console.log("S7P9\n");
    // test();
    console.log(`Input: ${input.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    // testToMaxParticipantCnt();
    testToMinParticipantCnt();
    testToAllSameTimeline();
    testToAllDiffTimeline();
  }

  main();
}
