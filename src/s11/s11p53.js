/**
 * Title: [1차] 비밀지도
 * Content: 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
 *          그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
 *          다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.
 *          1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
 *          2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다.
 *             각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
 *             지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
 *          3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
 *          4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
 *          네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.
 * Input Condition: 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
 *                  1 ≦ n ≦ 16
 *                  arr1, arr2는 길이 n인 정수 배열로 주어진다.
 *                  정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
 * Output Condition: 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
 * Input Example: n = 5
 *                arr1 = [9, 20, 28, 18, 11]
 *                arr2 = [30, 1, 21, 17, 28]
 * Output Example: ["#####","# # #", "### #", "# ##", "#####"]
 */
// Expected: 08:44 - 09:24
// Actual: 08:44 - 09:21

{
  const EMPTY = " ";
  const WALL = "#";
  const ENCRIPTED_EMPTY = "0";
  const ENCRIPTED_WALL = "1";

  function getBinaryNumStr(num, len) {
    let binNumStr = rf();
    binNumStr = binNumStr.padStart(len, ENCRIPTED_EMPTY);
    return binNumStr;

    function rf(binNum = "", remainedNum = num) {
      binNum = (1, remainedNum % 2).toString() + binNum;

      if (Math.floor(remainedNum / 2) === 0) {
        return binNum;
      }

      remainedNum = Math.floor(remainedNum / 2);
      return rf(binNum, remainedNum);
    }
  }

  function solution(n, arr1, arr2) {
    let answer;

    const decriptedMap = Array.from({ length: n }, () => "");
    const binNumArr1 = arr1.map((num) => getBinaryNumStr(num, n));
    const binNumArr2 = arr2.map((num) => getBinaryNumStr(num, n));
    for (let i = 0; i < n; i++) {
      const info1 = binNumArr1[i].split("");
      const info2 = binNumArr2[i].split("");
      for (let j = 0; j < n; j++) {
        if (info1[j] === ENCRIPTED_WALL || info2[j] === ENCRIPTED_WALL) {
          decriptedMap[i] += WALL;
        } else {
          decriptedMap[i] += EMPTY;
        }
      }
    }

    answer = decriptedMap;
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputN = 6;
    const inputArr1 = [46, 33, 33, 22, 31, 50];
    const inputArr2 = [27, 56, 19, 14, 14, 10];
    const expectResult = [
      "######",
      "###  #",
      "##  ##",
      " #### ",
      " #####",
      "### # ",
    ];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputArr1, inputArr2),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P53\n");

    const inputN = 5;
    const inputArr1 = [9, 20, 28, 18, 11];
    const inputArr2 = [30, 1, 21, 17, 28];
    const output = this.solution(inputN, inputArr1, inputArr2);

    // test();
    console.log(
      `Input: ${inputN}\n${inputArr1.join(" ")}\n${inputArr2.join(" ")} `
    );
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
