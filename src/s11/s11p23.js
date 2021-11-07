/**
 * Title: 멀쩡한 사각형
 * Content: 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다.
 *          종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다.
 *          이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데,
 *          누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다.
 *          그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다.
 *          새로운 종이를 구할 수 없는 상태이기 때문에,
 *          이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
 *          가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.
 * Input Condition: W, H : 1억 이하의 자연수
 * Output Condition: None
 * Input Example: w = 8
 *                h = 12
 * Output Example: 80
 */
// *다시 풀기
// *대각선이 지나는 사각형의 개수: 사각형의 가로 + 사각형의 세로 - (사각형의 가로와 세로의 최대 공약수)
// *최대 공약수: 유클리드 호제법 사용.
// *유클리드 호제법: 두 수 a, b에서 a를 b로 나눈 나머지를 이용해서,
//                  나누는 값(b)을 나머지로 다시 나누는 동작을 나머지가 0이 될 때까지 반복하고,
//                  나머지가 0일 때의 값이 최대 공약수가 된다.

{
  function getMaxCommonFactor(n, m) {
    return dfs(n, m);

    function dfs(n, m) {
      const remained = n % m;
      if (remained === 0) {
        return m;
      }

      return dfs(m, remained);
    }
  }

  function solution(w, h) {
    let answer;

    const maxCommonFactor = getMaxCommonFactor(w, h);
    const exceptedCnt = w + h - maxCommonFactor;
    answer = w * h - exceptedCnt;

    return answer;
  }

  function main() {
    console.log("S11P23\n");

    const inputW = 8;
    const inputH = 12;
    const output = this.solution(inputW, inputH);

    console.log(`Input: ${inputW}, ${inputH} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}
