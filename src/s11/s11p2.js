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
 * Output Condition: None
 * Input Example: [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	
 * Output Example: 5
 */
// *다시 풀기
// *모든 경우의 수  = (n + 1) * (m + 1) * .... - 1
// *각 종류별로 아예 안 고르는 경우가 있으므로, 각 종류별로 + 1
// *아무 옷도 안 고르는 경우는 없으므로, -1

{
  class Closet {
    constructor(clothes) {
      this.kinds = new Set();
      this.clothMap = new Map();

      clothes.forEach((cloth) => {
        this.putCloth(cloth);
      });
    }

    putCloth([name, kind]) {
      this.kinds.add(kind);
      const clothes = this.clothMap.get(kind);
      this.clothMap.set(kind, clothes ? [...clothes, name] : [name]);
    }

    getCombCnt() {
      let combCnt = 1;

      const clothesCounts = [];
      this.kinds.forEach((kind) => {
        const clothes = this.clothMap.get(kind);
        clothesCounts.push(clothes.length);
      });

      for (let i = 0; i < clothesCounts.length; i++) {
        combCnt *= clothesCounts[i] + 1;
      }
      combCnt -= 1;

      return combCnt;
    }
  }

  function solution(clothes) {
    let answer = 0;

    const closet = new Closet(clothes);
    answer = closet.getCombCnt();

    return answer;
  }

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

  function testToExample3() {
    const testNum = 3;
    const input = [
      ["crowmask", "face"],
      ["t_shirt", "body"],
      ["shoes", "foot"],
    ];
    const expectResult = (1 + 1) * (1 + 1) * (1 + 1) - 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

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
    testToExample3();
  }

  main();
}
