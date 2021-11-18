/**
 * Title: [1차] 캐시
 * Content: 지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
 *          이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데,
 *          제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
 *          어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고,
 *          제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.
 *          어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.
 *          캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
 *          cache hit일 경우 실행시간은 1이다.
 *          cache miss일 경우 실행시간은 5이다.
 * Input Condition: 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
 *                  cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
 *                  cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
 *                  각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다.
 *                  도시 이름은 최대 20자로 이루어져 있다.
 * Output Condition: 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.
 * Input Example: cacheSize = 3
 *                cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
 * Output Example: 50
 */
// Expected: 09:06- 09:46
// Actual: 09:06 - 09:36

{
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;

  function solution(cacheSize, cities) {
    let answer = 0;

    const cache = [];
    cities.forEach((city) => {
      city = city.toLowerCase();
      const idx = cache.indexOf(city);
      if (idx !== -1) {
        answer += CACHE_HIT;
        cache.splice(idx, 1);
      } else {
        answer += CACHE_MISS;
      }
      cache.push(city);
      cache.length > cacheSize && cache.shift();
    });

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputCacheSize = 3;
    const inputCities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
    ];
    const expectResult = 21;
    const testFunction = solution;
    const condition =
      testFunction(inputCacheSize, inputCities) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputCacheSize = 2;
    const inputCities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ];
    const expectResult = 60;
    const testFunction = solution;
    const condition =
      testFunction(inputCacheSize, inputCities) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputCacheSize = 5;
    const inputCities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ];
    const expectResult = 52;
    const testFunction = solution;
    const condition =
      testFunction(inputCacheSize, inputCities) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputCacheSize = 2;
    const inputCities = ["Jeju", "Pangyo", "NewYork", "newyork"];
    const expectResult = 16;
    const testFunction = solution;
    const condition =
      testFunction(inputCacheSize, inputCities) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputCacheSize = 0;
    const inputCities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
    const expectResult = 25;
    const testFunction = solution;
    const condition =
      testFunction(inputCacheSize, inputCities) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P89\n");

    const inputCacheSize = 3;
    const inputCities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
    ];
    const output = this.solution(inputCacheSize, inputCities);

    // test();
    console.log(`Input: ${inputCacheSize}\n${inputCities.join("\n")}`);
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
