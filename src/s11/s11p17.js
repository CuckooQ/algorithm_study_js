/**
 * Title: 추석 트래픽
 * Content: 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다.
 *          장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다.
 *          초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.
 * Input Condition: solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며, 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.
 *                  응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 2016-09-15 hh:mm:ss.sss 형식으로 되어 있다.
 *                  처리시간 T는 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 s로 끝난다.
 *                  예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 "2016년 9월 15일 오전 3시 10분 33.010초"부터 "2016년 9월 15일 오전 3시 10분 33.020초"까지 "0.011초" 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)
 *                  서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.
 *                  lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.
 * Output Condition: solution 함수에서는 로그 데이터 lines 배열에 대해 초당 최대 처리량을 리턴한다.
 * Input Example: ["2016-09-15 01:00:04.001 2.0s","2016-09-15 01:00:07.000 2s"]
 * Output Example: 1
 */
// *다시 풀기
// *문제 이해부터 안 된다.
// *최대로 중복되는 처리 개수를 구하는 문제라고 생각했는데 아니었다.

{
  function getMaxThroughput(lines) {
    return 0;
  }

  /*
  // 착각하고 만든 처리
  const FLAG_IDX = 0;
  const TIME_IDX = 1;
  const START_FLAG = "S";
  const END_FLAG = "E";

  function getMaxThroughput(lines) {
    let maxThrouput = 0;

    const timelines = [];

    lines.forEach((line) => {
      const [dateStr, timeStr, secStr] = line.split(" ");

      const elapsedTime = Number(secStr.slice(0, secStr.length - 1));
      const endDatetime = new Date(`${dateStr} ${timeStr}`);
      const startDatetime = new Date(
        endDatetime.getTime() - elapsedTime * 10 ** 3
      );

      const startInfo = [START_FLAG, startDatetime];
      const endInfo = [END_FLAG, endDatetime];
      timelines.push(endInfo, startInfo);
    });

    timelines.sort((a, b) => {
      if (a[TIME_IDX] === b[TIME_IDX]) {
        return a[FLAG_IDX].charCodeAt() - b[FLAG_IDX].charCodeAt();
      } else {
        return a[TIME_IDX] - b[TIME_IDX];
      }
    });

    let stack = [];
    timelines.forEach((timeline) => {
      if (timeline[FLAG_IDX] === START_FLAG) {
        stack.push(1);
      } else {
        stack.pop();
      }

      if (stack.length > maxThrouput) {
        maxThrouput = stack.length;
      }
    });

    return maxThrouput;
  }
  */

  function solution(lines) {
    const answer = getMaxThroughput(lines);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [
      "2016-09-15 01:00:04.002 2.0s",
      "2016-09-15 01:00:07.000 2s",
    ];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 1;
    const input = [
      "2016-09-15 20:59:57.421 0.351s",
      "2016-09-15 20:59:58.233 1.181s",
      "2016-09-15 20:59:58.299 0.8s",
      "2016-09-15 20:59:58.688 1.041s",
      "2016-09-15 20:59:59.591 1.412s",
      "2016-09-15 21:00:00.464 1.466s",
      "2016-09-15 21:00:00.741 1.581s",
      "2016-09-15 21:00:00.748 2.31s",
      "2016-09-15 21:00:00.966 0.381s",
      "2016-09-15 21:00:02.066 2.62s",
    ];
    const expectResult = 7;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P17\n");

    const input = [
      "2016-09-15 01:00:04.001 2.0s",
      "2016-09-15 01:00:07.000 2s",
    ];
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
