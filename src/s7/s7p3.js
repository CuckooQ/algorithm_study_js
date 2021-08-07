/**
 * Title: Special Sort (구글 인터뷰)
 * Content: N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 *          음의 정수는 앞쪽에, 양의 정수는 뒤쪽에 있어야 한다. 
 *          또한 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.
 * Input Condition: 첫 번째 줄에 정수 N(5<=N<=100)이 주어진다.
 *                  두 번째 줄에 N개의 음수를 포함한 정수가 공백을 사이에 두고 입력된다.
 *                  숫자 0은 입력되지 않는다.
 * Output Condition: 정렬된 결과를 출력한다.
 * Input Example: 8
 *                1 2 3 -3 -2 5 6 -6
 * Output Example: -3 -2 -6 1 2 3 5 6
 */
// *다시 풀기
// *버블 정렬을 사용한 방법을 알아두자.

 {
    const MAX_NUM_COUNT = 100;
    const MIN_NUM_COUNT = 5;
    
    // 버블 정렬을 사용한 정렬 함수
    function sortNumsAsc(numbers) {
        const sortedNums = Array.from(numbers);
        for(let i=0; i<sortedNums.length-1; i++) {
            for(let j=0; j<sortedNums.length-1; j++) {
                if (Math.sign(sortedNums[j]) === 1 &&
                    Math.sign(sortedNums[j+1]) === -1
                ) {
                    [sortedNums[j], sortedNums[j+1]] = [sortedNums[j+1], sortedNums[j]];
                }
            }
        }

        return sortedNums;
    }
    /*
    function sortNumsAsc(numbers) {
        const negNums = [];
        const posiNums = [];
        numbers.forEach((num) => {
            if(Math.sign(num) === -1) {
                negNums.push(num);
            } else {
                posiNums.push(num);
            }
        })
        return negNums.concat(posiNums);
    }
    */
    function solution(numbers) {
        const sortedNums = sortNumsAsc(numbers);
        const answer = sortedNums.join(" ");
        return answer;
    }

    function testToMaxCnt() {
        const testNum = 1;
        const input = Array.from({length: MAX_NUM_COUNT}, (_, idx) => {
            if(idx % 2 === 0) {
                return (idx+1)*-1;
            } else {
                return (idx+1)*1;
            }
        });   
        const expectResult = input.sort((prev, post) => {
            if(prev < 0 & post > 0) {
                return prev - post;
            } 
        }).join(" ");
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinCnt() {
        const testNum = 2;
        const input = Array.from({length: MIN_NUM_COUNT}, (_, idx) => {
            if(idx % 2 === 0) {
                return (idx+1)*-1;
            } else {
                return (idx+1)*1;
            }
        });   
        const expectResult = input.sort((prev, post) => {
            if(prev < 0 & post > 0) {
                return prev - post;
            } 
        }).join(" ");
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const input = [1, 2, 3, -3, -2, 5, 6, -6];
        const output = this.solution(input);
        
        console.log("S7P3\n");
        // test();
        console.log(`Input: ${input.join(" ")} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxCnt();
        testToMinCnt();
    }
    
    main();
}
