/**
 * Title: 공주 구하기
 * Content: 정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.
 *          정보 왕국에는 왕자가 N명이 있는데, 서로 공주를 구하러 가겠다고 합니다.
 *          정보 왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
 *          왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 
 *          그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
 *          그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
 *          한 왕자가 특정 숫자를 외치면 그 왕자는 공주를 구하러 가는데서 제외하고 원 밖으로 나오게 된다.
 *          그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
 *          이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.
 *          예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3을 외쳐 제외된다.
 *          이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7번 왕자가 공주를 구하러 간다.
 *          왕자 수 N과 제외 숫자 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하기.
 * Input Condition: 첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.
 * Output Condition: 첫 줄에 마지막 나은 왕자의 번호를 출력하기.
 * Input Example: 8 3
 * Output Example: 7
 */
// *최대길이일 때의 테스트 기대 결과를 모르기 때문에 테스트할 수 없었다...

{
    const MAX_PRINCE_CNT = 1000;
    const MIN_PRINCE_CNT = 5;    
    const MAX_EXCEPTION_NUM = 9;
    const MIN_EXCEPTION_NUM = 2;

    function getSurvivedPrince (princeCnt, excNum) {
        const princes =Array.from({length: princeCnt}, (_, idx) => idx + 1);
        let excCnt = 0;
        while(princes.length !== 1) {
            excCnt++;
            if(excCnt === excNum) {
                princes.shift();
                excCnt = 0;
            } else {
                princes.push(princes.shift());  
            }
        }

        return princes[0];
    }

    function solution(princeCnt, excNum) {
        const answer = getSurvivedPrince(princeCnt, excNum);
        return answer;
    }
    /*
    function testToMaxPrinceCntMaxExcNum() {
        const testNum = 1;
        const inputPrinceCnt = MAX_PRINCE_CNT;
        const inputExcNum = MAX_EXCEPTION_NUM;
        const expectResult = ?;
        const testFunction = solution;
        const condition = (testFunction(inputPrinceCnt, inputExcNum) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxPrinceCntMinExcNum() {
        const testNum = 2;
        const inputPrinceCnt = MAX_PRINCE_CNT;
        const inputExcNum = MIN_EXCEPTION_NUM;
        const expectResult = ?;
        const testFunction = solution;
        const condition = (testFunction(inputPrinceCnt, inputExcNum) === expectResult);  
        validateTestResult(testNum, condition);
    }
    */
    function testToMinPrinceCntMaxExcNum() {
        const testNum = 3;
        const inputPrinceCnt = MIN_PRINCE_CNT;
        const inputExcNum = MAX_EXCEPTION_NUM;
        const expectResult = 2;
        const testFunction = solution;
        const condition = (testFunction(inputPrinceCnt, inputExcNum) === expectResult); 
        validateTestResult(testNum, condition);
    }

    function testToMinPrinceCntMinExcNum() {
        const testNum = 4;
        const inputPrinceCnt = MIN_PRINCE_CNT;
        const inputExcNum = MIN_EXCEPTION_NUM;
        const expectResult = 3;
        const testFunction = solution;
        const condition = (testFunction(inputPrinceCnt, inputExcNum) === expectResult); 
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputPrinceCnt = 8;
        const inputExcNum = 3;
        const output = this.solution(inputPrinceCnt, inputExcNum);
        
        console.log("S6P6\n");
        // test();
        console.log(`Input: ${inputPrinceCnt} ${inputExcNum}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        // testToMaxPrinceCntMaxExcNum();
        // testToMaxPrinceCntMinExcNum();
        testToMinPrinceCntMaxExcNum();
        testToMinPrinceCntMaxExcNum();
    }
    
    main();
}
