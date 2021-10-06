/**
 * Title: 마구간 정하기 (결정 알고리즘)
 * Content: N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ...., xN의 좌표를 가지며, 마구간간에 좌표가 중복되는 일은 없다.
 *          현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않는다.
 *          각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶다.
 *          C마리의 말을 N개의 마구간에 배치했을 때, 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어진다.
 *                  두 번째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어진다.
 * Output Condition: 첫 번째 줄에 가장 가까운 두 말의 최대 거리를 출력하기.
 * Input Example: 5 3
 *                1 2 8 4 9
 * Output Example: 3
 */
// * 다시 풀기
// * '가장 가까운 두 말의 최대 거리' 이 표현이 헷갈리게 만든다.
// * 풀지 못한 문제이다.

{
  const MAX_MATH_MIN_FUNC_PARAM_CNT = 100_000;
  const MAX_STABLE_CNT = 200_000;
  const MIN_STABLE_CNT = 3;
  const MIN_HORSE_CNT = 2;
  const MAX_STABLE_VAL = 1_000_000_000;
  const MIN_STABLE_VAL = 0;

  function getSortedStables(stables) {
    return Array.from(stables).sort((prev, post) => prev - post);
  }

  function getCntWithinMinDist(minDist, stables) {
    let count = 0;
    let prevIdx;
    stables.forEach((stable, idx) => {
      if (idx === 0) {
        count++;
        prevIdx = 0;
        return;
      }

      const dist = stable - stables[prevIdx];
      if (dist >= minDist) {
        prevIdx = idx;
        count++;
      }
    });

    return count;
  }

  // 최소 거리
  function getDefaultLeftValForBinarySearch(stables) {
    const minDistArr = [];
    stables.forEach((stable, idx) => {
      if (idx !== 0) {
        const minDist = stable - stables[idx - 1];
        minDistArr.push(minDist);
      }
    });

    if (stables.length > MAX_MATH_MIN_FUNC_PARAM_CNT) {
      const minValArr = [];
      for (let i = 0; i < stables.length / MAX_MATH_MIN_FUNC_PARAM_CNT; i++) {
        const slicedStables = stables.slice(
          i * MAX_MATH_MIN_FUNC_PARAM_CNT,
          MAX_MATH_MIN_FUNC_PARAM_CNT
        );
        const unitMinVal = Math.min(...slicedStables);
        minValArr.push(unitMinVal);
      }

      return Math.min(...minValArr);
    } else {
      return Math.min(...minDistArr);
    }
  }

  // 최대 거리
  function getDefaultRightValForBinarySearch(stables) {
    return stables[stables.length - 1] - stables[0];
  }

  function getMaxDistBtwStable(horseCnt, stables) {
    const maxDistArr = [];
    const sortedStables = getSortedStables(stables);
    let leftVal = getDefaultLeftValForBinarySearch(sortedStables);
    let rightVal = getDefaultRightValForBinarySearch(sortedStables);
    let midVal;
    let cntUsingMidVal;
    while (leftVal <= rightVal) {
      midVal = Math.floor((leftVal + rightVal) / 2);
      cntUsingMidVal = getCntWithinMinDist(midVal, sortedStables);
      if (cntUsingMidVal >= horseCnt) {
        maxDistArr.push(midVal);
        leftVal = midVal + 1;
      } else {
        rightVal = midVal - 1;
      }
    }

    return Math.max(...maxDistArr);
  }

  function solution(horseCnt, stables) {
    const answer = getMaxDistBtwStable(horseCnt, stables);
    return answer;
  }

  function testToMaxStableCntAndMaxHorseCnt() {
    const testNum = 1;
    const inputHorseCnt = MAX_STABLE_CNT;
    const inputStable = Array.from({ length: MAX_STABLE_CNT }, (_, i) => i + 1);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputHorseCnt, inputStable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxStableCntAndMinHorseCnt() {
    const testNum = 2;
    const inputHorseCnt = MIN_HORSE_CNT;
    const inputStable = Array.from({ length: MAX_STABLE_CNT }, (_, i) => i + 1);
    const expectResult = MAX_STABLE_CNT - 1;
    const testFunction = solution;
    const condition = testFunction(inputHorseCnt, inputStable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinStableCnt() {
    const testNum = 3;
    const inputHorseCnt = MIN_STABLE_CNT;
    const inputStable = Array.from({ length: MIN_STABLE_CNT }, (_, i) => i + 1);
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputHorseCnt, inputStable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxAndMinStableVal() {
    const testNum = 4;
    const inputHorseCnt = 2;
    const inputStable = [MIN_STABLE_VAL, MAX_STABLE_VAL];
    const expectResult = MAX_STABLE_VAL - MIN_STABLE_VAL;
    const testFunction = solution;
    const condition = testFunction(inputHorseCnt, inputStable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputHorseCnt = 3;
    const inputStables = [1, 2, 8, 4, 9];
    const output = this.solution(inputHorseCnt, inputStables);

    console.log("S7P12\n");
    // test();
    console.log(`Input: ${inputHorseCnt}\n ${inputStables.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxStableCntAndMaxHorseCnt();
    testToMaxStableCntAndMinHorseCnt();
    testToMinStableCnt();
    testToMaxAndMinStableVal();
  }

  main();
}
