/**
 * Title: 등수 구하기
 * Content: N(3<=N<=100)명의 학생의 국어점수가 입력되면, 각 학생의 등수를 입력된 순서대로 출력하기.
 * Input Condition: 첫 줄에 N(3<=N<=100)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다.
 *                  같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
 *                  즉, 가장 높은 점수가 92점인데 92점이 3명이 존재하면, 1등이 3명이고 그 다음 학생은 4등이 된다.
 * Output Condition: 입력된 순서대로 등수를 출력한다.
 * Input Example: 5
 *                87 89 92 100 76
 * Output Example: 4 3 2 1 5
 */
// * 다시 풀기.

function getGradesFrom(scores) {
    const grades = Array.from({length: scores.length}, () => 1);
    for (let i=0; i<scores.length; i++) {
        for (let j=0; j<scores.length; j++) {
            if (scores[j] > scores[i]) {
                grades[i]++;
            }
        }
    }

    return grades;
} 

function solution (scores) {
    const grades = getGradesFrom(scores);
    const answer = grades.join(" ");
    return answer;
}

function testToDescendantScore () {
    const testNum = 1;
    const input = [5, 4, 3, 2, 1];   
    const expectResult = "1 2 3 4 5";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToAscendantScore () {
    const testNum = 2;
    const input = [1, 2, 3, 4, 5];   
    const expectResult = "5 4 3 2 1";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToAllSameScore () {
    const testNum = 3;
    const input = [1, 1, 1, 1, 1];   
    const expectResult = "1 1 1 1 1";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToAllDifferentScore () {
    const testNum = 4;
    const input = [20, 30, 60, 40, 10, 80, 100, 95, 84, 71];   
    const expectResult = "9 8 6 7 10 4 1 2 3 5";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMaxCount () {
    const testNum = 5;
    const input = [];
    for(let i=100; i>0; i--) {
        input.push(i);
    }   
    const resultArr = [];
    for(let i=1;i<=100;i++) {
        resultArr.push(i);
    }
    const expectResult = resultArr.join(" ");
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinCount () {
    const testNum = 6;
    const input = [1, 2, 3];   
    const expectResult = "3 2 1";
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input = [87, 89, 92, 100, 76];
    const output = this.solution(input);
    
    console.log("S2P5\n");
    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToDescendantScore();
    testToAscendantScore();
    testToAllSameScore();
    testToAllDifferentScore();
    testToMaxCount();
    testToMinCount();
}

main();
