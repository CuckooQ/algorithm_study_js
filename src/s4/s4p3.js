/**
 * Title: 멘토링
 * Content: 현수네 반 선생님은 반 학생들의 수학 점수를 향상시키기 위해 멘토링 시스템을 만들려고 한다.
 *          멘토링은 멘토와 멘티가 한 짝이 되어 멘토가 멘티의 수학 공부를 도와주는 것이다.
 *          선생님은 M번의 수학 테스트 등수를 가지고 멘토와 멘티를 정한다.
 *          만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학 테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 *          M번의 수학 성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지인지 출력하기.
 * Input Condition: 첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
 *                  두 번째 줄부터 M개의 줄에 걸쳐 수학 테스트 결과가 학생 번호로 주어진다.
 *                  학생 번호가 제일 앞에서부터 1등, 2등, ... N등 순으로 표현된다.
 *                  만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면, 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미한다.
 * Output Condition: 첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력한다.
 * Input Example: 4 3
 *                3 4 1 2
 *                4 3 2 1
 *                3 1 4 2
 * Output Example: 3  => Mento: 3 Mentee: 1, Mento: 3 Mentee: 2, Mentt: 4 Mentee: 2 
 */
// *다시 풀기. 
// *예제의 출력 값이 나온 이유도 이해 못했다. 
// *브루트 포스의 대표 문제.

 {
    const MAX_STUDENT_COUNT = 20;
    const MAX_TEST_COUNT = 10;
    const MIN_STUDENT_COUNT = 1;
    const MIN_TEST_COUNT = 1;

    function isAvailableMento (mentoMenteePair, testResults) {
        const mento = mentoMenteePair[0];
        const mentee = mentoMenteePair[1];
        
        if (mento === mentee) {
            return false;
        }

        const testCount = testResults.length;
        const studentCount = testResults[0].length;
        let mentoRank = 0;
        let menteeRank = 0;
        let testResult = [];
        for(let i=0; i<testCount; i++) {    
            testResult = testResults[i];
            for (let rank=0; rank<studentCount; rank++) {
                if (testResult[rank] === mento) {
                    mentoRank = rank;
                }
                if (testResult[rank] === mentee) {
                    menteeRank = rank;
                }

                if (mentoRank !== 0 && menteeRank !== 0) {
                    break;
                }
            }

            if (mentoRank < menteeRank) {
                return false;
            } 

            mentoRank = 0;
            menteeRank = 0;
        }
        
        return true;
    }

    function getMentoMenteePairCount (testResults){
        const studentCount = testResults[0].length;
        const mentoMenteePairs = [];
        for (let mento=1; mento<=studentCount; mento++) {
            for (let mentee=1; mentee<=studentCount; mentee++) {
                const mentoMenteePair = [mento, mentee];
                if (isAvailableMento(mentoMenteePair, testResults)) {
                    mentoMenteePairs.push(mentoMenteePair);
                }
            }    
        }

        return mentoMenteePairs.length;
    }

    function solution (testResults) {
        const answer = getMentoMenteePairCount(testResults);
        return answer;
    }

    function createTestInput (studentCount, testCount) {
        const input = [];
        for(let i=0; i< testCount; i++) {
            const testResults = [];
            for(let j=1; j<= studentCount; j++) {
                testResults.push(j);
            }
            if (i % 2 === 0) {
                testResults.reverse();
            }
            
            input.push(testResults);
        }
        return input;
    }

    function testToMaxStudentsMaxTests () {
        const testNum = 1;
        const input = createTestInput(MAX_STUDENT_COUNT, MAX_TEST_COUNT);
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxStudentsMinTests () {
        const testNum = 2;
        const input = createTestInput(MAX_STUDENT_COUNT, MIN_TEST_COUNT);
        const expectResult = sumFromOneToSelectedNum(MAX_STUDENT_COUNT-1);
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinStudentsMaxTests () {
        const testNum = 3;
        const input = createTestInput(MIN_STUDENT_COUNT, MAX_TEST_COUNT);
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinStudentsMinTests () {
        const testNum = 4;
        const input = createTestInput(MIN_STUDENT_COUNT, MIN_TEST_COUNT);
        const expectResult = 0;
        const testFunction = solution;
        const condition = (testFunction(input) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main () {
        const input = [[3, 4, 1, 2], [4, 3, 1, 2], [3, 1, 4, 2]];
        const output = this.solution(input);
        
        console.log("S4P3\n");
        // test();
        console.log(`Input: ${input.join('\n')} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxStudentsMaxTests();
        testToMaxStudentsMinTests();
        testToMinStudentsMaxTests();
        testToMinStudentsMinTests();
    }
    
    main();
}
