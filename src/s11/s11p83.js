/**
 * Title: 베스트앨범
 * Content: 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
 *          노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 *          1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 *          2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 *          3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *          노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
 *          베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 * Input Condition: genres[i]는 고유번호가 i인 노래의 장르입니다.
 *                  plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 *                  genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 *                  장르 종류는 100개 미만입니다.
 *                  장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 *                  모든 장르는 재생된 횟수가 다릅니다.
 * Output Condition: None
 * Input Example: genres = ["classic", "pop", "classic", "classic", "pop"]
 *                plays = [500, 600, 150, 800, 2500]
 * Output Example: [4, 1, 3, 0]
 */
// Expected: 11:35 - 12:15
// Actual: 11:35 - 12:05

{
  const LIMIT = 2;

  function solution(genres, plays) {
    let answer;

    const genreSet = new Set();
    const genreSumMap = new Map();
    const genreIdxMap = new Map();
    genres.forEach((genre, idx) => {
      genreSet.add(genre);
      const cnt = genreSumMap.get(genre);
      genreSumMap.set(genre, cnt ? cnt + plays[idx] : plays[idx]);
      const genreIdxes = genreIdxMap.get(genre);
      genreIdxMap.set(genre, genreIdxes ? [...genreIdxes, idx] : [idx]);
    });

    const bestElbum = [];
    const sortedGenres = [...genreSet];
    sortedGenres.sort((a, b) => {
      const aSum = genreSumMap.get(a);
      const bSum = genreSumMap.get(b);
      return bSum - aSum;
    });
    sortedGenres.forEach((genre) => {
      const genreIdxes = genreIdxMap.get(genre);
      genreIdxes.sort((a, b) => {
        const aPlays = plays[a];
        const bPlays = plays[b];
        if (aPlays === bPlays) {
          return a - b;
        }
        return bPlays - aPlays;
      });
      for (let i = 0; i < LIMIT; i++) {
        if (genreIdxes.length === 0) {
          break;
        }
        bestElbum.push(genreIdxes.shift());
      }
    });
    answer = bestElbum;

    return answer;
  }

  function main() {
    console.log("S11P83\n");

    const inputGenres = ["classic", "pop", "classic", "classic", "pop"];
    const inputPlays = [500, 600, 150, 800, 2500];
    const output = this.solution(inputGenres, inputPlays);

    console.log(`Input: ${inputGenres.join(" ")}\n ${inputPlays.join(" ")} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  main();
}
