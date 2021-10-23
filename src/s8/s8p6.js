/**
 * Title: 바둑이 승차(DFS)
 * Content: 철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
 *          그런데 그의 트럭은 C킬로그램 넘게 태울 수 없다.
 *          철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
 *          N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
 *          철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하기.
 * Input Condition: 첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어진다.
 *                  두 번째 줄부터 N마리 바둑이의 무게가 주어진다.
 * Output Condition: 첫 번째 줄에 가장 무거운 무게를 출력한다.
 * Input Example: 259 5
 *                81
 *                58
 *                42
 *                33
 *                61
 * Output Example: 242
 */
// *다시 풀기
// *Math.max()의 파라미터 수가 너무 많아서 Call Stack Exceed 에러가 발생했다.
// *Math.max(), Math.min()에 의존하는 경향이 있다.
// *그 순간 최대, 최소를 알 수 있다면 Math.max(), Math.min()을 쓰지 말자.

{
  const MAX_LIMIT_WEIGHT = 100_000_000;
  const MIN_LIMIT_WEIGHT = 1;
  const MAX_CNT = 30;
  const MIN_CNT = 1;
  /*
  // dfs가 아닌 방법
  function getMaxWeightsSum(limitWeight, dogWeights) {
    let maxSum = 0;

    const sortedWeights = [...dogWeights].sort((a, b) => b - a);
    let sum = 0;
    for (const weight of sortedWeights) {
      if (sum + weight <= limitWeight) {
        sum += weight;
        maxSum = sum > maxSum ? sum : maxSum;
      } else {
        continue;
      }
    }

    return maxSum;
  }
  */
  // dfs
  function getMaxWeightsSum(limitWeight, dogWeights) {
    let maxSum = 0;
    dfs(0);
    return maxSum;

    function dfs(idx, sum = 0) {
      if (sum > limitWeight) {
        return;
      }

      if (idx >= dogWeights.length) {
        if (sum > maxSum) {
          maxSum = sum;
        }

        return;
      }

      dfs(idx + 1, sum + dogWeights[idx]);
      dfs(idx + 1, sum);
    }
  }

  function solution(limitWeight, dogWeights) {
    const answer = getMaxWeightsSum(limitWeight, dogWeights);
    return answer;
  }

  function testToLimitMaxWeight() {
    const testNum = 1;
    const inputLimitWeight = MAX_LIMIT_WEIGHT;
    const inputDogWeights = [MAX_LIMIT_WEIGHT];
    const expectResult = MAX_LIMIT_WEIGHT;
    const testFunction = solution;
    const condition =
      testFunction(inputLimitWeight, inputDogWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToLimitMinWeight() {
    const testNum = 2;
    const inputLimitWeight = MIN_LIMIT_WEIGHT;
    const inputDogWeights = [
      MIN_LIMIT_WEIGHT,
      MIN_LIMIT_WEIGHT,
      MIN_LIMIT_WEIGHT,
      MIN_LIMIT_WEIGHT,
    ];
    const expectResult = MIN_LIMIT_WEIGHT;
    const testFunction = solution;
    const condition =
      testFunction(inputLimitWeight, inputDogWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMaxDogCnt() {
    const testNum = 3;
    const inputLimitWeight = MAX_CNT;
    const inputDogWeights = Array.from({ length: MAX_CNT }, () => 5);
    const expectResult = MAX_CNT;
    const testFunction = solution;
    const condition =
      testFunction(inputLimitWeight, inputDogWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinDogCnt() {
    const testNum = 4;
    const inputLimitWeight = MIN_CNT;
    const inputDogWeights = Array.from({ length: MIN_CNT }, () => 1);
    const expectResult = MIN_CNT;
    const testFunction = solution;
    const condition =
      testFunction(inputLimitWeight, inputDogWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const inputLimitWeight = 259;
    const inputDogWeights = [81, 58, 42, 33, 61];
    const output = this.solution(inputLimitWeight, inputDogWeights);

    console.log("S8P6\n");
    // test();
    console.log(`Input: ${inputLimitWeight} \n ${inputDogWeights}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToLimitMaxWeight();
    testToLimitMinWeight();
    testToMaxDogCnt();
    testToMinDogCnt();
  }

  main();
}
