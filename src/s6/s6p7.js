/**
 * Title: 교육 과정 설계
 * Content: 현수는 1년 과정의 수업 계획을 짜야 한다.
 *          수업 중에는 필수 과목이 있다. 이 필수 과목은 반드시 이수해야 하며, 그 순서도 정해져 있다.
 *          만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수 과목이 CBA로 주어지면, 
 *          필수 과목은 C, B, A과목이며, 이 순서대로 꼭 수업 계획을 짜야 한다.
 *          여기서 순서란, B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들어야 한다는 것이다.
 *          현수가 C, B, D, A, G, E로 수업 계획을 짜면 제대로 된 설계이지만, 
 *          C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 된다. 
 *          수업 계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작한다는 것으로 해석된다.
 *          수업 계획서 상의 각 과목은 무조건 이수된다고 가정한다.
 *          필수 과목 순서가 주어지고, 현수가 짠 N개의 수업 설계가 잘 된 것이면 YES, 잘못된 것이면 NO를 출력하기. 
 * Input Condition: 첫 번째 줄에 필수 과목의 순서가 주어진다. 
 *                  모든 과목은 영문 대문자이다.
 *                  두 번째 줄에 현수가 짠 수업 설계가 주어진다. 
 *                  수업 설계의 길이는 26이하이다.
 * Output Condition: 수업 설계가 잘 된 것이면 YES, 잘못된 것이면 NO를 출력한다.
 * Input Example: CBA
 *                CBDAGE
 * Output Example: YES
 */
// 영문자 수랑 주어진 최대 길이 수(30)가 달랐다. 임의로 26으로 정한다.


{
    const MAX_CLASS_LEN = 26;
    const YES = "YES";
    const NO = "NO";

    function isRightPlan(requiredClasses, plannedClasses) {
        const plannedClassArr = plannedClasses.split("");
        const requiredClassQueue = requiredClasses.split("");
        plannedClassArr.forEach(plannedClass => {
            if(plannedClass === requiredClassQueue[0]) {
                requiredClassQueue.shift();
            }
        });

        return requiredClassQueue.length === 0;
    }

    function solution(requiredClasses, plannedClasses) {
        const isRight = isRightPlan(requiredClasses, plannedClasses);
        const answer = isRight ? YES : NO;
        return answer;
    }

    function testToMaxLenRequiredClassAndMaxLenPlannedClass() {
        const testNum = 1;
        const inputRequiredClasses = Array.from({length: MAX_CLASS_LEN}, (_, idx) => String.fromCharCode(65+idx)).join("");
        const inputPlannedClasses = Array.from({length: MAX_CLASS_LEN}, (_, idx) => String.fromCharCode(65+idx)).join("");
        const expectResult = YES;
        const testFunction = solution;
        const condition = (testFunction(inputRequiredClasses, inputPlannedClasses) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLenRequiredClassAndMaxLenPlannedClass() {
        const testNum = 2;
        const inputRequiredClasses = String.fromCharCode(65);
        const inputPlannedClasses = Array.from({length: MAX_CLASS_LEN}, (_, idx) => String.fromCharCode(65+idx)).join("");
        const expectResult = YES;
        const testFunction = solution;
        const condition = (testFunction(inputRequiredClasses, inputPlannedClasses) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLenPlannedClass() {
        const testNum = 3;
        const inputRequiredClasses = String.fromCharCode(66);
        const inputPlannedClasses = String.fromCharCode(65);
        const expectResult = NO;
        const testFunction = solution;
        const condition = (testFunction(inputRequiredClasses, inputPlannedClasses) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputRequiredClasses = "CBA";
        const inputPlannedClasses = "CBDAGE";
        const output = this.solution(inputRequiredClasses, inputPlannedClasses);
        
        console.log("S6P7\n");
        // test();
        console.log(`Input: ${inputRequiredClasses}\n ${inputPlannedClasses} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLenRequiredClassAndMaxLenPlannedClass();
        testToMinLenRequiredClassAndMaxLenPlannedClass();
        testToMinLenPlannedClass();
    }
    
    main();
}
