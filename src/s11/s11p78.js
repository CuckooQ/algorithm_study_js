/**
 * Title: 교점에 별 만들기
 * Content: Ax + By + C = 0으로 표현할 수 있는 n개의 직선이 주어질 때, 이 직선의 교점 중 정수 좌표에 별을 그리려 합니다.
 *          예를 들어, 다음과 같은 직선 5개를
 *          2x - y + 4 = 0
 *          -2x - y + 4 = 0
 *          -y + 1 = 0
 *          5x - 8y - 12 = 0
 *          5x + 8y + 12 = 0
 *          좌표 평면 위에 그리는 경우,
 *          모든 교점의 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4), (1.5, 1.0), (2.1, -0.19), (0, -1.5), (-2.1, -0.19), (-1.5, 1.0)입니다.
 *          이 중 정수로만 표현되는 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4)입니다.
 *          문자열로 나타낼 때, 별이 그려진 부분은 *, 빈 공간(격자선이 교차하는 지점)은 .으로 표현하면 다음과 같습니다.
 *          "..........."
 *          ".....*....."
 *          "..........."
 *          "..........."
 *          ".*.......*."
 *          "..........."
 *          "..........."
 *          "..........."
 *          "..........."
 *          ".*.......*."
 *          "..........."
 *          이때 격자판은 무한히 넓으니 모든 별을 포함하는 최소한의 크기만 나타내면 됩니다.
 *          따라서 정답은
 *          "....*...."
 *          "........."
 *          "........."
 *          "*.......*"
 *          "........."
 *          "........."
 *          "........."
 *          "........."
 *          "*.......*"
 *          입니다.
 *          직선 A, B, C에 대한 정보가 담긴 배열 line이 매개변수로 주어집니다.
 *          이때 모든 별을 포함하는 최소 사각형을 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: line의 세로(행) 길이는 2 이상 1,000 이하인 자연수입니다.
 *                  line의 가로(열) 길이는 3입니다.
 *                  line의 각 원소는 [A, B, C] 형태입니다.
 *                  A, B, C는 -100,000 이상 100,000 이하인 정수입니다.
 *                  무수히 많은 교점이 생기는 직선 쌍은 주어지지 않습니다.
 *                  A = 0이면서 B = 0인 경우는 주어지지 않습니다.
 *                  별이 한 개 이상 그려지는 입력만 주어집니다.
 * Output Condition: 정답은 1,000 * 1,000 크기 이내에서 표현됩니다.
 * Input Example: [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]
 * Output Example: ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
 */
// *다시 풀기
// *두 직선의 교점 공식
//  Ax + By + E = 0
//  Cx + Dy + F = 0
//  x = (B*F - E*D) / (A*D - B*C)
//  y = (E*C - A*F) / (A*D - B*C)

{
  function solution(line) {
    let answer;

    // 접점 구하기
    const lineLen = line.length;
    const crossPointsX = [];
    const crossPointsY = [];
    const crossPoints = [];
    for (let i = 0; i < lineLen; i++) {
      for (let j = i + 1; j < lineLen; j++) {
        const [a, b, e] = line[i];
        const [c, d, f] = line[j];
        const x = (b * f - e * d) / (a * d - b * c);
        const y = (e * c - a * f) / (a * d - b * c);
        if (Number.isInteger(x) && Number.isInteger(y)) {
          crossPointsX.push(x);
          crossPointsY.push(y);
          crossPoints.push([x, y]);
        }
      }
    }

    // x와 y의 최대/최소값으로 행과 열을 포함하는 사각형 구하기
    const xMax = Math.max(...crossPointsX);
    const xMin = Math.min(...crossPointsX);
    const yMax = Math.max(...crossPointsY);
    const yMin = Math.min(...crossPointsY);
    const xLen = xMax - xMin + 1;
    const yLen = yMax - yMin + 1;
    const box = Array.from({ length: yLen }, () => ".".repeat(xLen).split(""));

    // 위, 왼쪽부터 별을 찍기 위해 정렬하고 별 찍기
    crossPoints.sort((a, b) => {
      const [ax, ay] = a;
      const [bx, by] = b;
      if (ay === by) {
        return ax - bx;
      }
      return by - ay;
    });
    for (let i = 0; i < crossPoints.length; i++) {
      const x = Math.abs(crossPoints[i][0] + xMin);
      const y = Math.abs(crossPoints[i][1] - yMax);
      box[y][x] = "*";
    }
    answer = box.map((row) => row.join(""));

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [
      [0, 1, -1],
      [1, 0, -1],
      [1, 0, 1],
    ];
    const expectResult = ["*.*"];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 1;
    const input = [
      [1, -1, 0],
      [2, -1, 0],
    ];
    const expectResult = ["*"];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 1;
    const input = [
      [1, -1, 0],
      [2, -1, 0],
      [4, -1, 0],
    ];
    const expectResult = ["*"];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P78\n");

    const input = [
      [2, -1, 4],
      [-2, -1, 4],
      [0, -1, 1],
      [5, -8, -12],
      [5, 8, 12],
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
