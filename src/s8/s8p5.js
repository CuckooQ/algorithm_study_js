/**
 * Title: 합이 같은 부분집합(DFS: 아마존 인터뷰)
 * Content: N개의 원소로 구성된 자연수 집합이 주어지고 이 집합을 두 개의 부분집합으로 나누었을 때, 
 *          두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 YES를 출력하고, 존재하지 않으면 NO를 출력한다.
 *          둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 한다.
 *          예를 들어, {1, 3, 5, 6, 7, 10}이 입력되면, {1, 3, 5, 7} = {6, 10}으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.
 * Input Condition: 첫 번째 줄에 자연수 N (1<=N<=10)이 주어진다.
 *                  두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않는다.
 * Output Condition: 첫 번째 줄에 YES 또는 NO를 출력한다.
 * Input Example: 6
 *                1 3 5 6 7 10
 * Output Example: YES
 */
// *서로소 집합: 공통 요소가 존재하지 않는 관계의 두 집합.
// *다시 풀기

{
    const YES = "YES";
    const NO = "NO";

    /** dfs(idx, sum)
     *             (0,0)
     *         o          x
     *       (1,1)      (1,0)
     *      o     x     o    x
     *   (2,4)  (2,1) (2,3) (2, 0)
     *   ...
     */
    

    function hasSameSumOfSubsetsInSet(set) {
        let result = false;
        dfs();

        return result;

        function dfs(idx = 0, sum = 0) {
            if (result) {
                return;
            }
    
            if (idx >= set.length) {
                const totalSum = set.reduce((acc, val)=> acc + val);
                if(totalSum - sum  === sum) {
                    result = true;
                }
    
                return result;
            } 
            
            dfs(idx + 1, sum + set[idx]);
            dfs(idx + 1, sum);
        }
    }

    function solution(set) {
        const hasSameSumOfSubsets = hasSameSumOfSubsetsInSet(set);
        const answer = hasSameSumOfSubsets ? YES : NO;
        return answer;
    }

    function main() {
        const input = [1, 3, 5, 6, 7, 10];
        const output = this.solution(input);
        
        console.log("S8P5\n");
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
    }
    
    main();
}
