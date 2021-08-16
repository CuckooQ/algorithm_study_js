/**
 * Title: DFS를 이용해서 부분집합 구하기
 * Content: 자연수 N이 주어지면, 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(1<=N<=10)이 주어진다.
 * Output Condition: 첫 번째 줄부터 각 줄에 하나씩 부분 집합을 아래와 같이 출력예제와 같은 순서로 출력한다.
 *                   단, 공집합은 출력하지 않는다.
 * Input Example: 3
 * Output Example: 1 2 3
 *                 1 2 
 *                 1 3
 *                 1
 *                 2 3
 *                 2
 *                 3
 */
// *다시 풀기.
// *트리가 익숙치않다.
/*
 *            1
 *        o       x
 *      2            2
 *    o   x        o   x
 *  3      3     3       3 
 * o  x   o  x  o x     o  x
 *  ...
*/

{
    const MAX_NUM = 10;
    const MIN_NUM = 1;
    const INCLUDE_FLAG = 1;
    const EXCLUDE_FLAG = 0;

    function dfs(endNum,  num = 1, subsets = [], includeFlags) {
        if (!includeFlags) {
            includeFlags = Array.from({length: endNum});
        }

        if (num > endNum) {
            const subset = [];
            for(let i=0; i<endNum; i++) {
                if (includeFlags[i] === INCLUDE_FLAG) {
                    subset.push(i+1);
                } 
            }
            subset.length !== 0  && subsets.push(subset);

            return subsets;
        }
        
        includeFlags[num-1] = INCLUDE_FLAG;
        dfs(endNum, num+1, subsets, includeFlags);
        
        includeFlags[num-1] = EXCLUDE_FLAG;
        dfs(endNum, num+1, subsets, includeFlags);

        return subsets;
    }

    function solution(num) {
        let subsets = dfs(num);
        subsets = subsets.map((subset) => {
            return subset.join(" ");
        });
        const answer = subsets.join("\n");
        return answer;
    }
    /*
    function testToMaxNum() {
        const testNum = 1;
        const input = MAX_NUM;   
        const expectResult = ?;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }
    */
    function testToMinNum() {
        const testNum = 2;
        const input = MIN_NUM;   
        const expectResult = "1";
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = 3;
        const output = this.solution(input);
        
        console.log("S8P4\n");
        // test();
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        // testToMaxNum();
        testToMinNum();
    }
    
    main();
}
