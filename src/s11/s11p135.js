/**
 * Title: 신고 결과 받기
 * Content: 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다.
 *          무지가 개발하려는 시스템은 다음과 같습니다.
 *          1. 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
 *          1-1. 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
 *          1-2. 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
 *          2. k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
 *          2-1. 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
 *          다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.
 *          유저 ID        유저가 신고한 ID      정지된 ID
 *          "muzi"	       ["frodo", "neo"]      ["frodo", "neo"]
 *          "frodo"        ["neo"]               ["neo"]
 *          "apeach"       ["muzi", "frodo"]     ["frodo"]
 *          "neo"          없음                  없음
 *          "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.
 *          이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때,
 *          각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: 1. 2 ≤ id_list의 길이 ≤ 1,000
 *                  1-1. 1 ≤ id_list의 원소 길이 ≤ 10
 *                  1-2. id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
 *                  1-3. id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
 *                  2. 1 ≤ report의 길이 ≤ 200,000
 *                  2-1. 3 ≤ report의 원소 길이 ≤ 21
 *                  2-2. report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
 *                  2-3. 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
 *                  2-4. id는 알파벳 소문자로만 이루어져 있습니다.
 *                  2-5. 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
 *                  2-6. 자기 자신을 신고하는 경우는 없습니다.
 *                  3. 1 ≤ k ≤ 200, k는 자연수입니다.
 * Output Condition: return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
 * Input Example: id_list: ["muzi", "frodo", "apeach", "neo"]
 *                report: ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
 *                k: 2
 * Output Example: [2,1,1,0]
 */
// Expected: 09:30 - 10:10
// Actual: 09:30 - 10:25

{
  function solution(id_list, report, k) {
    const answer = [];
    const usersNreportedUsers = new Map();
    const usersNreportedCounts = new Map();

    init();
    setUsersWithReports();
    setUsersWithCounts();
    setReportCounts();

    return answer;

    function init() {
      id_list.forEach((id) => {
        answer.push(0);
        usersNreportedUsers.set(id, new Set());
        usersNreportedCounts.set(id, 0);
      });
    }

    function setUsersWithReports() {
      report.forEach((names) => {
        const [reporter, reportedUser] = names.split(" ");
        const reportedUsers = usersNreportedUsers.get(reporter);
        reportedUsers.add(reportedUser);
        usersNreportedUsers.set(reporter, reportedUsers);
      });
    }
    function setUsersWithCounts() {
      usersNreportedUsers.forEach((reportedUsers) => {
        [...reportedUsers].forEach((reportedUser) => {
          let count = usersNreportedCounts.get(reportedUser);
          count = count ? count + 1 : 1;
          usersNreportedCounts.set(reportedUser, count);
        });
      });
    }
    function setReportCounts() {
      let idx = 0;
      usersNreportedUsers.forEach((reportedUsers) => {
        [...reportedUsers].forEach((reportedUser) => {
          const count = usersNreportedCounts.get(reportedUser);
          if (count >= k) {
            answer[idx]++;
          }
        });
        idx++;
      });
    }
  }

  function testToExample() {
    const testNum = 1;
    const inputIdList = ["con", "ryan"];
    const inputReport = ["ryan con", "ryan con", "ryan con", "ryan con"];
    const inputK = 3;
    const expectResult = [0, 0];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputIdList, inputReport, inputK),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P135\n");

    const inputIdList = ["muzi", "frodo", "apeach", "neo"];
    const inputReport = [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ];
    const inputK = 2;
    const output = this.solution(inputIdList, inputReport, inputK);

    // test();
    console.log(
      `Input: ${inputIdList.join(" ")}\n${inputReport.join(" ")}\n${inputK}`
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
