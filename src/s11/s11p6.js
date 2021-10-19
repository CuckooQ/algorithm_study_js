/**
 * 프로그래머스 정렬 Level 1
 * Title: K번째수
 * Content: 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 *          예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 *          1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 *          2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 *          3. 2에서 나온 배열의 3번째 숫자는 5입니다.
 *          배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: array의 길이는 1 이상 100 이하입니다.
 *                  array의 각 원소는 1 이상 100 이하입니다.
 *                  commands의 길이는 1 이상 50 이하입니다.
 *                  commands의 각 원소는 길이가 3입니다.
 * Output Condition: None
 * Input Example: [1, 5, 2, 6, 3, 7, 4]
 *                [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 * Output Example: [5, 6, 3]
 */
// Expected: 11:30 - 12:10
// Actual: 11:30 - 11:45

{
  function solution(array, commands) {
    let answer = [];

    commands.forEach(([i, j, k]) => {
      const slicedArr = array.slice(i - 1, j - 1 + 1);
      const sortedArr = slicedArr.sort((a, b) => a - b);
      const num = sortedArr[k - 1];
      answer.push(num);
    });

    return answer;
  }

  function main() {
    console.log("S11P6\n");

    const inputArray = [1, 5, 2, 6, 3, 7, 4];
    const inputCommands = [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ];
    const output = this.solution(inputArray, inputCommands);

    console.log(`Input: ${inputArray.join(" ")}\n${inputCommands.join(" ")}`);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  main();
}
