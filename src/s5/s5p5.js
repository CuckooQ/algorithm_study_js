/**
 * Title: 최대 매출
 * Content: 현수의 아빠는 제과점을 운영한다.
 *          현수 아빠는 현수에게 N일동안의 매출 기록을 주고, 연속된 K일동안의 최대 매출액이 얼마인지 구하라고 했다.
 *          만약 N=10이고 K=3일 때, 10일간의 매출기록이 12 15 11 20 25 10 20 19 13 15라면,
 *          연속된 3일간의 최대 매출액은 11 + 20 + 25 = 56만원이다. 
 *          최대 매출액을 구하기.
 * Input Condition: 첫 번째 줄에 N(5<=N<=100,000)과 M(2<=K<=N)이 주어진다.
 *                  두 번째 줄에 N개의 숫자열이 주어진다. 각 숫자는 500이하의 음이 아닌 정수이다.
 * Output Condition: 첫 줄에 최대 매출액을 출력한다.
 * Input Example: 10 3
 *                12 15 11 20 25 10 20 19 13 15
 * Output Example: 56
 */
// *슬라이딩 윈도우 알고리즘 복습을 위해 다시 풀기.

{
    const MAX_DAY_COUNT = 100_000;
    const MIN_DAY_COUNT = 5;
    const MIN_SERIAL_DAY_COUNT = 2;

    function getTopSalesInSerialDays(sales, serialDay) {
        let topSales = 0;
        let sum = 0;
        sales.forEach((sale, idx) => {
            sum += sale;
            if (idx >= serialDay) {
                sum -= sales[idx - serialDay];
                topSales = (sum > topSales) ? sum : topSales; 
            }
            if (topSales === 0 & idx + 1 === serialDay) {
                topSales = sum;
            }
        });

        return topSales;
    }

    function solution(sales, serialDay) {
        const answer = getTopSalesInSerialDays(sales, serialDay)
        return answer;
    }

    function testToMaxDayMaxSerialDay() {
        const testNum = 1;
        let inputSerialDay;   
        const inputSales = [];
        let expectResult = 0;
        for(let i=0; i<MAX_DAY_COUNT; i++) {
            inputSales.push(1);
            expectResult = MAX_DAY_COUNT;
        }   
        inputSerialDay = inputSales.length;
        const testFunction = solution;
        const condition = (testFunction(inputSales, inputSerialDay) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxDayMinSerialDay() {
        const testNum = 2;
        const inputSerialDay = MIN_SERIAL_DAY_COUNT;   
        const inputSales = [];
        let expectResult = 0;
        for(let i=0; i<MAX_DAY_COUNT; i++) {
            inputSales.push(1);
        }   
        for(let i=0; i<inputSerialDay; i++) {
            expectResult++;
        }   
        const testFunction = solution;
        const condition = (testFunction(inputSales, inputSerialDay) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinDayMaxSerialDay() {
        const testNum = 3;
        let inputSerialDay;   
        const inputSales = [];
        let expectResult = 0;
        for(let i=0; i<MIN_DAY_COUNT; i++) {
            inputSales.push(1);
        }   
        inputSerialDay = inputSales.length;
        for(let i=0; i<inputSerialDay; i++) {
            expectResult++;
        }   
        const testFunction = solution;
        const condition = (testFunction(inputSales, inputSerialDay) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinDayMinSerialDay() {
        const testNum = 4;
        const inputSerialDay = MIN_SERIAL_DAY_COUNT;   
        const inputSales = [];
        let expectResult = 0;
        for(let i=0; i<MIN_DAY_COUNT; i++) {
            inputSales.push(1);
        }
        for(let i=0; i<inputSerialDay; i++) {
            expectResult++;
        }   
        const testFunction = solution;
        const condition = (testFunction(inputSales, inputSerialDay) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputSerialDay = 3;
        const inputSales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
        const output = this.solution(inputSales, inputSerialDay);
        
        console.log("S5P5\n");
        // test();
        console.log(`Input: ${inputSerialDay}\n ${inputSales.join(" ")} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxDayMaxSerialDay();
        testToMaxDayMinSerialDay();
        testToMinDayMaxSerialDay();
        testToMinDayMinSerialDay();
    }
    
    main();
}
