/**
 * Title: 이분 검색
 * Content: 임의의 N개의 숫자가 입력으로 주어진다. 
 *          N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면, 
 *          정렬된 상태에서 이분 검색으로 M이 몇 번째에 있는지 구하기.
 * Input Condition: 첫 번째 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어진다.
 *                  두 번째 줄에 n개의 수가 공백을 사이에 두고 주어진다.
 * Output Condition: 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.
 * Input Example: 8 32
 *                23 87 65 12 57 32 99 81
 * Output Example: 3
 */
// *이분 검색 복습을 위해 다시 풀기

{
    const MAX_NUM_COUNT = 1_000_000;
    const MIN_NUM_COUNT = 3;

    function getSortedNums(nums) {
        return Array.from(nums).sort((prev, post)=> prev - post);
    }

    function getOrderWithBinarySearch(selNum, nums) {
        let tmpNums = Array.from(nums);
        let leftIdx = 0;
        let rightIdx = tmpNums.length - 1;
        let midIdx;
        let midVal;
        while(leftIdx <= rightIdx) {
            midIdx = Math.floor((leftIdx + rightIdx) / 2);
            midVal = tmpNums[midIdx];
            if (midVal === selNum) {
                break;
            } else if (midVal > selNum) {
                rightIdx = midIdx - 1;
            } else {
                leftIdx = midIdx + 1;
            }
        }
       
        return midIdx + 1;
    }

    function getOrderOfSelNum(selNum, nums) {
        const sortedNums = getSortedNums(nums);
        const order = getOrderWithBinarySearch(selNum, sortedNums);

        return order;
    }

    function solution(selNum, nums) {
        const answer = getOrderOfSelNum(selNum, nums);
        return answer;
    }

    function testToMaxNumCount() {
        const testNum = 1;
        const inputSelNum = Math.trunc(MAX_NUM_COUNT / 12345);
        const inputNums = Array.from({length: MAX_NUM_COUNT}, (_, idx)=> idx+1).reverse();
        const expectResult = Math.trunc(MAX_NUM_COUNT / 12345);
        const testFunction = solution;
        const condition = (testFunction(inputSelNum, inputNums) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinNumCount() {
        const testNum = 2;
        const inputSelNum = 1;
        const inputNums = Array.from({length: MIN_NUM_COUNT}, (_, idx)=> idx+1).reverse();
        const expectResult = 1;
        const testFunction = solution;
        const condition = (testFunction(inputSelNum, inputNums) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputSelNum = 32;
        const inputNums = [23, 87, 65, 12, 57, 32, 99, 81];
        const output = this.solution(inputSelNum, inputNums);
        
        console.log("S7P10\n");
        // test();
        console.log(`Input: ${inputSelNum}\n ${inputNums.join(" ")} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxNumCount();
        testToMinNumCount();
    }
    
    main();
}
