/**
 * Title: 졸업 선물
 * Content: 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 *          학생들에게 인터넷 쇼핑물에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 
 *          선생님이 가지고 있는 예산은 한정되어 있습니다.
 *          현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하기.
 *          선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있습니다. 
 *          배송비는 할인에 포함되지 않습니다.
 * Input Condition: 첫 번째 줄에 반 학생 수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
 *                  두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
 *                  상품가격과 배송비는 각각 100,000,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.
 * Output Condition: 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생 수를 출력합니다.
 * Input Example: 5 28
 *                6 6
 *                2 2
 *                4 3
 *                4 5 
 *                10 3
 * Output Example: 4
 */
// *다시 풀기. 

 {
    const MAX_STUDENT_COUNT = 1000;
    const MAX_BUDGET = 100_000_000;
    const MIN_STUDENT_COUNT = 1;
    const MIN_BUDGET = 1;
    const PRODUCT_IDX = 0;
    const DELIVERY_IDX = 1;
    const SALE = 1/2;

    function getGivablePresentCounts (budget, studentInfoList) {
        const counts = [0];
        for (let i=0; i<studentInfoList.length; i++) {
            let remainedMoney = budget;
            let count = 0;
            remainedMoney -= (studentInfoList[i][PRODUCT_IDX] * SALE + studentInfoList[i][DELIVERY_IDX]);
            if (remainedMoney <= 0) {
                continue;
            } else {
                count++;
            }

            for (let j=0; j<studentInfoList.length; j++) {
                if (i !== j) {
                    remainedMoney -= (studentInfoList[j][PRODUCT_IDX] + studentInfoList[j][DELIVERY_IDX]);
                    if (remainedMoney < 0) {
                        break;
                    } else {
                        count++;
                    }
                }
            }

            counts.push(count);
        }

        return counts;
    }

    function sortStudentInfoListAsc(studentInfoList) {
        return  studentInfoList.sort((befInfo, aftInfo) => (befInfo[0]+befInfo[1]) - (aftInfo[0]+aftInfo[1]));
    }

    function getMaxGivablePresentCount(budget, studentInfoList) {
        const sortedStudentInfoList = sortStudentInfoListAsc(studentInfoList);
        const givablePresentCounts = getGivablePresentCounts(budget, sortedStudentInfoList);

        return Math.max(...givablePresentCounts);
    }

    function solution (budget, studentInfoList) {
        const answer = getMaxGivablePresentCount(budget, studentInfoList);
        return answer;
    }

    function testToMaxStudentMaxBudget () {
        const testNum = 1;
        const inputBudget = MAX_BUDGET;
        const inputStudentInfo = [];
        for (let i=1; i<=MAX_STUDENT_COUNT; i++) {
            inputStudentInfo.push([2*i,i]);
        }
        const expectResult = MAX_STUDENT_COUNT;
        const testFunction = solution;
        const condition = (testFunction(inputBudget, inputStudentInfo) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxStudentMinBudget () {
        const testNum = 2;
        const inputBudget = MIN_BUDGET;
        const inputStudentInfo = [];
        for (let i=1; i<=MAX_STUDENT_COUNT; i++) {
            inputStudentInfo.push([2*i,i]);
        }
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(inputBudget, inputStudentInfo) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinStudentMaxBudget () {
        const testNum = 3;
        const inputBudget = MAX_BUDGET;
        const inputStudentInfo = [];
        for (let i=1; i<=MIN_STUDENT_COUNT; i++) {
            inputStudentInfo.push([2*i,i]);
        }
        const expectResult = MIN_STUDENT_COUNT;
        const testFunction = solution;
        const condition = (testFunction(inputBudget, inputStudentInfo) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinStudentMinBudget () {
        const testNum = 4;
        const inputBudget = MIN_BUDGET;
        const inputStudentInfo = [];
        for (let i=1; i<=MIN_STUDENT_COUNT; i++) {
            inputStudentInfo.push([2*i,i]);
        }
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(inputBudget, inputStudentInfo) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main () {
        const inputBudget = 28;
        const inputStudentInfo = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
        const output = this.solution(inputBudget, inputStudentInfo);
        
        console.log("S4P4\n");
        // test();
        console.log(`Input: ${inputBudget} \n ${inputStudentInfo.join('\n')}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxStudentMaxBudget();
        testToMaxStudentMinBudget();
        testToMinStudentMaxBudget();
        testToMinStudentMinBudget();
    }
    
    main();
}
