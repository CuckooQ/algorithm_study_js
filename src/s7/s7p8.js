/**
 * Title: 회의실 배정
 * Content: 한 개의 회의실이 있는데, 이를 사용하고자 하는 N개의 회의들에 대해서 회의실의 사용표를 만들려 한다.
 *          각 회의에 대해 시작 시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대 회의 수 찾기.
 *          단, 회의는 한 번 시작하면 중간에 중단될 수 없으며, 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * Input Condition: 첫 번째 줄에 회의의 수 N(1<=N<=100,000)이 주어진다. 
 *                  두 번째 줄부터 N+1줄까지 각 회의의 정보가 주어지는데, 이 것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
 *                  회의의 시작시간과 끝나는 시간의 조건은 시작시간 <= 끝나는 시간이다.
 * Output Condition: 첫 번째 줄에 최대 사용할 수 있는 회의 수를 출력한다.
 * Input Example: 5
 *                1 4
 *                2 3
 *                3 5
 *                4 6
 *                5 7
 * Output Example: 3 
 *                 ([2, 3], [3, 5], [5, 7])
 */
// *다시 풀기
// *그리디 알고리즘의 문제.
// *풀이보다 시간복잡도가 컸다. 

{
    const START_TIME_IDX = 0;
    const END_TIME_IDX = 1;

    // 풀이에서는 끝나는 시간(END_TIME_IDX)을 기본으로 정렬했다.
    function getSortedMtgsAsc(mtgInfos) {
        return Array.from(mtgInfos).sort((prev, post) => {
            if (prev[END_TIME_IDX] === post[END_TIME_IDX]) {
                return prev[START_TIME_IDX] - post[START_TIME_IDX];
            } else {
                return prev[END_TIME_IDX] - post[END_TIME_IDX];
            }
        });
    }

    // 가장 빨리 끝나는 회의부터 시작해서 가장 늦게 끝나는 회의까지 이전 끝시간과 다음 시작시간이 조건을 만족하는 회의의 개수 출력.
    function getMaxAvblMtgCnt(mtgInfos) {
        let count = 0;
        let endTime = 0;
        sortedMtgInfos = getSortedMtgsAsc(mtgInfos);
        for(let i=0; i<sortedMtgInfos.length; i++) {
            if (sortedMtgInfos[i][START_TIME_IDX] >= endTime) {
                endTime = sortedMtgInfos[i][END_TIME_IDX];
                count++;
            }
        }

        return count;
    }

    /*
    function getSortedMtgsAsc(mtgInfos) {
        return Array.from(mtgInfos).sort((prev, post) => {
            if (prev[START_TIME_IDX] === post[START_TIME_IDX]) {
                return prev[END_TIME_IDX] - post[END_TIME_IDX];
            } else {
                return prev[START_TIME_IDX] - post[START_TIME_IDX];
            }
        });
    }

    function getMaxAvblMtgCnt(mtgInfos) {
        let count = 0;
        let counts = [];
        sortedMtgInfos = getSortedMtgsAsc(mtgInfos);
        for(let i=0; i<sortedMtgInfos.length; i++) {
            let endTime = sortedMtgInfos[i][END_TIME_IDX];
            count++;
            for(let j=i+1; j<sortedMtgInfos.length; j++) {
                if (sortedMtgInfos[j][START_TIME_IDX] >= endTime) {
                    endTime = sortedMtgInfos[j][END_TIME_IDX];
                    count++;
                }
            }
            
            counts.push(count);
            count = 0;
        }
       
        return Math.max(...counts);
    }
    */

    function solution(mtgInfos) {
        const answer = getMaxAvblMtgCnt(mtgInfos);
        return answer;
    }

    function testToExample() {
        const testNum = 1;
        const input = [[3, 3], [1, 3], [2, 3]];   
        const expectResult = 2;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
        const output = this.solution(input);
        
        console.log("S7P8\n");
        test();
        console.log(`Input: ${input.join("\n")} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToExample();
    }
    
    main();
}
