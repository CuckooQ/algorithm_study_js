/**
 * 프로그래머스 해시 Level 3
 * Title: 위장
 * Content: 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
 *          예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
 *          종류	이름
 *          얼굴	동그란 안경, 검정 선글라스
 *          상의	파란색 티셔츠
 *          하의	청바지
 *          겉옷	긴 코트
 *          스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
 *                  스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
 *                  같은 이름을 가진 의상은 존재하지 않습니다.
 *                  clothes의 모든 원소는 문자열로 이루어져 있습니다.
 *                  모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
스파이는 하루에 최소 한 개의 의상은 입습니다.
 * Output Condition: 
 * Input Example: [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	
 * Output Example: 5
 */
// *다시 풀기
// *매우 오래 걸렸고 통과하지 못했다.
// *모두 통과하는 해답을 찾아야 한다.

{
  const NAME_IDX = 0;
  const KIND_IDX = 1;

  /* 통과 조건 만족하지 못한 처리 (82점) */
  function solution(clothes) {
    let answer = 0;

    // const d = [];
    // d[0] = 0;

    for (let i = 1; i <= clothes.length; i++) {
      // d[i] = 0;
      dfs(i);
    }

    // answer = d.reduce((calc, val) => calc + val);
    return answer;

    function dfs(limit, selection = [], remained = [...clothes]) {
      if (selection.length === limit) {
        // d[limit]++;
        answer++;
        return;
      }

      if (remained.length === 0) {
        return;
      }

      const sel = remained.pop();
      if (
        selection.findIndex((cloth) => cloth[KIND_IDX] === sel[KIND_IDX]) === -1
      ) {
        dfs(limit, [...selection, sel], [...remained]);
      }

      dfs(limit, [...selection], [...remained]);
    }
  }

  /* 통과 조건 만족하지 못한 처리 (50점)
  function solution(clothes) {
    let answer = 0;
    const mem = [];
    dfs();
    answer = mem.length;
    return answer;

    function dfs(selectedClothes = [], remainedClothes = [...clothes]) {
      if (remainedClothes.length === 0) {
        return;
      }

      const cloth = remainedClothes.shift();
      const newSelectedClothes = [...selectedClothes];

      const sameKindIdx = selectedClothes.findIndex(
        (selCloth) => selCloth[KIND_IDX] === cloth[KIND_IDX]
      );
      if (sameKindIdx !== -1) {
        newSelectedClothes[sameKindIdx] = cloth;
      } else {
        newSelectedClothes.push(cloth);
      }

      const names = [];
      newSelectedClothes.forEach((cloth) => {
        names.push(cloth[NAME_IDX]);
      });

      let isExist = false;
      for (let i = 0; i < mem.length; i++) {
        let stack = 0;

        for (let j = 0; j < names.length; j++) {
          if (mem[i].includes(names[j])) {
            stack++;
          }
        }

        if (stack === names.length && mem[i].length === names.length) {
          isExist = true;
          break;
        }
      }

      !isExist && mem.push(names);

      dfs(newSelectedClothes, [...remainedClothes]);

      dfs([...selectedClothes], [...remainedClothes]);
    }
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = [
      ["crowmask", "face"],
      ["bluesunglasses", "face"],
      ["smoky_makeup", "face"],
    ];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [["crowmask", "face"]];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  /*
  function testToExample3() {
    const testNum = 3;
    const input = [
      ["a", "a"],
      ["b", "b"],
      ["c", "c"],
      ["d", "d"],
      ["e", "e"],
      ["f", "f"],
      ["g", "g"],
      ["h", "h"],
      ["i", "i"],
      ["j", "j"],
      ["aa", "aa"],
      ["bb", "bb"],
      ["cc", "cc"],
      ["dd", "dd"],
      ["ee", "ee"],
      ["ff", "ff"],
      ["gg", "gg"],
      ["hh", "hh"],
      ["ii", "ii"],
      ["jj", "jj"],
      ["aaa", "aaa"],
      ["bbb", "bbb"],
      ["ccc", "ccc"],
      ["ddd", "ddd"],
      ["eee", "eee"],
      ["fff", "fff"],
      ["ggg", "ggg"],
      ["hhh", "hhh"],
      ["iii", "iii"],
      ["jjj", "jjj"],
    ];
    const expectResult = ???;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }
  */
  function main() {
    console.log("S11P2\n");

    const input = [
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    // testToExample3();
  }

  main();
}
