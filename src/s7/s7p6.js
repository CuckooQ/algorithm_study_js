/**
 * Title: 장난 꾸러기 현수
 * Content: 새 학기가 시작되었다. 현수는 새 짝궁을 만나 너무 신이 났다.
 *          현수네 반에는 N명의 학생들이 있다.
 *          선생님은 반 학생들에게 반 번호를 정해 주기 위해 운동장에 반 학생들을 키가 가장 작은 학생부터 일렬로 키 순으로 세웠다.
 *          제일 앞에 가장 작은 학생부터 반 번호를 1번부터 N번까지 부여한다.
 *          현수는 짝궁보다 키가 크다. 그런데 현수가 앞 번호를 받고 싶어 짝궁과 자리를 바꿨다.
 *          선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했다.
 *          현수와 짝궁이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때 현수가 받은 번호와 현수 짝궁이 받은 번호를 차례로 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(5<=N<=100)이 주어진다.
 *                  두 번째 줄에 제일 앞에서부터 일렬로 서있는 학생들의 키가 주어진다.
 *                  키 값 H는 120~180의 자연수이다.
 * Output Condition: 첫 번째 줄에 현수의 반 번호와 짝궁의 반 번호를 차례대로 출력한다.
 * Input Example: 9
 *                120 125 152 130 135 135 143 127 160
 * Output Example: 3 8
 *                 (현수의 키는 152이고 짝궁은 127이란 의미이다.)
 */
// *다시 풀기
// *해답은 쉽지만 생각 못 했다.

{
  function getMyIdAndPartnerId(heights) {
    let myId;
    let parterId;
    const sortedHeights = Array.from(heights).sort((prev, post) => prev - post);
    for (const [idx, height] of sortedHeights.entries()) {
      if (height !== heights[idx]) {
        if (!myId) {
          myId = idx + 1;
        } else {
          parterId = idx + 1;
        }
      }

      if (myId && parterId) {
        break;
      }
    }

    return [myId, parterId];
  }
  /*
    // 처음 생각한 잘못된 함수
    function getMyIdAndPartnerId(heights) {
        let myId;
        let partnerId;
        for(let i=0; i<heights.length; i++) {
            if (heights[i] > heights[i+1]) {
                if(!myId){
                    myId = i + 1;
                } else {
                    continue;
                }
            }

            if (heights[i] < heights[i-1] && i !== myId) {
                if(!partnerId){
                    partnerId = i + 1;
                } 
            }
           
            if (myId && partnerId) {
                break;
            }
        }

        return [myId, partnerId];
    }
    */
  function solution(heights) {
    const myAndPartnerId = getMyIdAndPartnerId(heights);
    const answer = myAndPartnerId.join(" ");
    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const input = [120, 130, 150, 150, 130, 150];
    const expectResult = "3 5";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = [120, 125, 152, 130, 135, 135, 143, 127, 160];
    const output = this.solution(input);

    console.log("S7P6\n");
    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
