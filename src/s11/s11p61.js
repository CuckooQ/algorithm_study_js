/**
 * Title: 불량 사용자
 * Content: 개발팀 내에서 이벤트 개발을 담당하고 있는 "무지"는 최근 진행된 카카오이모티콘 이벤트에 비정상적인 방법으로 당첨을 시도한 응모자들을 발견하였습니다.
 *          이런 응모자들을 따로 모아 불량 사용자라는 이름으로 목록을 만들어서 당첨 처리 시 제외하도록 이벤트 당첨자 담당자인 "프로도" 에게 전달하려고 합니다.
 *          이 때 개인정보 보호을 위해 사용자 아이디 중 일부 문자를 '*' 문자로 가려서 전달했습니다.
 *          가리고자 하는 문자 하나에 '*' 문자 하나를 사용하였고 아이디 당 최소 하나 이상의 '*' 문자를 사용하였습니다.
 *          "무지"와 "프로도"는 불량 사용자 목록에 매핑된 응모자 아이디를 제재 아이디 라고 부르기로 하였습니다.
 *          예를 들어, 이벤트에 응모한 전체 사용자 아이디 목록이 다음과 같다면
 *          응모자 아이디
 *          frodo
 *          fradi
 *          crodo
 *          abc123
 *          frodoc
 *          다음과 같이 불량 사용자 아이디 목록이 전달된 경우,
 *          불량 사용자
 *          fr*d*
 *          abc1**
 *          불량 사용자에 매핑되어 당첨에서 제외되어야 야 할 제재 아이디 목록은 다음과 같이 두 가지 경우가 있을 수 있습니다.
 *          제재 아이디
 *          frodo
 *          abc123
 *          제재 아이디
 *          fradi
 *          abc123
 *          이벤트 응모자 아이디 목록이 담긴 배열 user_id와 불량 사용자 아이디 목록이 담긴 배열 banned_id가 매개변수로 주어질 때,
 *          당첨에서 제외되어야 할 제재 아이디 목록은 몇가지 경우의 수가 가능한 지 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: user_id 배열의 크기는 1 이상 8 이하입니다.
 *                  user_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.
 *                  응모한 사용자 아이디들은 서로 중복되지 않습니다.
 *                  응모한 사용자 아이디는 알파벳 소문자와 숫자로만으로 구성되어 있습니다.
 *                  banned_id 배열의 크기는 1 이상 user_id 배열의 크기 이하입니다.
 *                  banned_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.
 *                  불량 사용자 아이디는 알파벳 소문자와 숫자, 가리기 위한 문자 '*' 로만 이루어져 있습니다.
 *                  불량 사용자 아이디는 '*' 문자를 하나 이상 포함하고 있습니다.
 *                  불량 사용자 아이디 하나는 응모자 아이디 중 하나에 해당하고 같은 응모자 아이디가 중복해서 제재 아이디 목록에 들어가는 경우는 없습니다.
 *                  제재 아이디 목록들을 구했을 때 아이디들이 나열된 순서와 관계없이 아이디 목록의 내용이 동일하다면 같은 것으로 처리하여 하나로 세면 됩니다.
 * Output Condition: None
 * Input Example: user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
 *                banned_id = ["fr*d*", "abc1**"]
 * Output Example: 2
 */
// Expected: 12:58 - 13:38
// Actual: 12:58 - 14:35
// *다시 풀기

{
  // 다른 사람 풀이
  // 하고자 하는 것은 같으나 더 간결했다.
  function solution(user_id, banned_id) {
    const isUsed = new Map();
    const usedSets = new Set();
    const current = [];
    const bannedLen = banned_id.length;

    return rf();

    function rf(bannedIdx = 0) {
      // 제재 아이디 모두 확인이 끝난 경우
      if (bannedIdx === bannedLen) {
        // 매칭된 아이디들을 정렬시켜서 문자열로 변환
        const sorted = [...current].sort().toString();
        if (usedSets.has(sorted)) {
          return 0;
        }
        // 이미 존재했던 조합이 아니라면 Set에 조합을 저장하고 경우의 수 1로 반환.
        usedSets.add(sorted);
        return 1;
      }

      // *은 어느 문자든 상관없음이므로 정규식의 .으로 변환
      const regex = new RegExp(banned_id[bannedIdx].replace(/\*/g, "."));
      // 정규식과 일치하고 길이가 같은 아이디들 가져오기
      const matches = user_id.filter((user) => {
        const result = regex.exec(user);
        return result && result[0].length === user.length;
      });

      // 경우의 수 정의
      let ret = 0;
      for (const user of matches) {
        if (!isUsed.get(user)) {
          // 다음 제재 아이디 확인에서 사용하지 않도록 이미 사용된 아이디에 저장
          isUsed.set(user, 1);
          // 이번 제재 아이디 확인에서 매칭된 아이디로 저장
          current[bannedIdx] = user;
          // 다음 제재 아이디 확인
          ret += rf(bannedIdx + 1);
          // 다음 제재 아이디 확인이 끝났으므로 이미 사용된 아이디에서 제거
          isUsed.delete(user);
        }
      }

      return ret;
    }
  }

  /*
  const ANY_CHAR = "*";

  function isMatch(id, bannedId) {
    if (id.length !== bannedId.length) {
      return false;
    }

    const idChars = id.split("");
    for (let i = 0; i < idChars.length; i++) {
      if (bannedId[i] === ANY_CHAR || idChars[i] === bannedId[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function solution(user_id, banned_id) {
    let answer = 0;

    let set = new Set();
    const bannedIds = Array.from({ length: banned_id.length }, () => "");
    user_id.forEach((id) => {
      banned_id.forEach((bannedId, idx) => {
        if (isMatch(id, bannedId)) {
          bannedIds[idx] = bannedIds[idx] ? `${bannedIds[idx]} ${id}` : id;
        }
      });
    });

    dfs();
    answer = set.size;

    return answer;

    function dfs(
      skippedCnt = 0,
      nextIdx = 0,
      selIds = [],
      remainedIds = [...bannedIds]
    ) {
      if (selIds.length === banned_id.length && !selIds.includes(undefined)) {
        selIds = selIds.sort();
        set.add(selIds.join(" "));
        return;
      }

      if (skippedCnt === (banned_id.length + 1) * 2) {
        return;
      }

      let selId;
      const ids = remainedIds[nextIdx].split(" ");
      for (let i = 0; i < ids.length; i++) {
        selId = ids.shift();
        if (!selIds.includes(selId)) {
          remainedIds[nextIdx] = ids.join(" ");
          break;
        } else {
          selId = undefined;
          ids.push(selId);
          remainedIds[nextIdx] = ids.join(" ");
        }
      }

      selId &&
        dfs(skippedCnt, nextIdx + 1, [...selIds, selId], [...remainedIds]);
      dfs(skippedCnt + 1, nextIdx, [...selIds], [...remainedIds]);
    }
  }
  */

  function testToExample1() {
    const testNum = 1;
    const inputUserId = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
    const inputBannedId = ["*rodo", "*rodo", "******"];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(inputUserId, inputBannedId) === expectResult;
    validateTestResult(testNum, condition);
  }
  function testToExample2() {
    const testNum = 2;
    const inputUserId = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
    const inputBannedId = ["fr*d*", "*rodo", "******", "******"];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputUserId, inputBannedId) === expectResult;
    validateTestResult(testNum, condition);
  }
  function testToExample3() {
    const testNum = 3;
    const inputUserId = ["frodo"];
    const inputBannedId = ["fr*d*"];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputUserId, inputBannedId) === expectResult;
    validateTestResult(testNum, condition);
  }
  function testToExample4() {
    const testNum = 4;
    const inputUserId = ["frodos"];
    const inputBannedId = ["fr*d*"];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputUserId, inputBannedId) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputUserId = ["frod", "fro1", "fro2"];
    const inputBannedId = ["****"];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputUserId, inputBannedId) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P61\n");

    const inputUserId = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
    const inputBannedId = ["fr*d*", "abc1**"];
    const output = this.solution(inputUserId, inputBannedId);

    // test();
    console.log(`Input: ${inputUserId.join(" ")}\n${inputBannedId.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}
