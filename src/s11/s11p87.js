/**
 * Title: 여행경로
 * Content: 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
 *          항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
 *                  주어진 공항 수는 3개 이상 10,000개 이하입니다.
 *                  tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
 *                  주어진 항공권은 모두 사용해야 합니다.
 *                  만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
 *                  모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
 * Output Condition: None
 * Input Example: [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
 * Output Example: ["ICN", "JFK", "HND", "IAD"]
 */
// Expected: 07:58 - 08:38
// Actual: 07:58 - 08:42

{
  const FIRST_DEPARTURE = "ICN";

  function solution(tickets) {
    let answer = [FIRST_DEPARTURE];

    const info = {};
    tickets.forEach(([departure, arrival]) => {
      if (info[departure]) {
        info[departure].push(arrival);
      } else {
        info[departure] = [arrival];
      }
    });

    const routes = [];
    goToNext();
    routes.sort();
    answer = routes[0];

    return answer;

    function goToNext(
      departure = FIRST_DEPARTURE,
      route = [FIRST_DEPARTURE],
      travelInfo = { ...info }
    ) {
      const arrivals = travelInfo[departure];

      if (route.length === tickets.length + 1) {
        routes.push(route);
        return;
      }

      if (!arrivals || !arrivals.length) {
        return;
      }

      for (let i = 0; i < arrivals.length; i++) {
        const updatedRoute = [...route];
        updatedRoute.push(arrivals[i]);
        const updatedArrivals = [...arrivals];
        updatedArrivals.splice(i, 1);
        const updatedTravelInfo = { ...travelInfo };
        updatedTravelInfo[departure] = updatedArrivals;
        goToNext(arrivals[i], updatedRoute, updatedTravelInfo);
      }
    }
  }

  function testToExample() {
    const testNum = 1;
    const input = [
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ];
    const expectResult = ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P87\n");

    const input = [
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ];
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
