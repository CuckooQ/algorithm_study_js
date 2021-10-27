/**
 * Title: 폰켓몬
 * Content: 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다.
 *          홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
 *          홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다.
 *          따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
 *          예를 들어 연구실에 총 4마리의 폰켓몬이 있고,
 *          각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다.
 *          이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.
 *          첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
 *          첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
 *          첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
 *          두 번째(1번), 세 번째(2번) 폰켓몬을 선택
 *          두 번째(1번), 네 번째(3번) 폰켓몬을 선택
 *          세 번째(2번), 네 번째(3번) 폰켓몬을 선택
 *          이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만,
 *          다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
 *          당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
 *          N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때,
 *          N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아,
 *          그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
 *                  nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
 *                  폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
 *                  가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.
 * Output Condition: None
 * Input Example: [3,1,2,3]
 * Output Example: 2
 */
// Expected: 13:51 - 14:31
// Actual: 13:51 - 14:00
// *배열로부터 set의 설정 방법 복습을 위해 다시 풀기

{
  function getMaxCntofSelectableMon(nums) {
    let maxCnt = 0;

    // 다른 풀이의 set 설정
    const set = new Set(nums);
    // 다른 풀이의 유니크값만 있는 Array 설정
    // const arr = [...new Set(nums)];

    // 나의 set 설정
    /*
    const set = new Set();
    nums.forEach((num) => {
      set.add(num);
    });
    */
    maxCnt = set.size >= nums.length / 2 ? nums.length / 2 : set.size;

    return maxCnt;
  }

  function solution(nums) {
    const answer = getMaxCntofSelectableMon(nums);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [3, 3, 3, 2, 2, 4];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [3, 3, 3, 2, 2, 2];
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P28\n");

    const input = [3, 1, 2, 3];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}
