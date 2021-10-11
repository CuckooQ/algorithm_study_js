/**
 * Title: 수 들의 조합
 * Content: N개의 정수가 주어지면, 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수를 출력하라.
 *          예를 들어, 5개의 숫자 2 4 5 8 12가 주어지고,
 *          3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면, 4+8+12 2+4+12로 2개이다.
 * Input Condition: 첫 번째 줄에 정수의 개수 N(3<=N<=20)과 임의의 정수 K(2<=K<=N)이 주어진다.
 *                  두 번째 줄에는 N개의 정수가 주어진다.
 *                  세 번째 줄에 M이 주어진다.
 * Output Condition: 총 개수를 출력한다.
 * Input Example: 5 3
 *                2 4 5 8 12
 *                6
 * Output Example: 2
 */

{
  function getMultipleCnt(nums, selectableCnt, multipleNum) {
    let multipleCnt = 0;
    dfs();
    return multipleCnt;

    function dfs(els = []) {
      if (els.length === selectableCnt) {
        const sum = els.reduce((calc, el) => calc + el);

        if (sum % multipleNum === 0) {
          multipleCnt++;
        }
        return;
      }

      const lastEl = els[els.length - 1] ? els[els.length - 1] : -1;
      const initIdx = nums.indexOf(lastEl) ? nums.indexOf(lastEl) : 0;
      for (let i = initIdx; i < nums.length; i++) {
        !els.includes(nums[i]) && dfs([...els, nums[i]]);
      }
    }
  }

  function solution(nums, cnt, multipleNum) {
    const answer = getMultipleCnt(nums, cnt, multipleNum);
    return answer;
  }

  function main() {
    console.log("S8P15\n");

    const inputNums = [2, 4, 5, 8, 12];
    const inputCnt = 3;
    const inputMultipleNum = 6;
    const output = this.solution(inputNums, inputCnt, inputMultipleNum);

    console.log(`Input: ${inputNums.join(" ")}\n${inputMultipleNum}`);
    console.log(`Output: ${output}\n`);
  }

  main();
}
