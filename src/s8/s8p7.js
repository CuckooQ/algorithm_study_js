/**
 * Title: 최대 점수 구하기(DFS)
 * Content: 이번 정보올림피아드 대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 한다.
 *          각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 된다.
 *          제한시간 M안에 N개의 문제 중 최대 점수를 얻을 수 있도록 해야 한다.
 *          (해당 문제는 해당 시간이 걸리면 푸는 걸로 간주한다. 한 유형당 한 개만 풀 수 있다.)
 * Input Condition: 첫 번째 줄에 문제의 개수 N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어진다.
 *                  두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어진다.
 * Output Condition: 첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력한다.
 * Input Example: 5 20 
 *                10 5
 *                25 12
 *                15 8
 *                6 3
 *                7 4
 * Output Example: 41
 */

{
    const MAX_Q_CNT = 20;
    const MIN_Q_CNT = 1;
    const MAX_LIMIT_TIME = 300;
    const MIN_LIMIT_TIME = 10;

    Q_SCORE_IDX = 0;
    Q_TIME_IDX = 1;
    RESULT_SCORE_IDX = 0;
    RESULT_TIME_IDX = 1;

    function getMaxScore(limitTime, qInfos) {
        let maxScore = 0;
        dfs(0);
        return maxScore;

        function dfs(idx, result = [0, 0]) {
            if(result[RESULT_TIME_IDX] > limitTime) {
                return;
            }

            if (idx >= qInfos.length) {
                if(result[RESULT_SCORE_IDX] > maxScore) {
                    maxScore = result[RESULT_SCORE_IDX];
                };

                return;
            }
            const updatedResult = updateResultToQInfo(result, qInfos[idx]);
            dfs(idx+1, updatedResult);
            dfs(idx+1, result);
        }

        function updateResultToQInfo(result, qInfo) {
            const tmpResult = Array.from(result);
            tmpResult[RESULT_SCORE_IDX] = tmpResult[RESULT_SCORE_IDX ]+ qInfo[Q_SCORE_IDX];
            tmpResult[RESULT_TIME_IDX] = tmpResult[RESULT_TIME_IDX ]+ qInfo[Q_TIME_IDX];
            return tmpResult;
        }
    }

    function solution(limitTime, qInfos) {
        const answer = getMaxScore(limitTime, qInfos);
        return answer;
    }

    function testToMaxQCnt() {
        const testNum = 1;
        const inputLimitTime = MAX_Q_CNT;
        const inputQInfos = Array.from({length: MAX_Q_CNT}, () => [1, 1]);
        const expectResult = MAX_Q_CNT;
        const testFunction = solution;
        const condition = (testFunction(inputLimitTime, inputQInfos) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinQCnt() {
        const testNum = 2;
        const inputLimitTime = MIN_Q_CNT;
        const inputQInfos = Array.from({length: MIN_Q_CNT}, () => [1, 1]);
        const expectResult = MIN_Q_CNT;
        const testFunction = solution;
        const condition = (testFunction(inputLimitTime, inputQInfos) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxLimitTime() {
        const testNum = 3;
        const inputLimitTime = MAX_LIMIT_TIME;
        const inputQInfos = Array.from({length: 1}, () => [1, MAX_LIMIT_TIME]);
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(inputLimitTime, inputQInfos) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLimitTime() {
        const testNum = 4;
        const inputLimitTime = MIN_LIMIT_TIME;
        const inputQInfos = Array.from({length: 1}, () => [1, MIN_LIMIT_TIME]);
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(inputLimitTime, inputQInfos) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputLimitTime = 20;
        const inputQInfos = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
        const output = this.solution(inputLimitTime, inputQInfos);
        
        console.log("S8P7\n");
        // test();
        console.log(`Input: ${inputLimitTime}\n${inputQInfos.join("\n")}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxQCnt();
        testToMinQCnt();
        testToMaxLimitTime();
        testToMinLimitTime();
    }
    
    main();
}
